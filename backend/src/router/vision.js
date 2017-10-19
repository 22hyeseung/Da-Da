const express = require('express')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const cors = require('cors')
const query = require('../query')
const fs = require('fs')
const util = require('util')
const mime = require('mime')
const multer = require('multer')
const aws = require('aws-sdk')
const uuid = require('uuid')
const fileType = require('file-type')

/**
 * Google Vision
 */
const gcloud = require('google-cloud')({
  'keyFilename': 'gkey.json',
  'projectId': 'my-project-1470459490848'
})
const vision = gcloud.vision()

/**
 * AWS S3
 */
const upload = multer({ 'storage': multer.memoryStorage() })
const s3 = new aws.S3({ 'apiVersion': '2006-03-01' })

const supportImageExt = ['png', 'jpg']
const router = express.Router()

/**
 * 도메인 CORS 제약조건 해제
 * 실서버 적용시 적용 검토필요
 */
// router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())

/**
 * 토큰유효성 검사 해제
 * 실서버 적용시 적용 검토필요
 */
// router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))

function base64Image(src) {
  const data = fs.readFileSync(src).toString('base64')
  return util.format('data:%s;base64,%s', mime.getType(src), data)
}

function googleVision(fileUrl) {
  return new Promise((resolve, reject) => {
    // faces, landmarks, labels, logos, properties, safeSearch, texts
    const types = ['labels']
    console.log(fileUrl, '<< [ fileUrl ]');

    vision.detect(fileUrl, types, (err, detections, apiResponse) => {
      console.log(err, '<< [ err ]');
      if (err) {
        reject(err)
      } else {
        const apiData = []

        apiResponse.responses[0].labelAnnotations.map(val => {
          apiData.push({
            'description': val.description,
            'score': val.score
          })
        })
        console.log(apiData, '<< [ apiData ]')

        resolve(apiData)
      }
    })
  })
}

router.get('/debug', (req, res) => {
  res.render('vision-debug.pug')
})

router.post('/', upload.single('upload_img'), (req, res) => {
  // jpg image/jpeg << [ ext, mime ]
  const file = req.file
  const { ext, mime } = fileType(file.buffer)

  if (!supportImageExt.includes(ext)) {
    console.log('<< [ xxx ]')
  } else if (file.size > (1024 * 1024 * 5)) {
    console.log('<< [ 용량 초과 ]')
  }

  s3.upload({
    'ACL': 'public-read', // 익명의 사용자도 파일 경로만 알면 읽기 가능하도록 설정
    'Body': file.buffer,
    'Bucket': process.env.S3_BUCKET_NAME,
    'Key': `${uuid.v4()}.${ext}`, //파일이름
    'ContentDisposition': 'inline', // Content-Disposition 헤더
    'ContentType': mime // Content-Type 헤더
  }, (err, s3_file) => {
    if (err) {
      console.log(err, '<< [ err ]')
    } else {
      console.log(s3_file, '<< [ s3_file ]')

      googleVision(s3_file.Location).then(result => {
        res.render('vision.pug', {
          'visionAnalysis': JSON.stringify(result),
          'imgUrl': s3_file.Location
        })
      })
    }
  })

})

module.exports = router

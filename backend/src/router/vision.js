const express = require('express')
const multer = require('multer')
const aws = require('aws-sdk')
const uuid = require('uuid')
const kue = require('kue')
const fileType = require('file-type')
const mw = require('../middleware')

const queue = kue.createQueue()
/**
 * Google Vision
 */
const gcloud = require('google-cloud')({
  'keyFilename': 'gkey.json',
  'projectId': 'my-project-1470459490848'
})

const vision = gcloud.vision()
const translate = gcloud.translate()
/**
 * Google Translate
 */

const target = 'ko'

const filterText = ['food', 'sweet and sour', 'plant', 'grilled food', 'local food', 'natural foods', 'fruit', 'produce', 'mcintosh', 'cuisine', 'american food', 'baking', 'flavor', 'recipe', 'fast food', 'dessert', 'dish', 'cookie', 'organism', 'snack', 'font', 'baked goods', 'finger food', 'junk food', 'side dish', 'vegetarian food', 'asian food', 'chinese food', 'animal source foods', 'fried food', 'shanghai food']

/**
 * AWS S3
 */
const upload = multer({ 'storage': multer.memoryStorage() })
const s3 = new aws.S3({ 'apiVersion': '2006-03-01' })

const supportImageExt = ['png', 'jpg']
const maxFileSize = 1024 * 1024 * 3

const router = express.Router()


router.use((req, res, next) => {
  next()
})
router.use(mw.corsMiddleware)
router.use(mw.expressJwtMiddleware)
router.use(mw.jsonMiddleware)
router.options('*', mw.corsMiddleware)

function googleVision(fileBuffer) {
  return new Promise((resolve, reject) => {
    // faces, landmarks, labels, logos, properties, safeSearch, texts
    const types = ['labels']

    vision.detect(fileBuffer, types, (err, detections, apiResponse) => {
      if (err) {
        reject(err)
      } else {
        const apiDescription = []
        const apiData = []

        // vision결과 가공
        apiResponse.responses[0].labelAnnotations.map(val => {
          if (filterText.indexOf(val.description) < 0) {
            apiData.push({
              'originalDescription': val.description,
              'score': val.score
            })
            apiDescription.push(val.description)
          }
        })

        // 가공된 데이터 번역
        translate.translate(apiDescription, target)
          .then(results => {
            results[0].map((description, i) => {
              apiData[i].description = description
            })
            resolve(apiData)
          })
      }
    })
  })
}

function s3upload(buffer, fileName, fileMime) {
  return new Promise((resolve, reject) => {
    s3.upload({
      'ACL': 'public-read', // 익명의 사용자도 파일 경로만 알면 읽기 가능하도록 설정
      'Body': buffer,
      'Bucket': process.env.S3_BUCKET_NAME,
      'Key': fileName, // 파일이름
      'ContentDisposition': 'inline', // Content-Disposition 헤더
      'ContentType': fileMime // Content-Type 헤더
    }, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}


/**
 * @api {post} /vision Post Vision
 * @apiDescription Vision API의 분석을 요청한다.
 * @apiName Post Vision
 * @apiGroup vision
 *
 * @apiSuccess {String} description 설명
 * @apiSuccess {Integer} score 점수
 * @apiSuccess {String} imgUrl 이미지 URL
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * {
 *     "visionAnalysis": [
 *         {
 *             "originalDescription": "tteokbokki",
 *             "score": 0.8299320936203003,
 *             "description": "떡볶이"
 *         },
 *         {
 *             "originalDescription": "curry",
 *             "score": 0.7845646142959595,
 *             "description": "카레"
 *         },
 *         {
 *             "originalDescription": "gravy",
 *             "score": 0.6326877474784851,
 *             "description": "육수"
 *         },
 *         {
 *             "originalDescription": "stew",
 *             "score": 0.6129271984100342,
 *             "description": "스튜"
 *         }
 *     ],
 *     "imgUrl": "https://dada-sh-test.s3.amazonaws.com/a12454a5-e845-412c-9240-50886fc4cdf0.jpg"
 * }
 */
router.post('/', upload.single('upload_img'), (req, res) => {
  // jpg image/jpeg << [ ext, mime ]
  const { ext, mime } = fileType(req.file.buffer)
  if (!supportImageExt.includes(ext)) {
    res.status(400)
    res.send('지원하지 않는 파일입니다.')
  } else if (req.file.size > maxFileSize) {
    res.status(400)
    res.send('파일 용량은 3mb 까지 입니다.')
  }

  const fileName = `${uuid.v4()}.${ext}`

  Promise.all([googleVision(req.file.buffer), s3upload(req.file.buffer, fileName, mime)])
    .then(result => {
      const output = {
        'visionAnalysis': result[0],
        'imgUrl': result[1].Location
      }
      res.send(output)
      return output
    })
    .then(result => {
      return new Promise((resolve, reject) => {
        queue.create('thumbnail', { 'imgUrl': result.imgUrl })
          .removeOnComplete(true)
          .save(err => {
            if (err) {
              reject(err)
            } else {
              resolve()
            }
          })
      })
    })
    .catch(err => {
      res.status(400)
      res.send(err)
    })
})

module.exports = router

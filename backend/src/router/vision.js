const express = require('express')
const { jsonParser, urlParser, onJwt, onCors } = require('../middleware')
const multer = require('multer')
const aws = require('aws-sdk')
const uuid = require('uuid')
const sharp = require('sharp')
const fileType = require('file-type')

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

router.use(jsonParser, urlParser, onJwt)
router.options('*', onCors)

function googleVision(fileBuffer) {
  return new Promise((resolve, reject) => {
    // faces, landmarks, labels, logos, properties, safeSearch, texts
    const types = ['labels']

    vision.detect(fileBuffer, types, (err, detections, apiResponse) => {
      if (err) {
        reject(err)
      } else {
        const apiData = []
        const Data = []
        apiResponse.responses[0].labelAnnotations.map(val => {
          if (filterText.indexOf(val.description) < 0) {
            apiData.push({
              'description': val.description,
              'score': val.score
            })
          }
        })
        console.log(apiData)
        const objmap = apiData.map(e => {
          return e.description
        })

        const objscore = apiData.map(e => {
          return e.score
        })

        // Translates some text into Russian
        translate.translate(objmap, target)
          .then(results => {
            results[0].map((description, i) => {
              Data.push({
                description,
                'score': objscore[i]
              })
            })
          })
          .then(() => {
            resolve(Data)
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
 *             "description": "아시아 음식",
 *             "score": 0.7088456749916077
 *         },
 *         {
 *             "description": "중국 음식",
 *             "score": 0.5872408747673035
 *         },
 *         {
 *             "description": "태국 음식",
 *             "score": 0.5646466016769409
 *         },
 *         {
 *             "description": "한국 음식",
 *             "score": 0.5556439757347107
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
    })
    .then(() => {
      sharp(req.file.buffer)
        .resize(200, 200)
        .crop(sharp.gravity.center)
        .toBuffer()
        .then(resizeFile => {
          s3upload(resizeFile, `thumb/${fileName}`)
        })
    })
    .catch(err => {
      res.status(400)
      res.send(err)
    })
})

module.exports = router

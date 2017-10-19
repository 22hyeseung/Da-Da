const express = require('express')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const cors = require('cors')
const query = require('../query')
const fs = require('fs')
const util = require('util')
const mime = require('mime')
const multer = require('multer')

const upload = multer({ 'dest': 'upload_file/' })

const gcloud = require('google-cloud')({
  'keyFilename': 'gkey.json',
  'projectId': 'my-project-1470459490848'
})

const vision = gcloud.vision()

const router = express.Router()

// 도메인 CORS 제약조건 해제
// 실서버 적용시 적용 검토필요
// router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())

// 토큰유효성 검사 해제
// 실서버 적용시 적용 검토필요
// router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))

function base64Image(src) {
  const data = fs.readFileSync(src).toString('base64')
  return util.format('data:%s;base64,%s', mime.getType(src), data)
}

router.get('/debug', (req, res) => {
  res.render('vision.pug')
})

router.post('/', upload.single('upload_img'), (req, res) => {
  // faces, landmarks, labels, logos, properties, safeSearch, texts
  const types = ['labels']

  vision.detect(req.file.path, types, (err, detections, apiResponse) => {
    if (err) {
      res.end('Errorrrr')
    } else {
      const apiData = []

      apiResponse.responses[0].labelAnnotations.map(val => {
        apiData.push({
          'description': val.description,
          'score': val.score
        })
      })

      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write('<html><meta charset="UTF-8"><body>')
      res.write(`<img max-width: 100%; src="${base64Image(req.file.path)}"><br>`)
      res.write(JSON.stringify(apiData))

      fs.unlinkSync(req.file.path)

      res.end('</body></html>')
    }
  })
})

module.exports = router

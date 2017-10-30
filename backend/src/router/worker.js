require('dotenv').config()

const kue = require('kue')
const sharp = require('sharp')
const aws = require('aws-sdk')
const uuid = require('uuid')
const axios = require('axios')
const fileType = require('file-type')

const s3 = new aws.S3({ 'apiVersion': '2006-03-01' })
const queue = kue.createQueue()

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


queue.process('thumbnail', (job, done) => {
  axios({
    'method': 'get',
    'url': `${job.data.imgUrl}`,
    'responseType': 'arraybuffer'
  })
    .then(response => {
      console.log('response.body', response.data)
      const { ext, mime } = fileType(response.data)
      console.log('ext!!!!!!!!!!!Mim11', ext, mime)
      const fileName = `${uuid.v4()}.${ext}`
      return sharp(response.data)
        .resize(200, 200)
        .crop(sharp.gravity.center)
        .toBuffer()
        .then(resizeFile => {
          console.log('done')
          return s3upload(resizeFile, `thumb/${fileName}`)
        })
        .then(() => {
          done()
        })
    })
})

const express = require('express')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const cors = require('cors')

const query = require('../query')

const router = express.Router()

/**
 * @apiDefine user user
 */

router.use(cors({
  'origin': process.env.TARGET_ORIGIN
}))

router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(expressJwt({
  'secret': process.env.JWT_SECRET
}))
/**
 * @api {get} /user getUserData
 * @apiDescription 현재 로그인된 사용자의 정보를 가져온다.
 * @apiName getUserData
 * @apiGroup user
 *
 *
 * @apiSuccess {String} provider sns분류
 * @apiSuccess {Number} providerUserId snsId
 * @apiSuccess {String} contnet 내용
 * @apiSuccess {String} imgsrc 아바타jpg Url
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * {
 *     "member_provider": "kakao",
 *     "member_provider_number": "532971400",
 *     "member_provider_name": "홍길동",
 *     "member_avatar_url": "http://k.kakaocdn.net/dn/beeqib/btqhlVJQRrn/8bFQnlKKwFyOd4xyvNIjTk/img_640x640.jpg",
 *     "member_age": null,
 *     "member_gender": null
 * }
 */
router.get('/', (req, res) => {
  query.getUserById(req.user.id)
    .then(user => {
      res.send({
        'member_provider': user.member_provider,
        'member_provider_number': user.member_provider_number,
        'member_provider_name': user.member_provider_name,
        'member_avatar_url': user.member_avatar_url,
        'member_age': user.member_age,
        'member_gender': user.member_gender
      });
    })
})

module.exports = router

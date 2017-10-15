const express = require('express')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const cors = require('cors')

const query = require('../query')

const router = express.Router()

/**
 * @apiDefine user user
 */

router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))
/**
 * @api {get} /user Get UserData
 * @apiDescription 현재 로그인된 사용자의 정보를 가져온다.
 * @apiName getUserData
 * @apiGroup user
 *
 *
 * @apiSuccess {String} member_provider sns분류
 * @apiSuccess {String} member_provider_number sns ID
 * @apiSuccess {String} member_provider_name sns 이름
 * @apiSuccess {String} member_avatar_url sns 프로필이미지
 * @apiSuccess {String} member_age 나이
 * @apiSuccess {String} member_gender 성별
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * {
 *     "member_provider": "kakao",
 *     "member_provider_number": "532971400",
 *     "member_provider_name": "홍길동",
 *     "member_avatar_url": "http://k.kakaocdn.net/dn/beeqib/btqhlVJQRrn/8bFQnlKKwFyOd4xyvNIjTk/img_640x640.jpg",
 *     "member_birth": "1990-06-14T15:00:00.000Z",
 *     "member_goal_weight": 70,
 *     "member_gender": "남"
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
        'member_birth': user.member_birth,
        'member_goal_weight': user.member_goal_weight,
        'member_gender': user.member_gender
      })
    })
})

module.exports = router

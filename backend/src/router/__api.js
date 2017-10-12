const express = require('express')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const cors = require('cors')

const query = require('../query')

const router = express.Router()

/**
 * @apiDefine __api __api
 */
router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))
router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

/**
 * @api {get} /__api/message/ message
 * @apiDescription 세션 유지를 위한 dummy call
 * @apiName message
 * @apiGroup __api
 *
 * @apiSuccess {String} body Hello SPA!
 */
router.get('/message', (req, res) => {
  res.send('Hello SPA!')
})

/**
 * @api {get} /__api/user/:id getUserById
 * @apiDescription 다른사용자를 선택하면 해당 사용자의 정보를 조회하는 API.
 * @apiName getUserById
 * @apiGroup __api
 *
 * @apiParam {Number} id 아이템 식별자
 *
 * @apiSuccess {String} provider sns분류
 * @apiSuccess {Number} providerUserId snsId
 * @apiSuccess {String} contnet 내용
 * @apiSuccess {String} imgsrc 아바타jpg Url
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * {
 *   "provider": "facebook",
 *   "providerUserId": 12083789234789,
 *   "contnet": "lame",
 *   "imgsrc": "./data/photo/_thumb/20"
 * }
 */
router.get('/user', (req, res) => {
  query.getUserById(req.user.id)
    .then(user => {
      res.send({
        'provider': user.provider,
        'providerUserId': user.provider_user_id
      })
    })
})

module.exports = router

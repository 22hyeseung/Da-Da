const express = require('express')
const expressJwt = require('express-jwt')
const cors = require('cors')
const bodyParser = require('body-parser')

const query = require('../query')

const router = express.Router()

/**
 * @apiDefine weight
 */
router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ 'extended': false }))
router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))
router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

/**
 * @api {get} /all Get WeightAll
 * @apiDescription 체중기록 전체현황. 로그인한 사용자의 최초 기록시간부터 현재까지의 기록을 불러온다.
 * @apiName getWeightAll
 * @apiGroup weight
 *
 * @apiSuccess {String} day_log_height 기록 키
 * @apiSuccess {Number} day_log_kg 기록 몸무게
 * @apiSuccess {Number} day_log_kcal 기록 칼로리
 * @apiSuccess {String} day_log_diary_date 기록일
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * [
 *     {
 *         "day_log_height": 171,
 *         "day_log_kg": 77,
 *         "day_log_kcal": 1100,
 *         "day_log_diary_date": "2017-10-15T15:00:00.000Z"
 *     },
 *     {
 *         "day_log_height": 170,
 *         "day_log_kg": 78,
 *         "day_log_kcal": 1200,
 *         "day_log_diary_date": "2017-10-14T15:00:00.000Z"
 *     }
 * ]
 */
router.get('/all', (req, res) => {
  const param = { 'day_log_member_id': req.user.id }

  return query.getDayLogAll(param)
    .then(result => {
      res.send(result)
    })
})

module.exports = router

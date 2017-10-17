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

/**
 * @api {get} / Get WeightDate
 *
 * @apiDescription 사용자가 찾고자 하는 날짜를 기준으로 등록한 뭄무게와 목표 몸무게, 처음에 입력한 몸무게를 불러온다.
 * @apiName getWeightDate
 * @apiGroup weight
 *
 * @apiSuccess {Number} first_kg 사용자가 처음 입력한 몸무게
 * @apiSuccess {Number} goal_weight 사용자가 입력한 목표 몸무게
 * @apiSuccess {Number} date_weight 특정 날짜에 입력한 몸무게
 *
 * @apiSuccesExample {JSON} Success-Response:
 * {
 *   "member_id": 1,
 *   "date": "20171004",
 *   "first_kg": 90,
 *   "goal_weight": 39,
 *   "date_weight": 21
 * }
 */
router.get('/', (req, res) => {
  const user = {
    'day_log_member_id': req.user.id,
    'day_log_diary_date': req.query.date
  }

  const data = {
    'member_id': req.user.id,
    'date': req.query.date,
    'first_kg': 0,
    'goal_weight': 0,
    'date_weight': 0
  }

  query.getWeightByDate(user)
    .then(weight_date => {
      if (weight_date) {
        data.date_weight = weight_date.day_log_kg
        data.goal_weight = weight_date.member_goal_weight
      }
    })
    .then(() => {
      return query.getFirstKgById(user)
        .then(first => {
          if (first) {
            data.first_kg = first.day_log_kg
          }
        })
    })
    .then(() => {
      res.send(data)
    })
})

module.exports = router

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
 * @api {get} /weight/all Get WeightAll
 * @apiDescription 체중기록 전체현황. 로그인한 사용자의 최초 기록시간부터 현재까지의 기록을 불러온다.
 * @apiName getWeightAll
 * @apiGroup weight
 *
 * @apiSuccess {String} allDayLog 기록 리스트
 * @apiSuccess {String} allDayLog.day_log_height 기록 키
 * @apiSuccess {Number} allDayLog.day_log_kg 기록 몸무게
 * @apiSuccess {Number} allDayLog.day_log_kcal 기록 칼로리
 * @apiSuccess {String} allDayLog.day_log_diary_date 기록일
 * @apiSuccess {String} goal_weight 목표 칼로리
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * {
 *     "allDayLog": [
 *         {
 *             "day_log_height": 171,
 *             "day_log_kg": 78,
 *             "day_log_kcal": 1800,
 *             "day_log_diary_date": "2017-10-14T15:00:00.000Z"
 *         },
 *         {
 *             "day_log_height": 170,
 *             "day_log_kg": 77,
 *             "day_log_kcal": 2000,
 *             "day_log_diary_date": "2017-10-13T15:00:00.000Z"
 *         }
 *     ],
 *     "goal_weight": null
 * }
 */
router.get('/all', (req, res) => {
  const param = { 'day_log_member_id': req.user.id }

  const out = {}

  query.getDayLogAll(param)
    .then(result => {
      out.allDayLog = result
    })
    .then(() => {
      return query.getUserById(req.user.id)
        .then(result => {
          out.goal_weight = result.member_goal_weight
        })
    })
    .then(() => {
      res.send(out)
    })
})

module.exports = router

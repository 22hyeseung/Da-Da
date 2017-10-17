const express = require('express')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const cors = require('cors')

const query = require('../query')

const router = express.Router()

router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))

/**
 * @apiDefine report report
 */

/**
 * @api {get} /nutrition/days Get ReportNutrition
 * @apiDescription 사용자의 영양분을 일별기간 통계낸다.
 * @apiName getReportNutrition
 * @apiGroup report
 *
 * @apiParam {String} start_date 시작일 YYYYMMDD
 * @apiParam {String} end_date 종료일 YYYYMMDD
 *
 * @apiSuccess {Number} eat_log_member_id 회원ID
 * @apiSuccess {String} eat_log_diary_date 기록일
 * @apiSuccess {Number} carb 탄수화물
 * @apiSuccess {Number} protein 단백질
 * @apiSuccess {Number} fat 지방
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * [
 *     {
 *         "eat_log_member_id": 7,
 *         "eat_log_diary_date": "2017-10-14T15:00:00.000Z",
 *         "carb": 544.05,
 *         "protein": 250.75,
 *         "fat": 56.75
 *     },
 *     {
 *         "eat_log_member_id": 7,
 *         "eat_log_diary_date": "2017-10-15T15:00:00.000Z",
 *         "carb": 427.4,
 *         "protein": 159.8,
 *         "fat": 122.6
 *     }
 * ]
 */
router.get('/nutrition/days', (req, res) => {
  const param = {
    'eat_log_member_id': req.user.id,
    'start_date': req.query.start_date,
    'end_date': req.query.end_date
  }

  if (param.start_date && param.end_date) {
    query.getReportNutrition(param)
      .then(result => {
        res.status(200)
        res.send(result)
      })
  } else {
    res.status(405)
    res.send('조회 기간을 지정 해야합니다.')
  }
})

/**
 * @api {get} /nutrition/summary Get ReportNutritionSum
 * @apiDescription 사용자의 영양분을 기간내 합산한다.
 * @apiName ReportNutritionSummary
 * @apiGroup report
 *
 * @apiParam {String} start_date 시작일 YYYYMMDD
 * @apiParam {String} end_date 종료일 YYYYMMDD
 *
 * @apiSuccess {Number} eat_log_member_id 회원ID
 * @apiSuccess {Number} carb 탄수화물
 * @apiSuccess {Number} protein 단백질
 * @apiSuccess {Number} fat 지방
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * {
 *     "eat_log_member_id": 7,
 *     "carb": 971.45,
 *     "protein": 410.55,
 *     "fat": 179.35
 * }
 */
router.get('/nutrition/summary', (req, res) => {
  const param = {
    'eat_log_member_id': req.user.id,
    'start_date': req.query.start_date,
    'end_date': req.query.end_date
  }

  if (param.start_date && param.end_date) {
    query.getReportNutritionSum(param)
      .then(result => {
        res.status(200)
        res.send(result)
      })
  } else {
    res.status(405)
    res.send('조회 기간을 지정 해야합니다.')
  }
})

module.exports = router

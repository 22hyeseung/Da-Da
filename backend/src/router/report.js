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
router.options('*', cors())
/**
 * @apiDefine report report
 */

/**
 * @api {get} /report/nutrition/days Get ReportNutrition
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
 * /report/nutrition/days?start_date=20171010&end_date=20171016
 *
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
 * @api {get} /report/nutrition/summary Get ReportNutritionSum
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
 * /report/nutrition/summary?start_date=20171010&end_date=20171016
 *
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

/**
 * @api {get} /kcal/days Get Kcal
 * @apiDescription 레포트에서 특정 기간동안의 입력했던 먹은 음식들의 일별 칼로리
 * @apiName getKcalDays
 * @apiGroup report
 *
 * @apiParam {String} start_date 시작일 YYYYMMDD
 * @apiParam {String} end_date 종료일 YYYYMMDD
 *
 * @apiSuccess {Number} eat_log_meal_tag 사용자가 섭취한 시기
 * @apiSuccess {Number} day_log_diary_date 사용자가 등록한 섭취일자
 * @apiSuccess {Number} kcal 사용자가 meal_tag에 섭취한 당일 열량
 * @apiSuccess {Number} day_log_kcal 사용자가 입력한 당일 목표 섭취 칼로리
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * http://localhost:5000/report/kcal/days?start_date=20170101&end_date=20170102
 *{
 *    "meal_kcal": [
 *        {
 *            "eat_log_meal_tag": "아침",
 *            "diary_date": "2017-10-11",
 *            "kcal": 7.21
 *        },
 *        {
 *            "eat_log_meal_tag": "저녁",
 *            "diary_date": "2017-10-11",
 *            "kcal": 21.63
 *        },
 *        {
 *            "eat_log_meal_tag": "간식",
 *            "diary_date": "2017-10-11",
 *            "kcal": 28.84
 *        },
 *        {
 *            "eat_log_meal_tag": "점심",
 *            "diary_date": "2017-10-11",
 *            "kcal": 14.42
 *        },
 *        {
 *            "eat_log_meal_tag": "간식",
 *            "diary_date": "2017-10-21",
 *            "kcal": 28.84
 *        },
 *        {
 *            "eat_log_meal_tag": "저녁",
 *            "diary_date": "2017-10-21",
 *            "kcal": 42.24
 *        }
 *    ],
 *    "day_goal_kcal": [
 *        {
 *            "day_log_kcal": 1200,
 *            "diary_date": "2017-10-11"
 *        },
 *        {
 *            "day_log_kcal": null,
 *            "diary_date": "2017-10-11"
 *        },
 *        {
 *            "day_log_kcal": 1300,
 *            "diary_date": "2017-10-10"
 *        },
 *        {
 *            "day_log_kcal": 1200,
 *            "diary_date": "2017-10-14"
 *        },
 *        {
 *            "day_log_kcal": 1900,
 *            "diary_date": "2017-10-16"
 *        },
 *        {
 *            "day_log_kcal": 2000,
 *            "diary_date": "2017-10-19"
 *        },
 *        {
 *            "day_log_kcal": 2009,
 *            "diary_date": "2017-10-27"
 *        }
 *    ],
 *    "default_goal_kcal": {
 *        "day_log_kcal": 1300
 *    }
 *}
 */
router.get('/kcal/days', (req, res) => {
  const param = {
    'eat_log_member_id': req.user.id,
    'day_log_member_id': req.user.id,
    'start_date': req.query.start_date,
    'end_date': req.query.end_date
  }

  if (param.start_date && param.end_date) {
    query.getReportKcalByDate(param)
      .then(meal_kcal => {
        query.getGoalKcalByDate(param)
          .then(day_goal_kcal => {
            query.getFirstGoalKcalById(param)
              .then(default_goal_kcal => {
                res.send({ meal_kcal, day_goal_kcal, default_goal_kcal })
              })
          })
      })
  } else {
    res.status(405)
    res.send('조회 기간을 지정 해야합니다.')
  }
})

/**
 * @api {get} /kcal/summary GetKcalSummaryDate
 * @apiDescription 사용자의 아침,점심,저녁,간식의 비중을 요약
 * @apiName getKcalSummaryDate
 * @apiGroup report
 *
 * @apiParam {String} start_date 시작일 YYYYMMDD
 * @apiParam {String} end_date 종료일 YYYYMMDD
 *
 * @apiSuccess {Number} eat_log_member_id 회원ID
 * @apiSuccess {String} eat_log_meal_tag 섭취시기
 * @apiSuccess {Number} sum(kcal) 합계
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * http://localhost:5000/report/kcal/summary?start_date=20170101&end_date=20170102
 * [
 *     {
 *         "eat_log_meal_tag": "아침",
 *         "sum(kcal)": 9.37
 *     },
 *     {
 *         "eat_log_meal_tag": "점심",
 *         "sum(kcal)": 18.74
 *     },
 *     {
 *         "eat_log_meal_tag": "저녁",
 *         "sum(kcal)": 28.11
 *     },
 *     {
 *         "eat_log_meal_tag": "간식",
 *         "sum(kcal)": 37.48
 *     }
 * ]
 * */
router.get('/kcal/summary', (req, res) => {
  const param = {
    'eat_log_member_id': req.user.id,
    'start_date': req.query.start_date,
    'end_date': req.query.end_date
  }

  query.getReportKcalByDateAvg(param)
    .then(data => {
      res.send(data)
    })
})

module.exports = router

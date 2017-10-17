const express = require('express')
const expressJwt = require('express-jwt')
const cors = require('cors')
const bodyParser = require('body-parser')

const query = require('../query')

const router = express.Router()

/**
 * @apiDefine report
 */
router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ 'extended': false }))
router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))
router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

/**
 * @api {get} /kcal/days Get Kcal for summary
 * @apiDescription 레포트에서 특정 기간동안의 입력했던 먹은 음식들의 일별 칼로리
 * @apiName
 * @apiGroup
 *
 * @apiSuccess {array} food_kcals food서치를 통해 등록한 기록에 대한 열량
 * @apiSuccess {array} recipe_kcals recipe 서치를 통해 등록한 기록에 대한 열량
 * @apiSuccess {array} goal_kcal 사용자가 입력한 당일 목표 섭취 칼로리
 * @apiSuccess {Number} eat_log_member_id user아이디
 * @apiSuccess {Date} eat_log_diary_date 기록한 날짜
 * @apiSuccess {Number} eat_log_id 데이터베이스 식별자
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * {
 *    "food_kcals": [
 *        {
 *            "eat_log_member_id": 1,
 *            "eat_log_diary_date": "2017-10-09T15:00:00.000Z",
 *            "eat_log_id": 2,
 *            "eat_log_recipe_id": null,
 *            "eat_log_serve": null,
 *            "food_kcal": 57.68
 *        },
 *        {
 *            "eat_log_member_id": 1,
 *            "eat_log_diary_date": "2017-10-10T15:00:00.000Z",
 *            "eat_log_id": 3,
 *            "eat_log_recipe_id": null,
 *            "eat_log_serve": null,
 *            "food_kcal": 57.68
 *        }
 *    ],
 *    "recipe_kcals": [
 *        {
 *            "eat_log_member_id": 1,
 *            "eat_log_diary_date": "2017-10-10T15:00:00.000Z",
 *            "eat_log_id": 4,
 *            "eat_log_recipe_id": 1,
 *            "eat_log_serve": 40,
 *            "recipe_kcal": 292
 *        }
 *    ],
 *   "goal_kcal": []
 *}
 * */
 router.get('/kcal/days', (req, res) => {
  const start_date = req.query.start_date
  const end_date = req.query.end_date
  const eat_log_member_id = req.user.id
  const day_log_member_id = req.user.id

  query.getKcalsFoodByDate({ eat_log_member_id, start_date, end_date })
    .then(food_kcals => {
      query.getKcalsRecipeByDate({ eat_log_member_id, start_date, end_date })
        .then(recipe_kcals => {
          query.getGoalKcalsByDate({ day_log_member_id, start_date, end_date })
          .then(goal_kcal => {
            res.send({food_kcals, recipe_kcals, goal_kcal})
          })
        })
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

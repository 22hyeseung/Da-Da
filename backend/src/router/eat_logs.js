const express = require('express')
const expressJwt = require('express-jwt')
const cors = require('cors')
const bodyParser = require('body-parser')

const query = require('../query')

const router = express.Router()

/**
 * @apiDefine eatlog
 */
router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ 'extended': false }))
router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))
router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

/**
 * @api {post} /eat-logs Post Eat-logs
 * @apiDescription 사용자가 먹은 음식을 기록
 * @apiName postEatLogs
 * @apiGroup eatlog
 *
 * @apiParam {Integer} food_id 입력 food등록
 * @apiParam {Integer} recipe_id 입력 recipe등록
 * @apiParam {Enum} meal_tag 아침,점심,저녁,간식인지 구분
 * @apiParam {Float} amount 먹은양 기록
 * @apiParam {String} picture 사진을 기록
 * @apiParam {Date} date 등록일
 *
 * @apiSuccess {Integer} eat_log_id eat_log에 남겨지는 id
 * @apiSuccess {Integer} eat_log_member_id 기록한 member의 id
 * @apiSuccess {Integer} eat_log_food_id food를 기록할시 food_id 입력
 * @apiSuccess {Integer} eat_log_recipe_id recipe를 기록할시 recipe_id 입력
 * @apiSuccess {Enum} eat_log_meal_tag 아침,점심,저녁,간식인지 구분
 * @apiSuccess {Float} eat_log_amount 먹은양 기록
 * @apiSuccess {String} eat_log_picture 사진을 기록
 * @apiSuccess {Date} eat_log_diary_date 등록일
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/eat-logs
 * [
 *     {
 *         "eat_log_id": 1,
 *         "eat_log_member_id": 1,
 *         "eat_log_food_id": 1,
 *         "eat_log_recipe_id": null,
 *         "eat_log_meal_tag": "아침",
 *         "eat_log_amount": 100,
 *         "eat_log_serve": null,
 *         "eat_log_picture": null,
 *         "eat_log_diary_date": "2017-10-15T15:00:00.000Z",
 *         "eat_log_submit_time": "2017-10-14T10:07:55.000Z"
 *     }
 * ]
 */
router.post('/', (req, res) => {
  const food_id = req.body.food_id ? req.body.food_id : null
  const recipe_id = req.body.recipe_id ? req.body.recipe_id : null
  const picture = req.body.picture ? req.body.picture : null
  const amount = req.body.amount ? req.body.amount : null
  const serve = req.body.serve ? req.body.serve : null
  const eat_log_meal = {
    'eat_log_member_id': req.user.id,
    'eat_log_food_id': food_id,
    'eat_log_recipe_id': recipe_id,
    'eat_log_meal_tag': req.body.meal_tag,
    'eat_log_amount': amount,
    'eat_log_serve': serve,
    'eat_log_picture': picture,
    'eat_log_diary_date': req.body.date
  }

  query.postEatLogs(eat_log_meal)
    .then(eat_log => {
      if (eat_log) {
        res.send(eat_log)
      } else {
        console.log('Eat_logs POST Error')
      }
    })
})

/**
 * @api {get} /eat-logs Get Eat-logs
 * @apiDescription 사용자가 지정한날에 먹은기록을 가져온다.
 * @apiName eat-logs
 * @apiGroup eatlog
 *
 * @apiParam {Date} date 등록일
 *
 * @apiSuccess {Integer} eat_log_id eat_log에 남겨지는 id
 * @apiSuccess {Integer} eat_log_member_id 기록한 member의 id
 * @apiSuccess {Integer} eat_log_food_id food를 기록할시 food_id 입력
 * @apiSuccess {Integer} eat_log_recipe_id recipe를 기록할시 recipe_id 입력
 * @apiSuccess {Enum} eat_log_meal_tag 아침,점심,저녁,간식인지 구분
 * @apiSuccess {String} eat_log_picture 사진을 기록
 * @apiSuccess {Date} eat_log_diary_date 등록일
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/eat-logs?date=20171010
 * {
 *     "foodresult": [
 *         {
 *             "eat_log_id": 2,
 *             "eat_log_food_id": 1,
 *             "food_unit": "g",
 *             "eat_log_meal_tag": "저녁",
 *             "food_kcal": 60.1,
 *             "food_carb": 10.8,
 *             "food_protein": 2.2,
 *             "food_fat": 0.9
 *         },
 *         {
 *             "eat_log_id": 3,
 *             "eat_log_food_id": 1,
 *             "food_unit": "g",
 *             "eat_log_meal_tag": "저녁",
 *             "food_kcal": 120.2,
 *             "food_carb": 21.6,
 *             "food_protein": 4.4,
 *             "food_fat": 1.8
 *         },
 *         {
 *             "eat_log_id": 5,
 *             "eat_log_food_id": 2,
 *             "food_unit": "g",
 *             "eat_log_meal_tag": "점심",
 *             "food_kcal": 216.3,
 *             "food_carb": 42,
 *             "food_protein": 8.7,
 *             "food_fat": 1.5
 *         }
 *     ],
 *     "reciperesult": [
 *         {
 *             "eat_log_id": 1,
 *             "eat_log_recipe_id": 1,
 *             "eat_log_meal_tag": "저녁",
 *             "recipe_kcal": 3400,
 *             "recipe_carb": 200,
 *             "recipe_protein": 200,
 *             "recipe_fat": 200
 *         }
 *     ]
 * }
 */
router.get('/', (req, res) => {
  const eat_log_meal = {
    'eat_log_member_id': req.user.id,
    'eat_log_diary_date': req.query.date
  }

  query.getEatLogsFood(eat_log_meal)
    .then(foodresult => {
      query.getEatLogsRecipe(eat_log_meal)
        .then(reciperesult => {
          res.send({ foodresult, reciperesult })
        })
    })
})

/**
 * @api {get} /eat-logs/summary Get EatSummary
 * @apiDescription 우측의 사용자 칼로리 요약
 * @apiName eatSummary
 * @apiGroup eatlog
 *
 * @apiParam {String} date 요약할 날짜 ("YYYYMMDD")
 *
 * @apiSuccess {Integer} member_id 사용자 id
 * @apiSuccess {String} date summary의 날짜
 * @apiSuccess {Integer} day_log_kcal 목표 칼로리
 * @apiSuccess {Integer} today_kcal 하루 섭취 칼로리
 * @apiSuccess {Enum} today_burn_kcal 하루 소모 칼로리
 * @apiSuccess {Float} today_carb 하루 섭취 탄수화물
 * @apiSuccess {String} today_protein 하루 섭취 단백질
 * @apiSuccess {Date} today_fat 하루 섭취 지방
 *
 * @apiSuccessExample {json} Success-Response:
 * /eat-logs/summary?date=20171010
 *
 * {
 *     "member_id": 1,
 *     "date": "20171015",
 *     "day_log_kcal": 1200,
 *     "today_kcal": 260,
 *     "today_burn_kcal": 340,
 *     "today_carb": 132,
 *     "today_protein": 56,
 *     "today_fat": 72
 * }
 */
router.get('/summary', (req, res) => {
  const param = {
    'day_log_member_id': req.user.id,
    'day_log_diary_date': req.query.date,
    'eat_log_member_id': req.user.id,
    'eat_log_diary_date': req.query.date,
    'burn_member_id': req.user.id,
    'burn_date': req.query.date
  }

  const out = {
    'member_id': req.user.id,
    'date': req.query.date,
    'day_log_kcal': 0,
    'today_kcal': 0,
    'today_burn_kcal': 0,
    'today_carb': 0,
    'today_protein': 0,
    'today_fat': 0
  }

  query.getSelectDayLog(param)
    .then(result => {
      if (result) {
        out.day_log_kcal = result.day_log_kcal
      } else {
        return query.getLastDaylog(param)
          .then(result => {
            if (result && result.burn_kcal !== null) {
              out.day_log_kcal = result.day_log_kcal
            }
          })
      }
    })
    .then(() => {
      return query.getEatKcalByDate(param)
        .then(result => {
          if (result) {
            out.today_kcal = result.today_kcal
            out.today_carb = result.today_carb
            out.today_protein = result.today_protein
            out.today_fat = result.today_fat
          }
        })
    })
    .then(() => {
      return query.getBurnKcalByDate(param)
        .then(result => {
          if (result && result.burn_kcal !== null) {
            out.today_burn_kcal = result.burn_kcal
          }
        })
    })
    .then(() => {
      res.send(out)
    })
})

module.exports = router

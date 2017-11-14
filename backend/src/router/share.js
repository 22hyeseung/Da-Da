const express = require('express')

const query = require('../query')
const mw = require('../middleware')

const router = express.Router()

/**
 * @apiDefine eatlog
 */
router.use((req, res, next) => {
  next()
})

router.use(mw.jsonMiddleware)
router.use(mw.urlencodedMiddleware)
router.use(mw.corsMiddleware)
router.options('*', mw.corsMiddleware)
/**
 * @api {get} /share GetShare
 * @apiDescription 사용자가 하루기록을 공유
 * @apiName GetShare
 * @apiGroup share
 *
 * @apiParam {Integer} userid user.id
 * @apiParam {Integer} diary_date 공유하고자 하는 기록의 날짜
 *
 * @apiSuccess {Array} FoodLogs eat_logs 중 food로 기록된 기록
 * @apiSuccess {Array} RecipeLogs eat_logs 중 recipe로 기록된 기록
 * @apiSuccess {Array} Burn burn 기록
 * @apiSuccess {Array} Daylog day_log 기록
 * @apiSuccess {Array} Report_kcal 아침,점심,저녁,간식별 섭취 칼로리
 * @apiSuccess {Array} Report_nutri 영양소 별 섭취 칼로리
 * @apiSuccess {Array} User 유저 정보
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/share?id=1&date=20171010
 * {
 *     "FoodLogs": [
 *         {
 *             "eat_log_id": 3,
 *             "eat_log_picture": null,
 *             "eat_log_food_id": 2,
 *             "eat_log_amount": 80,
 *             "food_name_ko": "[오뚜기] 옛날국밥쇠고기미역국밥",
 *             "food_name_en": "[Ottogi] Old rice cooked rice beef seaweed rice",
 *             "food_unit": "g",
 *             "eat_log_meal_tag": null,
 *             "food_kcal": 57.68,
 *             "food_carb": 11.2,
 *             "food_protein": 2.32,
 *             "food_fat": 0.4
 *         },
 *         {
 *             "eat_log_id": 5,
 *             "eat_log_picture": null,
 *             "eat_log_food_id": 2,
 *             "eat_log_amount": 10,
 *             "food_name_ko": "[오뚜기] 옛날국밥쇠고기미역국밥",
 *             "food_name_en": "[Ottogi] Old rice cooked rice beef seaweed rice",
 *             "food_unit": "g",
 *             "eat_log_meal_tag": null,
 *             "food_kcal": 7.21,
 *             "food_carb": 1.4,
 *             "food_protein": 0.29,
 *             "food_fat": 0.05
 *         },
 *         {
 *             "eat_log_id": 6,
 *             "eat_log_picture": null,
 *             "eat_log_food_id": 2,
 *             "eat_log_amount": 10,
 *             "food_name_ko": "[오뚜기] 옛날국밥쇠고기미역국밥",
 *             "food_name_en": "[Ottogi] Old rice cooked rice beef seaweed rice",
 *             "food_unit": "g",
 *             "eat_log_meal_tag": "아침",
 *             "food_kcal": 7.21,
 *             "food_carb": 1.4,
 *             "food_protein": 0.29,
 *             "food_fat": 0.05
 *         },
 *         {
 *             "eat_log_id": 7,
 *             "eat_log_picture": null,
 *             "eat_log_food_id": 2,
 *             "eat_log_amount": 20,
 *             "food_name_ko": "[오뚜기] 옛날국밥쇠고기미역국밥",
 *             "food_name_en": "[Ottogi] Old rice cooked rice beef seaweed rice",
 *             "food_unit": "g",
 *             "eat_log_meal_tag": "점심",
 *             "food_kcal": 14.42,
 *             "food_carb": 2.8,
 *             "food_protein": 0.58,
 *             "food_fat": 0.1
 *         },
 *         {
 *             "eat_log_id": 8,
 *             "eat_log_picture": null,
 *             "eat_log_food_id": 2,
 *             "eat_log_amount": 30,
 *             "food_name_ko": "[오뚜기] 옛날국밥쇠고기미역국밥",
 *             "food_name_en": "[Ottogi] Old rice cooked rice beef seaweed rice",
 *             "food_unit": "g",
 *             "eat_log_meal_tag": "저녁",
 *             "food_kcal": 21.63,
 *             "food_carb": 4.2,
 *             "food_protein": 0.87,
 *             "food_fat": 0.15
 *         },
 *         {
 *             "eat_log_id": 9,
 *             "eat_log_picture": null,
 *             "eat_log_food_id": 2,
 *             "eat_log_amount": 40,
 *             "food_name_ko": "[오뚜기] 옛날국밥쇠고기미역국밥",
 *             "food_name_en": "[Ottogi] Old rice cooked rice beef seaweed rice",
 *             "food_unit": "g",
 *             "eat_log_meal_tag": "간식",
 *             "food_kcal": 28.84,
 *             "food_carb": 5.6,
 *             "food_protein": 1.16,
 *             "food_fat": 0.2
 *         }
 *     ],
 *     "RecipeLogs": [
 *         {
 *             "eat_log_id": 4,
 *             "eat_log_picture": null,
 *             "eat_log_recipe_id": 1,
 *             "eat_log_serve": 40,
 *             "recipe_name_ko": "밥",
 *             "recipe_name_en": "rice",
 *             "eat_log_meal_tag": null,
 *             "recipe_kcal": 730,
 *             "recipe_carb": 30,
 *             "recipe_protein": 40,
 *             "recipe_fat": 50
 *         }
 *     ],
 *     "Burn": [],
 *     "Daylog": {
 *         "day_log_id": 1,
 *         "day_log_member_id": 1,
 *         "day_log_regret": null,
 *         "day_log_comment": null,
 *         "day_log_diary_date": "2017-10-11"
 *     },
 *     "Report_kcal": [
 *         {
 *             "eat_log_meal_tag": "아침",
 *             "sum(kcal)": 7.21
 *         },
 *         {
 *             "eat_log_meal_tag": null,
 *             "sum(kcal)": 794.89
 *         },
 *         {
 *             "eat_log_meal_tag": "점심",
 *             "sum(kcal)": 14.42
 *         },
 *         {
 *             "eat_log_meal_tag": "저녁",
 *             "sum(kcal)": 21.63
 *         },
 *         {
 *             "eat_log_meal_tag": "간식",
 *             "sum(kcal)": 28.84
 *         }
 *     ],
 *     "Report_nutri": {
 *         "eat_log_member_id": 1,
 *         "carb": 56.6,
 *         "protein": 45.51,
 *         "fat": 50.95
 *     },
 *     "User": {
 *         "member_id": 1,
 *         "member_provider": "naver",
 *         "member_provider_number": "37589930",
 *         "member_provider_name": "뇽",
 *         "member_avatar_url": "https://ssl.pstatic.net/static/pwe/address/img_profile.png",
 *         "member_birth": null,
 *         "member_gender": null,
 *         "member_goal_weight": 39,
 *         "token": "AAAAOLqzhEZVsBARl7XqjQkcL7zd1HSuRXDMmKiBGRX90mzoinGe69hQGcygsIS4MfbxNN+R1XJowW7KdDY2zTYd8+8=",
 *         "member_join_date": "2017-10-16T13:51:42.000Z"
 *     }
 * }
 */
router.get('/', (req, res) => {
  const param = {
    'eat_log_member_id': req.query.id,
    'day_log_member_id': req.query.id,
    'burn_member_id': req.query.id,
    'member_id': req.query.id,
    'eat_log_diary_date': req.query.date,
    'day_log_diary_date': req.query.date,
    'burn_date': req.query.date,
    'start_date': req.query.date,
    'end_date': req.query.date
  }

  function getEatlogs() {
    return new Promise((resolve, reject) => {
      query.getEatLogsFood(param)
        .then(foodresult => {
          resolve(foodresult)
        })
    })
  }
  function getEatLogsRecipe() {
    return new Promise((resolve, reject) => {
      query.getEatLogsRecipe(param)
        .then(reciperesult => {
          resolve(reciperesult)
        })
    })
  }
  function getBurn() {
    return new Promise((resolve, reject) => {
      query.getBurnByDate(param)
        . then(burnresult => {
          resolve(burnresult)
        })
    })
  }
  function getDaylog() {
    return new Promise((resolve, reject) => {
      query.getSelectDayLog(param)
        .then(daylog_result => {
          resolve(daylog_result)
        })
    })
  }
  function getReportKcal() {
    return new Promise((resolve, reject) => {
      query.getReportKcalByDateAvg(param)
        .then(report_kcal => {
          resolve(report_kcal)
        })
    })
  }
  function getReportNutri() {
    return new Promise((resolve, reject) => {
      query.getReportNutritionSum(param)
        .then(nutri_result => {
          resolve(nutri_result)
        })
    })
  }
  function getUser() {
    return new Promise((resolve, reject) => {
      query.getUserById(param.member_id)
        .then(user => {
          resolve(user)
        })
    })
  }
  Promise.all([getEatlogs(), getEatLogsRecipe(), getBurn(), getDaylog(), getReportKcal(), getReportNutri(), getUser()])
    .then(result => {
      const output = {
        'FoodLogs': result[0],
        'RecipeLogs': result[1],
        'Burn': result[2],
        'Daylog': result[3],
        'Report_kcal': result[4],
        'Report_nutri': result[5],
        'User': result[6]
      }
      res.send(output)
    })
})

router.get('/meta', (req, res) => {
  query.getUserById(req.query.id)
    .then(user => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write('<html><head>')
      res.write('<meta charset="UTF-8">')
      res.write('<link rel="image_src" href="//dada.downmix.net/img/dada.png">')
      res.write('<meta name="description" content="<기록과 통계>를 통해 식습관을 모니터링 할 수 있고, 칼로리 카운트를 통해 식단을 관리할 수 있는 <다이어트 다이어리> 서비스">')
      res.write(`<meta property="og:title" content="[Da, Da] ${user.member_provider_name}님이 공유한 다이어리">`)
      res.write('<meta property="og:type" content="website">')
      res.write(`<meta property="og:description" content="${user.member_provider_name}님의 기록을 통해 식습관을 모니터링 할 수 있고, 칼로리 카운트를 통해 식단을 관리할 수 있는 <다이어트 다이어리> 서비스">`)
      res.write('<meta property="og:image" content="http://dada.downmix.net/img/dada.png">')
      res.write('<meta property="og:image:width" content="200">')
      res.write('<meta property="og:image:height" content="200">')
      res.write(`<meta property="og:url" content="https://dada.downmix.net/share?id=${req.query.id}&date=${req.query.date}">`)
      res.write(`<meta name="twitter:card" content="[Da, Da] ${user.member_provider_name}님이 공유한 다이어리">`)
      res.write(`<meta name="twitter:url" content="https://dada.downmix.net/share?id=${req.query.id}&date=${req.query.date}">`)
      res.write(`<meta name="twitter:description" content="${user.member_provider_name}님의 기록을 통해 식습관을 모니터링 할 수 있고, 칼로리 카운트를 통해 식단을 관리할 수 있는 <다이어트 다이어리> 서비스">`)
      res.write('<meta name="twitter:image" content="http://dada.downmix.net/img/dada.png">')

      res.end('</head><body></body></html>')
    })

})

module.exports = router

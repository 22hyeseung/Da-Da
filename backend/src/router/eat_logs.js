const express = require('express')
const expressJwt = require('express-jwt')
const cors = require('cors')
const bodyParser = require('body-parser')

const query = require('../query')

const router = express.Router()

/**
 * @apiDefine eat-log
 */
router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ 'extended': false }))
router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))
router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

/**
 * @api {post} /eat-logs
 * @apiDescription 사용자가 먹은 음식을 기록
 * @apiName eat-logs
 * @apiGroup eat-logs
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
 * [
 *    {
 *        "eat_log_id": 7,
 *        "eat_log_member_id": 1,
 *        "eat_log_food_id": 1,
 *        "eat_log_recipe_id": null,
 *        "eat_log_meal_tag": "아침",
 *        "eat_log_picture": null,
 *        "eat_log_diary_date": "2017-10-15T15:00:00.000Z",
 *        "eat_log_submit_time": "2017-10-14T09:28:57.000Z"
 *    }
 * ]
 */

router.post('/', (req, res) => {
  const food_id = req.body.food_id ? req.body.food_id : null
  const recipe_id = req.body.recipe_id ? req.body.recipe_id : null
  const picture = req.body.picture ? req.body.picture : null
  const eat_log_meal = {
    'eat_log_member_id': req.user.id,
    'eat_log_food_id': food_id,
    'eat_log_recipe_id': recipe_id,
    'eat_log_meal_tag': req.body.meal_tag,
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
 * @api {get} /eat-logs
 * @apiDescription 사용자가 지정한날에 먹은기록을 가져온다.
 * @apiName eat-logs
 * @apiGroup eat-logs
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
 * [
 *     {
 *         "eat_log_id": 5,
 *         "eat_log_member_id": 1,
 *         "eat_log_food_id": 1,
 *         "eat_log_recipe_id": null,
 *         "eat_log_meal_tag": "아침",
 *         "eat_log_picture": null,
 *         "eat_log_diary_date": "2017-10-15T15:00:00.000Z",
 *         "eat_log_submit_time": "2017-10-14T09:26:58.000Z"
 *     },
 *     {
 *         "eat_log_id": 6,
 *         "eat_log_member_id": 1,
 *         "eat_log_food_id": 1,
 *         "eat_log_recipe_id": null,
 *         "eat_log_meal_tag": "아침",
 *         "eat_log_picture": null,
 *         "eat_log_diary_date": "2017-10-15T15:00:00.000Z",
 *         "eat_log_submit_time": "2017-10-14T09:28:09.000Z"
 *     },
 *     {
 *         "eat_log_id": 7,
 *         "eat_log_member_id": 1,
 *         "eat_log_food_id": 1,
 *         "eat_log_recipe_id": null,
 *         "eat_log_meal_tag": "아침",
 *         "eat_log_picture": null,
 *         "eat_log_diary_date": "2017-10-15T15:00:00.000Z",
 *         "eat_log_submit_time": "2017-10-14T09:28:57.000Z"
 *     },
 *     {
 *         "eat_log_id": 8,
 *         "eat_log_member_id": 1,
 *         "eat_log_food_id": 1,
 *         "eat_log_recipe_id": null,
 *         "eat_log_meal_tag": "아침",
 *         "eat_log_picture": null,
 *         "eat_log_diary_date": "2017-10-15T15:00:00.000Z",
 *         "eat_log_submit_time": "2017-10-14T09:42:46.000Z"
 *     }
 * ]
 */

router.get('/', (req, res) => {
  const eat_log_meal = {
    'eat_log_member_id': req.user.id,
    'eat_log_diary_date': req.query.date
  }

  query.getEatLogs(eat_log_meal)
    .then(eat_log => {
      if (eat_log) {
        res.send(eat_log)
      } else {
        console.log('Eat_logs GET Error')
      }
    })
})
module.exports = router

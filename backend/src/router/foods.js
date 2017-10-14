const express = require('express')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const cors = require('cors')

const query = require('../query')

const router = express.Router()

/**
 * @apiDefine food food
 */

router.use(cors({
  'origin': process.env.TARGET_ORIGIN
}))

router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(expressJwt({
  'secret': process.env.JWT_SECRET
}))
/**
 * @api {get} /foods getFoodsSearch
 * @apiDescription 음식정보(영양소)를 검색한다.
 * @apiName getFoodsSearch
 * @apiGroup foods
 *
 * @apiParam {String} search 음식 검색어
 *
 * @apiSuccess {Number} food_id 음식ID
 * @apiSuccess {String} food_name_ko 음식명
 * @apiSuccess {Number} food_carb 탄수화물
 * @apiSuccess {Number} food_protein 단백질
 * @apiSuccess {Number} food_fat 지방
 * @apiSuccess {String} food_unit 단위(g, ml)
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * [
 *     {
 *         "food_id": 21,
 *         "food_name_ko": "낙지덮밥",
 *         "food_carb": 0.22,
 *         "food_protein": 0.09,
 *         "food_fat": 0.02,
 *         "food_unit": "g"
 *     },
 *     {
 *         "food_id": 23,
 *         "food_name_ko": "제육덮밥",
 *         "food_carb": 0.23,
 *         "food_protein": 0.06,
 *         "food_fat": 0.04,
 *         "food_unit": "g"
 *     },
 *     {
 *         "food_id": 19,
 *         "food_name_ko": "해물덮밥",
 *         "food_carb": 0.14,
 *         "food_protein": 0.06,
 *         "food_fat": 0.03,
 *         "food_unit": "g"
 *     },
 *     {
 *         "food_id": 24,
 *         "food_name_ko": "양송이덮밥",
 *         "food_carb": 0.16,
 *         "food_protein": 0.03,
 *         "food_fat": 0.02,
 *         "food_unit": "g"
 *     },
 *     {
 *         "food_id": 16,
 *         "food_name_ko": "오징어덮밥",
 *         "food_carb": 0.22,
 *         "food_protein": 0.06,
 *         "food_fat": 0.03,
 *         "food_unit": "g"
 *     }
 * ]
 */
router.get('/', (req, res) => {
  query.getFoodsSearch(req.query.search)
    .then(food => {
      res.send(food)
    })
})

module.exports = router

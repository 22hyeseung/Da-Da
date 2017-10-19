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
router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))
router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ 'extended': false }))

/**
 * @api {get} /recipe/search?name Get RecipeSearch
 * @apiDescription 검색한 recipe들을 보여준다.
 * @apiName getRecipe/search
 * @apiGroup recipe
 *
 * @apiParam {String} name 레시피명
 *
 * @apiSuccess {Integer} recipe_id recipe의 id값
 * @apiSuccess {String}  recipe_name_ko recipe의 한국명
 * @apiSuccess {String} recipe_time recipe의 소요시간
 * @apiSuccess {float} recipe_kcal recipe의 kcal
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/recipe/search?name=피자
 * [
 *     {
 *         "recipe_id": 1,
 *         "recipe_name_ko": "피자",
 *         "recipe_time": "30분",
 *         "recipe_kcal": 1700
 *     }
 * ]
 */

router.get('/search', (req, res) => {
  const recipe_name = req.query.name.toString()

  if (recipe_name.length >= 1) {
    query.getRecipeByName(recipe_name)
      .then(result => {
        if (result) {
          res.send(result)
        } else {
          console.log('Recipe GetByname Error')
        }
      })
  } else {
    res.status(405)
    res.send('검색어는 최소 한글자 이상 입력해야 합니다.')
  }
})

/**
 * @api {get} /recipe/search/:id Get Recipe
 * @apiDescription 선택한 recipe를 보여준다.
 * @apiName getRecipe
 * @apiGroup recipe
 *
 * @apiParam {Integer} recipe_id 레시피의 id값
 *
 * @apiSuccess {Integer} recipe_id recipe의 id값
 * @apiSuccess {String}  recipe_name_ko recipe의 한국명
 * @apiSuccess {String} recipe_name_en recipe의 영어명
 * @apiSuccess {String} recipe_level recipe의 난이도
 * @apiSuccess {String} recipe_time recipe의 소요시간
 * @apiSuccess {float} recipe_carb recipe의 탄수화물
 * @apiSuccess {float} recipe_protein recipe의 단백질
 * @apiSuccess {float} recipe_fat recipe의 지방
 * @apiSuccess {String} recipe_ingredient recipe의 재료
 * @apiSuccess {String} recipe  recipe의 순서
 * @apiSuccess {Integer} recipe_serving recipe의 인분수
 * @apiSuccess {String} recipe_from  recipe의 출처
 * @apiSuccess {float} recipe_kcal recipe의 kcal
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/recipe/search/1
 * => 여기서 1은 recipe_id값이다.
 * {
 *     "recipe_id": 1,
 *     "recipe_name_ko": "피자",
 *     "recipe_name_en": "pizza",
 *     "recipe_level": "하",
 *     "recipe_time": "30분",
 *     "recipe_carb": 100,
 *     "recipe_protein": 100,
 *     "recipe_fat": 100,
 *     "recipe_ingredient": "치즈, 감자",
 *     "recipe": "피자를 오븐에 넣는다.",
 *     "recipe_serving": 1,
 *     "recipe_from": "www.naver.com",
 *     "recipe_kcal": 1700
 * }
 */

router.get('/search/:id', (req, res) => {
  const recipe_id = req.params.id

  query.getRecipeById(recipe_id)
    .then(result => {
      if (result) {
        res.send(result)
      } else {
        console.log('Recipe GetById Error')
      }
    })
})


module.exports = router


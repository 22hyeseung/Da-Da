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
router.use(mw.expressJwtMiddleware)
router.use(mw.corsMiddleware)
router.use(mw.jsonMiddleware)
router.use(mw.urlencodedMiddleware)
router.options('*', mw.corsMiddleware)
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

  query.getRecipeByName(recipe_name)
    .then(result => {
      if (result) {
        res.send(result)
      } else {
        console.log('Recipe GetByname Error')
      }
    })
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
 *     "recipe_ingredient": [
 *      {
 *          "id": 0,
 *          "name": "달걀",
 *          "num": 4,
 *          "unit": "개"
 *      },
 *      {
 *          "id": 1,
 *          "name": "헤비 크림",
 *          "num": 2,
 *          "unit": "T스푼"
 *      },
 *      {
 *          "id": 2,
 *          "name": "고춧가루",
 *          "num": 1,
 *          "unit": "t스푼"
 *      },
 *      {
 *          "id": 3,
 *          "name": "저탄수화물 빵",
 *          "num": 2,
 *          "unit": "조각"
 *      }
 *     ],
 *     "recipe": [
 *      {
 *          "step": 1,
 *          "content": "달걀과 크림을 한곳에 합쳐 거품을 내어 저어준다."
 *      },
 *      {
 *          "step": 2,
 *          "content": "버터를 한 숟가락을 중강불의 팬에 넣어준다. 달걀 혼합물을 팬에 부은 후, 익을 때 까지 저어주며 섞은 후, 불을 끈다."
 *      },
 *      {
 *          "step": 3,
 *          "content": "고춧가루를 넣고 섞는다."
 *      }
 *     ],
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
        result.recipe_ingredient = JSON.parse(result.recipe_ingredient)
        result.recipe = JSON.parse(result.recipe)
        res.send(result)
      } else {
        console.log('Recipe GetById Error')
      }
    })
})


module.exports = router


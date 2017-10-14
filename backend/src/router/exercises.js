const express = require('express')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const cors = require('cors')

const query = require('../query')

const router = express.Router()

// const urlencodeParser = bodyParser.urlencoded({ 'extended': false })
/**
 * @apiDefine __api __api
 */
router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ 'extended': false }))
router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))
router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

/**
 * @api {post} /exercises
 * @apiDescription 운동을 통한 열량소모를 등록하기 위한 액션
 * @apiName exercises
 * @apiGroup exercises
 *
 * @apiSuccess {Number} req.body.exercise_id exercise pk
 * @apiSuccess {Date} req.body.date 등록하고자 하는 날짜
 * @apiSuccess {Number} req.body.burn_kcal 사용자가 입력한 정보로 계산된 소모된 열량
 *
 * @apiSuccessExample {Json} Success-Response:
 *{
 *   "burn_id": 6,
 *   "burn_exercise_id": null,
 *   "date": "2017-01-09T15:00:00.000Z",
 *   "kcal": 1
 * }
 */
router.post('/', (req, res) => {
  const exercise_data = {
    'burn_member_id': req.user.id,
    'burn_exercise_id': req.body.exercise_id,
    'burn_date': req.body.date,
    'burn_kcal': req.body.kcal
  }
  query.insertBurnById(exercise_data)
    .then(burn => {
      res.send({
        'burn_id': burn.burn_id,
        'burn_exercise_id': burn.burn_exercise_id,
        'burn_date': burn.burn_date,
        'burn_kcal': burn.burn_kcal
      })
    })
})

/**
 * @api {get} /exercises
 * @apiDescription 사용자가 운동별 1분당 소모열량 검색
 * @apiName exercises
 * @apiGroup exercises
 *
 * @apiSuccess {Number} exercise_id exercise 번호
 * @apiSuccess {Number} exercise_burn_kcal 1분당 소모 열량
 * @apiSuccess {String} exercise_name 운동이름
 *
 * @apiSuccessExample {Json} Succes-Response:
 * http://localhost:5000/exercises?name=걷기
 * 걷기로 검색
 * [
 *    {
 *        "exercise_id": 1,
 *        "exercise_burn_kcal": 23,
 *        "exercise_name": "걷기"
 *    },
 *    {
 *        "exercise_id": 2,
 *        "exercise_burn_kcal": 40,
 *        "exercise_name": "빨리 걷기"
 *    }
 *]
 */
router.get('/', (req, res) => {
  const name = req.query.name

  query.getExercisesByName(name)
    .then(data => {
      if (!data) {
        res.status(404)
      } else {
        res.send(data)
      }
    })
})

module.exports = router

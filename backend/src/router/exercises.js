const express = require('express')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const cors = require('cors')

const query = require('../query')

const router = express.Router()

// const urlencodeParser = bodyParser.urlencoded({ 'extended': false })
/**
 * @apiDefine exercises
 */
router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ 'extended': false }))
router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))
router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))
router.options('*', cors())
/**
 * @api {post} /exercises Post Exercises
 * @apiDescription 운동을 통한 열량소모를 등록하기 위한 액션
 * @apiName PostExercises
 * @apiGroup exercises
 *
 * @apiParam {Number} user.id userid
 * @apiParam {Number} exercise_id exercise pk
 * @apiParam {Date} date 등록하고자 하는 날짜
 * @apiParam {Number} burn_kcal 사용자가 입력한 정보로 계산된 소모된 열량
 * @apiParam {Number} burn_minute 사용자가 입력한 운동시간
 *
 * @apiSuccess {Number} burn_id post 완료한 운동항목 pk
 * @apiSuccess {String} burn_exercise_name post 완료한 운동이름
 * @apiSuccess {Date} burn_date 운동등록한 날짜
 * @apiSuccess {Number} burn_kcal 계산된 칼로리로 등록한 칼로리
 * @apiSuccess {Number} burn_minute 운동한 시간
 * @apiSuccessExample {Json} Success-Response:
 * {
 *     "burn_id": 1,
 *     "burn_exercise_name": "요리하기",
 *     "burn_date": "2016-12-31T15:00:00.000Z",
 *     "burn_kcal": 50,
 *     "burn_minute": 30
 * }
 */
router.post('/', (req, res) => {
  const exercise_data = {
    'burn_member_id': req.user.id,
    'burn_exercise_id': req.body.exercise_id,
    'burn_date': req.body.date,
    'burn_kcal': req.body.kcal,
    'burn_minute': req.body.burn_minute
  }
  query.insertBurnById(exercise_data)
    .then(burn => {
      res.send(burn)
    })
})

/**
 * @api {get} /exercises/search Get ExercisesSearch
 * @apiDescription 사용자가 운동별 1분당 소모열량 검색
 * @apiName GetExercisesSearch
 * @apiGroup exercises
 *
 * @apiParam {String} name 사용자가 입력한 검색 글자
 *
 * @apiSuccess {Number} exercise_id exercise 번호
 * @apiSuccess {Number} exercise_burn_kcal 1분당 소모 열량
 * @apiSuccess {String} exercise_name 운동이름
 *
 * @apiSuccessExample {Json} Succes-Response:
 * http://localhost:5000/exercises/search?name=걷기
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
router.get('/search', (req, res) => {
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

/**
 * @api {get} /exercises Get Exercises
 * @apiDescription 사용자가 등록한 날짜별 운동기록
 * @apiName GetExercises
 * @apiGroup exercises
 *
 * @apiParam {Number} date 사용자가 등록한 날짜
 * @apiParam {Number} user.id user.id
 *
 * @apiSuccess {Number} burn_id burn 번호
 * @apiSuccess {Number} burn_member_id 유저 번호
 * @apiSuccess {Number} burn_kcal 운동별 소모 열량
 * @apiSuccess {Number} burn_minute 운동별 소요 시간
 * @apiSuccess {String} exercise_name 운동이름
 *
 * @apiSuccessExample {Json} Succes-Response:
 * http://localhost:5000/exercises?date=20170101
 *[
 *    {
 *        "burn_id": 1,
 *        "burn_member_id": 1,
 *        "burn_kcal": 50,
 *        "burn_minute": 30,
 *        "exercise_name": "요리하기"
 *    }
 *]
 */
router.get('/', (req, res) => {
  const param = {
    'burn_member_id': req.user.id,
    'burn_date': req.query.date
  }

  query.getBurnByDate(param)
    .then(burn => {
      res.send(burn)
    })
})

/**
 * @api {delete} /exercises delete Exercises
 * @apiDescription burn_id를 선택해 소모 열량 운동기록 한개 삭제
 * @apiName DeleteExercises
 * @apiGroup exercises
 *
 * @apiParam {Number} id 사용자가 선택한 기록 id
 * @apiParam {Number} user.id user.id
 *
 * @apiSuccessExample {Json} Succes-Response:
 * http://localhost:5000/exercises/3
 */

router.delete('/:id', (req, res) => {
  const param = {
    'burn_member_id': req.user.id,
    'burn_id': req.params.id
  }

  query.deleteBurnById(param)
    .then(() => {
      res.end()
    })
})

/**
 * @api {patch} /exercises/:id Patch Exercises
 * @apiDescription burn_id를 선택해 사용자가 입력한 정보로 업데이트
 * @apiName PatchExercises
 * @apiGroup exercises
 *
 * @apiParam {Number} id 사용자가 선택한 기록 id
 * @apiParam {Number} burn_minute 사용자가 수정할 운동한 시간
 * @apiParam {Number} kcal 사용자가 수정할 시간으로 계산된 소모 열량
 *
 * @apiSuccess {Number} burn_id 사용자가 선택해 수정한 소모열량 번호
 * @apiSuccess {Number} burn_kcal 사용자가 선택해 수정한 소모열량
 * @apiSuccess {Number} burn_minute 사용자가 선택해 수정한 소모 운동시간
 * @apiSuccess {String} exercise_name 사용자가 선택한 수정하고자 한 운동이름
 * @apiSuccessExample {JSON} Succes-Response:
 * http://localhost:5000/exercises/3
 *
 * [
 *   {
 *       "burn_id": 3,
 *       "burn_kcal": 300,
 *       "burn_minute": 50,
 *       "exercise_name": "요리하기"
 *   }
* ]
 */
router.patch('/:id', (req, res) => {
  const param = {
    'burn_member_id': req.user.id,
    'burn_id': req.params.id,
    'burn_minute': req.body.burn_minute,
    'burn_kcal': req.body.kcal
  }

  query.patchBurnById(param)
    .then(data => {
      res.send(data)
    })
})
module.exports = router

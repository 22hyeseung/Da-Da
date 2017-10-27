const express = require('express')
const expressJwt = require('express-jwt')
const bodyParser = require('body-parser')
const cors = require('cors')

const query = require('../query')

const router = express.Router()

/**
 * @apiDefine user user
 */

router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))
router.options('*', cors())

/**
 * @api {get} /user Get UserData
 * @apiDescription 현재 로그인된 사용자의 정보를 가져온다.
 * @apiName getUserData
 * @apiGroup user
 *
 *
 * @apiSuccess {String} member_provider sns분류
 * @apiSuccess {String} member_provider_number sns ID
 * @apiSuccess {String} member_provider_name sns 이름
 * @apiSuccess {String} member_avatar_url sns 프로필이미지
 * @apiSuccess {String} member_age 나이
 * @apiSuccess {String} member_gender 성별
 * @apiSuccess {Float} member_goal_weight 목표몸무게
 * @apiSuccess {Float} day_log_height 사용자의 키
 * @apiSuccess {Float} day_log_kg 사용자의 몸무게
 * @apiSuccess {Integer} day_log_kcal 사용자의 목표 칼로리
 * @apiSuccess {Date} day_log_diray_date 등록일
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * {
 *     "user": {
 *         "member_id": 1,
 *         "member_provider": "instagram",
 *         "member_provider_number": "2363166673",
 *         "member_provider_name": "홍길동",
 *         "member_avatar_url": "https://api.com/t51.2885-19/s150x150/12338858_143349276035695_1001177438_a.jpg",
 *         "member_birth": "1992-09-06T15:00:00.000Z",
 *         "member_gender": "남",
 *         "member_goal_weight": 65,
 *         "token": "2363166673.f5e2267.dd9a39cc92194f4bb9edbe63738c4f41",
 *         "member_join_date": "2017-10-25T06:17:05.000Z"
 *     },
 *     "default_kcal": {
 *         "day_log_height": 180,
 *         "day_log_kg": 70,
 *         "day_log_kcal": 2000,
 *         "diary_date": "2017-10-25"
 *     }
 * }
 */
router.get('/', (req, res) => {
  const param = {'day_log_member_id': req.user.id}
  query.getFirstGoalKcalById(param)
    .then(default_kcal => {
      query.getUserById(req.user.id)
        .then(user => {
          res.send({ user, default_kcal })
        })
    })
})

/**
 * @api {post} /user/first Post UserData
 * @apiDescription 사용자의 초기 정보를 입력한다.
 * @apiName Post First UserData
 * @apiGroup user
 *
 * @apiParam {Date} birth
 * @apiParam {Enum} gender
 * @apiParam {Float} goal_weight
 * @apiParam {Float} height
 * @apiParam {Float} kg
 * @apiParam {Date} date
 * @apiParam {Integer} kcal
 *
 * @apiSuccess {Integer} member_id member 아이디값
 * @apiSuccess {Date} member_birth 생년월일
 * @apiSuccess {Enum} member_gender 성별
 * @apiSuccess {Float} member_goal_weight 목표몸무게
 * @apiSuccess {Integer} day_log_id day_log 아이디 값
 * @apiSuccess {Integer} day_log_member_id 기록한 유저 아이디값
 * @apiSuccess {Float} day_log_height 사용자의 키
 * @apiSuccess {Float} day_log_kg 사용자의 몸무게
 * @apiSuccess {Integer} day_log_kcal 사용자의 목표 칼로리
 * @apiSuccess {Date} day_log_diray_date 등록일
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * http://localhost:5000/user/first
 * {
 *     "MemberResult": {
 *         "member_id": 1,
 *         "member_birth": "1993-09-07",
 *         "member_gender": "남",
 *         "member_goal_weight": 60
 *     },
 *     "DaylogResult": {
 *         "day_log_id": 1,
 *         "day_log_member_id": 1,
 *         "day_log_height": 173,
 *         "day_log_kg": 65,
 *         "day_log_kcal": 2000,
 *         "diary_date": "2017-10-22"
 *     }
 * }
 */

router.post('/first', (req, res) => {
  const member_params = {
    'member_id': req.user.id,
    'member_birth': req.body.birth,
    'member_gender': req.body.gender,
    'member_goal_weight': req.body.goal_weight
  }

  const day_log_params = {
    'day_log_member_id': req.user.id,
    'day_log_height': req.body.height,
    'day_log_kg': req.body.kg,
    'day_log_kcal': req.body.kcal,
    'day_log_diary_date': req.body.date
  }

  query.postFirstMember(member_params)
    .then(MemberResult => {
      query.postFirstDayLog(day_log_params)
        .then(DaylogResult => {
          res.send({ MemberResult, DaylogResult })
        })
    })
})

module.exports = router

const express = require('express')
const { jsonParser, urlParser, onJwt, onCors, query } = require('../middleware')

const router = express.Router()

/**
 * @apiDefine weight
 */
router.use(jsonParser, urlParser, onJwt)
router.options('*', onCors)
/**
 * @api {get} /weight/all Get WeightAll
 * @apiDescription 체중기록 전체현황. 로그인한 사용자의 최초 기록시간부터 현재까지의 기록을 불러온다.
 * @apiName getWeightAll
 * @apiGroup weight
 *
 * @apiSuccess {String} allDayLog 기록 리스트
 * @apiSuccess {String} allDayLog.day_log_height 기록 키
 * @apiSuccess {Number} allDayLog.day_log_kg 기록 몸무게
 * @apiSuccess {Number} allDayLog.day_log_kcal 기록 칼로리
 * @apiSuccess {String} allDayLog.day_log_diary_date 기록일
 * @apiSuccess {String} goal_weight 목표 칼로리
 *
 * @apiSuccessExample {json} Success-Respoonse:
 * {
 *     "allDayLog": [
 *         {
 *             "day_log_height": 171,
 *             "day_log_kg": 78,
 *             "day_log_kcal": 1800,
 *             "day_log_diary_date": "2017-10-14T15:00:00.000Z"
 *         },
 *         {
 *             "day_log_height": 170,
 *             "day_log_kg": 77,
 *             "day_log_kcal": 2000,
 *             "day_log_diary_date": "2017-10-13T15:00:00.000Z"
 *         }
 *     ],
 *     "goal_weight": null
 * }
 */
router.get('/all', (req, res) => {
  const param = { 'day_log_member_id': req.user.id }

  const out = {}

  query.getDayLogAll(param)
    .then(result => {
      out.allDayLog = result
    })
    .then(() => {
      return query.getUserById(req.user.id)
        .then(result => {
          out.goal_weight = result.member_goal_weight
        })
    })
    .then(() => {
      res.send(out)
    })
})

/**
 * @api {get} /weight?date WeightDate
 *
 * @apiDescription 사용자가 찾고자 하는 날짜를 기준으로 등록한 뭄무게와 목표 몸무게, 처음에 입력한 몸무게를 불러온다.
 * @apiName getWeightDate
 * @apiGroup weight
 *
 * @apiSuccess {Number} first_kg 사용자가 처음 입력한 몸무게
 * @apiSuccess {Number} goal_weight 사용자가 입력한 목표 몸무게
 * @apiSuccess {Number} date_weight 특정 날짜에 입력한 몸무게
 *
 * @apiSuccessExample {JSON} Success-Response:
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

/**
 * @api {delete} weight/:id Delete Weight
 *
 * @apiDescription 사용자가 지우고자하는 몸무게 기록을 삭제한다.
 * @apiName DeleteWeight
 * @apiGroup weight
 *
 * @apiParam {Number} id 사용자가 선택한 몸무게 id
 *
 * @apiSuccess {String} weight null complete
 *
 * @apiSuccessExample {HTML-message} Success-Response:
 * http://localhost:5000/weight/5
 * res.status(200)
 * weight null complete
 */
router.delete('/:id', (req, res) => {
  const param = {
    'day_log_id': req.params.id,
    'day_log_member_id': req.user.id
  }

  query.WeightNullById(param)
  .then(() => {
    res.end('weight null complete')
  })
})

/**
 * @api {post} /weight Post Weight
 *
 * @apiDescription 사용자가 목표 체중을 수정한다.
 * @apiName PostWeight
 * @apiGroup weight
 *
 * @apiParam {Number} user.id 사용자 id
 * @apiParam {Number} goal_weight 사용자가 입력한 목표 몸무게
 * @apiSuccess {Number} member_goal_weight 사용자가 입력한 목표 몸무게
 * @apiSuccessExample {JSON} Success-Response:
 *  {
 *    "member_id": 1,
 *    "member_goal_weight": 24
 * }
 */
router.post('/', (req, res) => {
  const param = {
    'member_id': req.user.id,
    'member_goal_weight': req.body.goal_weight
  }

  query.PostGoalKgbyUser(param)
  .then(data => {
    res.send(data)
  })
})
module.exports = router

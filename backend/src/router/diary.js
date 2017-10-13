const express = require('express')
const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')
const cors = require('cors')

const query = require('../query')

const router = express.Router()

/**
 * @apiDefine diary
 */
router.use((req, res, next) => {
  next()
})

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ 'extended': false }))
router.use(expressJwt({ 'secret': process.env.JWT_SECRET }))
router.use(cors({ 'origin': process.env.TARGET_ORIGIN }))

/**
 * @api {post} /diary/regret regret
 * @apiDescription 오늘의 반성일기 작성 후 저장
 * @apiName regret
 * @apiGroup diary
 *
 * @apiSuccess {String} regret 반성일기
 * @apiSuccess {Date} date 페이지의 표시되어 있는 다이어리의 날짜
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "day_log": {
 *  "day_log_id": 2,
 *  "day_log_member_id": 2,
 *  "day_log_height": null,
 *  "day_log_kg": null,
 *  "day_log_regret": "나의 일기이다.",
 *  "day_log_comment": "나의 일기이다.",
 *  "day_log_diary_date": "2017-10-12T15:00:00.000Z",
 *  "day_log_submit_time": "2017-10-13T09:53:55.000Z"
 * }
 */

router.post('/regret', (req, res) => {
  const day_log_regret = {
    'day_log_member_id': req.user.id,
    'day_log_regret': req.body.regret,
    'day_log_diary_date': req.body.date
  }

  query.postDayLogRegret(day_log_regret)
    .then(() => {
      query.getSelectDayLog(day_log_regret)
        .then(day_log => {
          res.send({ day_log })
        })
    })
})

/**
 * @api {post} /diary/comment comment
 * @apiDescription 오늘의 일기 작성 후 저장
 * @apiName comment
 * @apiGroup diary
 *
 * @apiSuccess {String} comment 일기
 * @apiSuccess {Date} date 페이지의 표시되어 있는 다이어리의 날짜
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *  "day_log": {
 *  "day_log_id": 2,
 *  "day_log_member_id": 2,
 *  "day_log_height": null,
 *  "day_log_kg": null,
 *  "day_log_regret": "나의 일기이다.",
 *  "day_log_comment": "나의 일기이다.",
 *  "day_log_diary_date": "2017-10-12T15:00:00.000Z",
 *  "day_log_submit_time": "2017-10-13T09:53:55.000Z"
 * }
 */

router.post('/comment', (req, res) => {
  const day_log_comment = {
    'day_log_member_id': req.user.id,
    'day_log_comment': req.body.comment,
    'day_log_diary_date': req.body.date
  }

  query.postDayLogComment(day_log_comment)
    .then(() => {
      query.getSelectDayLog(day_log_comment)
        .then(day_log => {
          res.send({ day_log })
        })
    })
})

module.exports = router

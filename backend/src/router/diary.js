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
 *  "member_id" : 1
 *  "regret": "나는 너무 많이먹나보다...."
 *  "date" : "20171013"
 * }
 */

router.post('/regret', (req, res) => {
  const day_log_regret = {
    'day_log_member_id': req.user.id,
    'day_log_regret': req.body.regret,
    'day_log_diary_date': req.body.date
  }

  query.postDayLogRegret(day_log_regret)
    .then(day_log => {
      res.send({ day_log })
    })
})

module.exports = router

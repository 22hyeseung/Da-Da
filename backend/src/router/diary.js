const express = require('express')
const { jsonParser, urlParser, onJwt, onCors, query } = require('../middleware')

const router = express.Router()

/**
 * @apiDefine diary
 */
router.use(jsonParser, urlParser, onJwt)
router.options('*', onCors)

/**
 * @api {post} /diary/regret Post Regret
 * @apiDescription 오늘의 반성일기 작성 후 저장
 * @apiName PostRegret
 * @apiGroup diary
 *
 * @apiParam {String} regret 반성일기
 * @apiParam {Date} date 등록일
 *
 * @apiSuccess {Integer} id 반성일기의 id
 * @apiSuccess {Integer} member_id  반성일기를 작성한 유저의 id
 * @apiSuccess {String} regret 작성한 반성일기
 * @apiSuccess {Date} date 페이지의 표시되어 있는 다이어리의 날짜
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/diary/regret
 *
 * {
 *     "day_log_id": 2,
 *     "day_log_member_id": 1,
 *     "day_log_regret": "오늘의 반성일기입니다.",
 *     "day_log_comment": null,
 *     "day_log_diary_date": "2017-10-22"
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
          if (day_log) {
            res.send(day_log)
          } else {
            console.log('Regret POST error')
          }
        })
    })
})

/**
 * @api {get} /diary/regret Get Regret
 * @apiDescription 원하는 날의 반성일기 가져오기
 * @apiName GetRegret
 * @apiGroup diary
 *
 * @apiParam {Date} date 등록일
 *
 * @apiSuccess {Integer} id 반성일기의 id
 * @apiSuccess {Integer} member_id  반성일기를 작성한 유저의 id
 * @apiSuccess {String} regret 가져온 반성일기
 * @apiSuccess {Date} date 페이지의 표시되어 있는 다이어리의 날짜
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/diary/regret?date=20171011
 * {
 *     "day_log_id": 3,
 *     "day_log_member_id": 1,
 *     "day_log_regret": "오늘의 반성일기입니다.",
 *     "day_log_comment": "오늘의 일기입니다.",
 *     "day_log_diary_date": "2017-10-23"
 * }
 */

router.get('/regret', (req, res) => {
  const day_log_regret = {
    'day_log_member_id': req.user.id,
    'day_log_diary_date': req.query.date
  }

  query.getSelectDayLog(day_log_regret)
    .then(day_log => {
      if (day_log) {
        res.send(day_log)
      } else {
        console.log('Regret GET error')
      }
    })
})

/**
* @api {put} /diary/regret/:id Put regret
* @apiDescription 오늘의 일기 작성 후 삭제 null로 치환
* @apiName PutRegret
* @apiGroup diary
*
* @apiParam {String} regret 반성일기
*
* @apiSuccess {Integer} id 반성일기의 id
* @apiSuccess {Integer} member_id  반성일기를 작성한 유저의 id
* @apiSuccess {String} regret 작성한 반성일기
* @apiSuccess {Date} date 페이지의 표시되어 있는 다이어리의 날짜

* @apiSuccessExample {json} Success-Response:
* http://localhost:5000/diary/regret/2
* {
*     "day_log_id": 2,
*     "day_log_member_id": 1,
*     "day_log_regret": null,
*     "day_log_diary_date": "2017-10-22"
* }
*/

router.put('/regret/:id', (req, res) => {
  const day_log_regret_params = {
    'day_log_id': req.params.id,
    'day_log_regret': null
  }

  query.putRegretDayLogById(day_log_regret_params)
    .then(result => {
      if (result) {
        res.send(result)
      } else {
        console.log('put regret Error')
      }
    })
})

/**
 * @api {post} /diary/comment Post Comment
 * @apiDescription 오늘의 일기 작성 후 저장
 * @apiName PostComment
 * @apiGroup diary
 *
 * @apiParam {String} comment 일기
 * @apiParam {Date} date 등록일
 *
 * @apiSuccess {Integer} id 반성일기의 id
 * @apiSuccess {Integer} member_id  반성일기를 작성한 유저의 id
 * @apiSuccess {String} comment 작성한 일기
 * @apiSuccess {Date} date 페이지의 표시되어 있는 다이어리의 날짜

 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/diary/comment
 * {
 *     "day_log_id": 2,
 *     "day_log_member_id": 1,
 *     "day_log_regret": null,
 *     "day_log_comment": "오늘의 일기입니다.",
 *     "day_log_diary_date": "2017-10-22"
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
          if (day_log) {
            res.send(day_log)
          } else {
            console.log('Comment POST error')
          }
        })
    })
})

/**
 * @api {get} /diary/comment Get Comment
 * @apiDescription 원하는 날의 comment(일기)를 가져온다.
 * @apiName GetComment
 * @apiGroup diary
 *
 * @apiParam {Date} date 등록일
 *
 * @apiSuccess {Integer} id 반성일기의 id
 * @apiSuccess {Integer} member_id  반성일기를 작성한 유저의 id
 * @apiSuccess {String} comment 가져온 일기
 * @apiSuccess {Date} date 페이지의 표시되어 있는 다이어리의 날짜
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/diary/comment?date=20171010
 * {
 *    "day_log_id": 4,
 *    "day_log_member_id": 1,
 *    "day_log_regret": null,
 *    "day_log_comment": "오늘의 일기입니다.",
 *    "day_log_diary_date": "2017-10-24"
 * }
 */

router.get('/comment', (req, res) => {
  const day_log_comment = {
    'day_log_member_id': req.user.id,
    'day_log_diary_date': req.query.date
  }

  query.getSelectDayLog(day_log_comment)
    .then(day_log => {
      if (day_log) {
        res.send(day_log)
      } else {
        console.log('Comment GET error')
      }
    })
})

/**
 * @api {put} /diary/comment/2 Put Comment
 * @apiDescription 원하는 날의 comment(일기)를 지운다.
 * @apiName PutComment
 * @apiGroup diary
 *
 * @apiParam {Date} date 등록일
 *
 * @apiSuccess {Integer} id 반성일기의 id
 * @apiSuccess {Integer} member_id  반성일기를 작성한 유저의 id
 * @apiSuccess {String} comment 가져온 일기
 * @apiSuccess {Date} date 페이지의 표시되어 있는 다이어리의 날짜
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/diary/comment/2
 * {
 *     "day_log_id": 2,
 *     "day_log_member_id": 1,
 *     "day_log_comment": null,
 *     "day_log_diary_date": "2017-10-22"
 * }
 */

router.put('/comment/:id', (req, res) => {
  const day_log_comment_params = {
    'day_log_id': req.params.id,
    'day_log_comment': null
  }

  query.putCommentDayLogById(day_log_comment_params)
    .then(result => {
      if (result) {
        res.send(result)
      } else {
        console.log('put comment Error')
      }
    })
})


/**
 * @api {post} diary/kg Post Kg
 * @apiDescription 오늘 체중을 입력 후 저장
 * @apiName PostKg
 * @apiGroup diary
 *
 * @apiParam {Number} user.id 사용자 id
 * @apiParam {Date} date 오늘날짜
 * @apiParam {Number} kg 사용자가 입력한 몸무게
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/diary/kg
 * {
 *     "day_log_id": 7,
 *     "day_log_kg": 123,
 *     "day_log_member_id": 1,
 *     "day_log_diary_date": "2017-09-12T15:00:00.000Z"
 * }
 */
router.post('/kg', (req, res) => {
  const param = {
    'day_log_member_id': req.user.id,
    'day_log_kg': req.body.kg,
    'day_log_diary_date': req.body.date
  }

  query.postDayKgbyUser(param)
    .then(data => {
      res.send(data)
    })
})

/**
 * @api {get} diary/kg Get Kg
 * @apiDescription 최근 입력한 체중 4개만 출력
 * @apiName GetKg
 * @apiGroup diary
 *
 * @apiParam {Number} user.id 사용자 id
 * @apiParam {Date} date '오늘'을 기준
 *
 * @apiSuccess {Number} day_log_kg 사용자가 입력했던 몸무게
 * @apiSuccess {Number} day_log_member_id 사용자id
 * @apiSuccess {Number} day_log_diary_date 사용자가 입력했던 date
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/diary/kg?date=20170101
 *  [
 *    {
 *        "day_log_kg": 47.6,
 *        "day_log_member_id": 1,
 *        "day_log_diary_date": "2017-10-09T15:00:00.000Z"
 *    },
 *    {
 *        "day_log_kg": 42,
 *        "day_log_member_id": 1,
 *        "day_log_diary_date": "2017-10-08T15:00:00.000Z"
 *    },
 *    {
 *        "day_log_kg": 41,
 *        "day_log_member_id": 1,
 *        "day_log_diary_date": "2017-10-07T15:00:00.000Z"
 *    },
 *    {
 *        "day_log_kg": 40,
 *        "day_log_member_id": 1,
 *        "day_log_diary_date": "2017-10-06T15:00:00.000Z"
 *    },
 *    {
 *        "day_log_kg": 39,
 *        "day_log_member_id": 1,
 *        "day_log_diary_date": "2017-10-05T15:00:00.000Z"
 *    }
 * ]
 */
router.get('/kg', (req, res) => {
  const date = req.query.date
  const user = req.user.id

  const param = {
    'day_log_member_id': req.user.id,
    'day_log_diary_date': req.query.date
  }
  query.getKgByDate(param)
    .then(data => {
      if (!data) {
        res.status(404)
      } else {
        res.send(data)
      }
    })
})

/**
 * @api {post} diary/kcal Post kcal
 * @apiDescription 특정 날짜에 목표 칼로리 등록
 * @apiName PostKcal
 * @apiGroup diary
 *
 * @apiParam {Number} user.id 사용자 id
 * @apiParam {Number} goal_kcal 목표 칼로리
 * @apiParam {Number} date 특정 날짜
 *
 * @apiSuccess {Number} day_log_kcal 사용자가 등록한 목표 칼로리
 * @apiSuccess {Number} day_log_member_id 사용자id
 * @apiSuccess {Number} day_log_diary_date 사용자가 입력했던 date
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/diary/kcal
 * {
 *     "day_log_kcal": 1300,
 *     "day_log_member_id": 1,
 *     "day_log_diary_date": "2016-12-31T15:00:00.000Z"
 * }
 */
router.post('/kcal', (req, res) => {
  const param = {
    'day_log_member_id': req.user.id,
    'day_log_kcal': req.body.goal_kcal,
    'day_log_diary_date': req.body.date
  }

  query.postGoalKcalbyUser(param)
    .then(result => {
      res.send(result)
    })
})

/**
 * @api {get} diary/kcal Get kcal
 * @apiDescription 특정 날짜에 등록한 목표 칼로리
 * @apiName GetKcal
 * @apiGroup diary
 *
 * @apiParam {Number} user.id 사용자 id
 * @apiParam {Number} date 특정 날짜
 *
 * @apiSuccess {Number} day_log_kcal 사용자가 입력했던 몸무게
 * @apiSuccess {Number} day_log_member_id 사용자id
 * @apiSuccess {Number} day_log_diary_date 사용자가 입력했던 date
 *
 * @apiSuccessExample {json} Success-Response:
 * http://localhost:5000/diary/kcal?date=20170101
 * {
 *     "day_log_kcal": 1300,
 *     "day_log_member_id": 1,
 *     "day_log_diary_date": "2016-12-31T15:00:00.000Z"
 * }
 */
router.get('/kcal', (req, res) => {
  const param = {
    'day_log_member_id': req.user.id,
    'day_log_diary_date': req.query.date
  }

  query.getKcalByDate(param)
    .then(result => {
      res.send(result)
    })
})

module.exports = router

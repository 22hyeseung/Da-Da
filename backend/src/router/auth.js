const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const csurf = require('csurf')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const KakaoStrategy = require('passport-kakao').Strategy

const query = require('../query')
const mw = require('../middleware')

const router = express.Router()

router.use(bodyParser.urlencoded({extended: false}))
router.use(cookieSession({
  name: 'oasess',
  keys: [
    process.env.SESSION_SECRET
  ]
}))
router.use(csurf())
router.use(mw.insertReq)
router.use(mw.insertToken)
router.use(passport.initialize())
router.use(passport.session())

passport.serializeUser((user, done) => {
  done(null, `${user.Member_provider}:${user.Member_provider_number}`)
})

passport.deserializeUser((str, done) => {
  const [Member_provider, Member_provider_number] = str.split(':')

  query.firstOrCreateUserByProvider(Member_provider, Member_provider_number)
    .then(user => {
      if (user) {
        done(null, user)
      } else {
        done(new Error('해당 정보와 일치하는 사용자가 없습니다.'))
      }
    })
})

passport.use(new KakaoStrategy({
  clientID: process.env.KAKAO_CLIENT_ID,
  clientSecret: process.env.KAKAO_CLIENT_SECRET,
  callbackURL: process.env.KAKAO_CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
  const avatar_url = profile._json.properties.profile_image ? profile._json.properties.profile_image : null;
  const user_name = profile.displayName ? profile.displayName : null;
  const member_data = {
    "Member_provider": "kakao",
    "Member_provider_number": profile.id,
    "Member_provider_name": user_name,
    "Member_avatar_url" : avatar_url,
    "Member_token": accessToken
  };

  // 기존 소스와 DaDa의 전제조건이 달라 처리순서를 변경.
  query.updateUserByProvider(member_data).then(() => {
    query.getUserById('kakao',profile.id)
      .then(user => {
        done(null, user);
      }).catch(err => {
        done(err);
      })
  });
}))

/**
 * @apiDefine auth OAuth
 * @apiSuccess {String} member_provider 소속sns
 * @apiSuccess {Number} member_provider_number sns 고유Id
 * @apiSuccess {String} member_provider_name 사용자 이름
 * @apiSuccess {String} member_avatar_url 사용자 아바타Url
 */
router.get('/', (req, res) => {
  res.render('auth.pug');
});

// 로그인 성공
router.get('/success', mw.loginRequired, (req, res) => {
  const token = jwt.sign({id: req.user.id}, process.env.JWT_SECRET);

  res.render('success.pug', {
    token,
    origin: process.env.TARGET_ORIGIN
  })
})

/**
 * @api {get} /auth/kakao/ Kakao
 * @apiDescription 카카오계정 로그인
 * @apiName authKakao
 * @apiGroup auth
 *
 * @apiUse auth
 * @apiSuccessExample {json} Success-Respoonse:
 * {
 *   "member_provider": "kakao",
 *   "member_provider_number": 12083789234789,
 *   "member_provider_name": "홍길동",
 *   "member_avatar_url": "./data/photo/_thumb/20"
 * }
 */
router.get('/kakao', passport.authenticate('kakao'))

router.get('/kakao/callback', (req, res, next) => {
  passport.authenticate('kakao', (err, user, info) => {
    if (err) {
      // 예상치 못한 예외 발생 시
      return next(err)
    }
    if (!user) {
      // 로그인 실패 시
      return res.redirect(req.baseUrl)
    }
    req.logIn(user, err => {
      // 예상치 못한 예외 발생 시
      if(err){
        return next(err)
      }
      // 로그인 성공
      res.redirect(req.baseUrl + '/success')
    })
  })(req, res, next)
})

router.use((err, req, res, next) => {
  console.log(err, err.message, '<< [ err, err.message ]');
  res.redirect(req.baseUrl)
})

module.exports = router

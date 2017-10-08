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
  done(null, `${user.member_provider}:${user.member_provider_number}`)
})

passport.deserializeUser((str, done) => {
  // 임시 code
  console.log(str, '<< [ str ]');
  done(null, str);
  /*const [provider, provider_user_id] = str.split(':')
  query.firstOrCreateUserByProvider(provider, provider_user_id)
    .then(user => {
      if (user) {
        done(null, user)
      } else {
        done(new Error('해당 정보와 일치하는 사용자가 없습니다.'))
      }
    })
  */
})

passport.use(new KakaoStrategy({
  clientID: process.env.KAKAO_CLIENT_ID,
  clientSecret: process.env.KAKAO_CLIENT_SECRET,
  callbackURL: process.env.KAKAO_CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
  const avatar_url = profile._json.properties.profile_image ? profile._json.properties.profile_image : null;
  const user_name = profile.displayName ? profile.displayName : null;

  console.log(avatar_url, user_name, '<< [ avatar_url, user_name ]');
  // 임시 data, code
  const user = {
    "member_provider": "kakao",
    "member_provider_number": profile.id,
    "member_provider_name": user_name,
    "member_avatar_url" : avatar_url
  };
  done(null, user);
/*
  query.firstOrCreateUserByProvider(
    'kakao',
    profile.id,
    accessToken,
    avatar_url,
    user_name
  ).then(user => {
    done(null, user)
  }).catch(err => {
    done(err)
  })
*/
}))

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

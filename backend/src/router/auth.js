const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const csurf = require('csurf')
const flash = require('connect-flash')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const GitHubStrategy = require('passport-github').Strategy

const util = require('../util')
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
router.use(flash())
router.use(csurf())
router.use(mw.insertReq)
router.use(mw.insertToken)
router.use(passport.initialize())
router.use(passport.session())

passport.serializeUser((user, done) => {
  done(null, `${user.provider}:${user.provider_user_id}`)
})

passport.deserializeUser((str, done) => {
  const [provider, provider_user_id] = str.split(':')
  query.firstOrCreateUserByProvider(provider, provider_user_id)
    .then(user => {
      if (user) {
        done(null, user)
      } else {
        done(new Error('해당 정보와 일치하는 사용자가 없습니다.'))
      }
    })
})

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
  query.firstOrCreateUserByProvider(
    'github',
    profile.id,
    accessToken
  ).then(user => {
    done(null, user)
  }).catch(err => {
    done(err)
  })
}))

router.get('/', (req, res) => {
  res.render('auth.pug')
})

// 로그인 성공 시
router.get('/success', mw.loginRequired, (req, res) => {
  const token = jwt.sign({id: req.user.id}, process.env.JWT_SECRET)
  res.render('success.pug', {
    token,
    origin: process.env.TARGET_ORIGIN
  })
})

router.get('/github', passport.authenticate('github'))

router.get('/github/callback', (req, res, next) => {
  // successRedirect, failureRedirect 지정하는 대신 직접 처리하기
  // http://passportjs.org/docs#custom-callback
  passport.authenticate('github', (err, user, info) => {
    // 예상치 못한 예외 발생 시
    if (err) {
      return next(err)
    }
    if (!user) {
      // 로그인 실패 시
      return res.redirect(req.baseUrl)
    }
    req.logIn(user, err => {
      // 예상치 못한 예외 발생 시
      if (err) {
        return next(err)
      }
      // 로그인 성공 시
      res.redirect(req.baseUrl + '/success')
    })
  })(req, res, next)
})

router.use((err, req, res, next) => {
  req.flash('error', err.message)
  res.redirect(req.baseUrl)
})

module.exports = router

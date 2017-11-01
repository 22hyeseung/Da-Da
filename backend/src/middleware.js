const cors = require('cors')
const expressJwt = require('express-jwt')

function loginRequired(req, res, next) {
  if (req.user) {
    next()
  } else {
    res.redirect('/auth')
  }
}

function insertReq(req, res, next) {
  // for use of flash message in templates
  res.locals.req = req
  next()
}

function insertToken(req, res, next) {
  res.locals.csrfToken = req.csrfToken()
  next()
}

const corsMiddleware = cors({ 'origin': process.env.TARGET_ORIGIN })

const expressJwtMiddleware = expressJwt({ 'secret': process.env.JWT_SECRET })

module.exports = {
  loginRequired,
  insertReq,
  insertToken,
  corsMiddleware,
  expressJwtMiddleware
}

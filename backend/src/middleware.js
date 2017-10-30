const query = require('./query')
const bodyParser = require('body-parser')
const expressJwt = require('express-jwt')
const cors = require('cors')

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

const jsonParser = bodyParser.json()
const urlParser = bodyParser.urlencoded({ 'extended': false })
const onJwt = expressJwt({ 'secret': process.env.JWT_SECRET })
const onCors = cors({ 'origin': process.env.TARGET_ORIGIN })

module.exports = {
  loginRequired,
  insertReq,
  insertToken,
  jsonParser,
  urlParser,
  onJwt,
  onCors,
  query
}

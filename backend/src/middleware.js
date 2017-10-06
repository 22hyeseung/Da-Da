const query = require('./query')

function loginRequired(req, res, next) {
  if (req.user) {
    next()
  } else {
    res.redirect('/login')
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

module.exports = {
  loginRequired,
  insertReq,
  insertToken
}

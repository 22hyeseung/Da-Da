const express = require('express')

const query = require('../query')
const mw = require('../middleware')

const router = express.Router()

router.use(mw.jsonMiddleware)
router.use(mw.urlencodedMiddleware)
router.use(mw.corsMiddleware)
router.options('*', mw.corsMiddleware)

router.get('/meta-share', (req, res) => {
  query.getUserById(req.query.id)
    .then(user => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write('<html><head>')
      res.write('<meta charset="UTF-8">')
      res.write('<link rel="image_src" href="//api.downmix.net/img/dada.png">')
      res.write('<meta name="description" content="<기록과 통계>를 통해 식습관을 모니터링 할 수 있고, 칼로리 카운트를 통해 식단을 관리할 수 있는 <다이어트 다이어리> 서비스">')
      res.write(`<meta property="og:title" content="[Da, Da] ${user.member_provider_name}님이 공유한 다이어리">`)
      res.write('<meta property="og:type" content="website">')
      res.write(`<meta property="og:description" content="${user.member_provider_name}님의 기록을 통해 식습관을 모니터링 할 수 있고, 칼로리 카운트를 통해 식단을 관리할 수 있는 <다이어트 다이어리> 서비스">`)
      res.write('<meta property="og:image" content="http://api.downmix.net/img/dada.png">')
      res.write('<meta property="og:image:width" content="200">')
      res.write('<meta property="og:image:height" content="200">')
      res.write(`<meta property="og:url" content="https://dada.downmix.net/share?id=${req.query.id}&date=${req.query.date}">`)
      res.write(`<meta name="twitter:card" content="[Da, Da] ${user.member_provider_name}님이 공유한 다이어리">`)
      res.write(`<meta name="twitter:url" content="https://dada.downmix.net/share?id=${req.query.id}&date=${req.query.date}">`)
      res.write(`<meta name="twitter:description" content="${user.member_provider_name}님의 기록을 통해 식습관을 모니터링 할 수 있고, 칼로리 카운트를 통해 식단을 관리할 수 있는 <다이어트 다이어리> 서비스">`)
      res.write('<meta name="twitter:image" content="http://api.downmix.net/img/dada.png">')

      res.end('</head><body>meta data</body></html>')
    })

})

module.exports = router

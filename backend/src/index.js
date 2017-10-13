require('dotenv').config()

const path = require('path')
const express = require('express')
const authRouter = require('./router/auth')
const userRouter = require('./router/user')
const diaryRouter = require('./router/diary')

const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'pug')
app.set('trust proxy')

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/diary', diaryRouter)

app.listen(PORT, () => {
  console.log(`listening ${PORT}...`)
})

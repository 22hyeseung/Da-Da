require('dotenv').config()

const path = require('path')
const express = require('express')
const authRouter = require('./router/auth')
const userRouter = require('./router/user')
const diaryRouter = require('./router/diary')
const exercisesRouter = require('./router/exercises')
const eatLogsRouter = require('./router/eat_logs')
const foodsRouter = require('./router/foods')

const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'pug')
app.set('trust proxy')

app.use(express.static(path.join(__dirname, '..', 'docs')))
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/diary', diaryRouter)
app.use('/exercises', exercisesRouter)
app.use('/eat-logs', eatLogsRouter)
app.use('/foods', foodsRouter)

app.listen(PORT, () => {
  console.log(`listening ${PORT}...`)
})

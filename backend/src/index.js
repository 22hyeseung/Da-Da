require('dotenv').config()

const path = require('path')
const express = require('express')
const morgan = require('morgan')
const authRouter = require('./router/auth')
const userRouter = require('./router/user')
const diaryRouter = require('./router/diary')
const exercisesRouter = require('./router/exercises')
const eatLogsRouter = require('./router/eat_logs')
const foodsRouter = require('./router/foods')
const weightRouter = require('./router/weight')
const recipeRouter = require('./router/recipe')
const reportRouter = require('./router/report')
const visionRouter = require('./router/vision')
const shareRouter = require('./router/share')
const crawlerRouter = require('./router/crawler')

const app = express()

const PORT = process.env.PORT || 3000

app.set('view engine', 'pug')
app.set('trust proxy')

app.use(express.static(path.join(__dirname, '..', 'docs')))
app.use('/img', express.static(path.join(__dirname, '..', 'img')))
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/diary', diaryRouter)
app.use('/exercises', exercisesRouter)
app.use('/eat-logs', eatLogsRouter)
app.use('/foods', foodsRouter)
app.use('/weight', weightRouter)
app.use('/recipe', recipeRouter)
app.use('/report', reportRouter)
app.use('/vision', visionRouter)
app.use('/share', shareRouter)
app.use('/crawler', crawlerRouter)

app.listen(PORT, () => {
  console.log(`listening ${PORT}...`)
})

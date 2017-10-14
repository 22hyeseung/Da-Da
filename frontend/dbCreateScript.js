const fs = require('fs')
const _ = require('lodash')

const db = {}
const date = new Date()
let dateOnly = date.toLocaleDateString()
let logoDetail = [] // (modal), title, datailId,
let weightLists = [] // id, university, location, imgURL, 다운로드 URL_SVG, 다운로드 URL_PNG,

_.range(1, 20).forEach(index => {
  weightLists.push({
    id: index,
    date: dateOnly,
    weight: index * 10,
  })
})

db['weightLists'] = weightLists

fs.writeFile(
  'weightDB.json',
  JSON.stringify(db, null, 2),
)

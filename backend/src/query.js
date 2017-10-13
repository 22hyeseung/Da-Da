const knex = require('./knex')
const bcrypt = require('bcrypt')
const validator = require('validator')

function firstOrCreateUserByProvider({
  member_provider,
  member_provider_number,
  member_provider_name,
  member_avatar_url,
  token = null
}) {
  return knex('member')
    .where({
      member_provider,
      member_provider_number
    })
    .first()
    .then(member => {
      if (member) {
        return member
      } else {
        return knex('member')
          .insert({
            member_provider,
            member_provider_number,
            member_provider_name,
            member_avatar_url,
            token
          })
          .then(([member_id]) => {
            return knex('member')
              .where({ member_id })
              .first()
          })
      }
    })
}

function getUserById(member_id) {
  return knex('member')
    .where({ member_id })
    .first()
}

function postDayLogRegret({ day_log_member_id, day_log_regret, day_log_diary_date }) {
  return knex('day_log')
    .where({ day_log_diary_date })
    .first()
    .then(regret => {
      if (regret) {
        return console.log('이미 작성한 일기가 존재합니다.')
      } else {
        return knex('day_log')
          .insert({
            day_log_member_id,
            day_log_regret,
            day_log_diary_date
          })
          .then(([day_log_id]) => {
            return knex('day_log')
              .where({ day_log_id })
              .first()
          })
      }
    })
}


module.exports = {
  getUserById,
  firstOrCreateUserByProvider,
  postDayLogRegret
}

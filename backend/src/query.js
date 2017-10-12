const knex = require('./knex')
const bcrypt = require('bcrypt')
const validator = require('validator')

function firstOrCreateUserByProvider({ member_provider, member_provider_number, member_provider_name, member_avatar_url, token = null }) {
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

module.exports = {
  getUserById,
  firstOrCreateUserByProvider
}

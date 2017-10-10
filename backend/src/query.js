const knex = require('./knex')
const bcrypt = require('bcrypt')
const validator = require('validator')

module.exports = {
  firstOrCreateUserByProvider(Member_provider, Member_provider_number, Member_provider_name, Member_token=null) {
    return knex('Member')
      .where({
        Member_provider,
        Member_provider_number
      })
      .first()
      .then(Member => {
        if (Member) {
          return Member
        } else {
          return knex('Member')
            .insert({
              Member_provider,
              Member_provider_number,
              Member_provider_name,
              Member_token
            })
            .then(([Member_id]) => {
              return knex('Member')
                .where({Member_id})
                .first()
            })
        }
      })
  },
  updateUserByProvider({Member_provider, Member_provider_number, Member_provider_name, Member_avatar_url, Member_token=null}){
    return knex('Member')
      .where({
        Member_provider,
        Member_provider_number
      })
      .first()
      .then(Member => {
        return knex('Member')
        .update({
          Member_provider_name,
          Member_avatar_url,
          Member_token
        })
      })
  },
  getUserById(Member_provider, Member_provider_number) {
    return knex('member')
      .where({Member_provider, Member_provider_number})
      .first()
  },
}

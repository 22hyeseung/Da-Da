
exports.up = function(knex, Promise) {
  return knex.schema.createTable('member', t => {
    t.increments('member_id') // 일련번호(PK)
    t.string('member_provider').notNullable()  // SNS그룹
    t.string('member_provider_number').notNullable()  // SNS ID
    t.string('member_provider_name').notNullable()  // SNS 이름
    t.string('member_avatar_url').notNullable()  // SNS 사진경로
    t.integer('member_age').notNullable()  // 나이
    t.timestamp('member_join_date').defaultTo(knex.fn.now())  // 가입일
    t.enum('member_gender', ['남', '여']).notNullable()  // 회원 성별
    t.string('token')  // SNS JWT 토큰(보류)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('member')
};

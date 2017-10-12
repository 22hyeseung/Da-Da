
exports.up = function(knex, Promise) {
  return knex.schema.createTable('member', t => {
    t.increments('member_id') // 일련번호(PK)
    t.string('member_provider').notNullable()  // SNS그룹
    t.string('member_provider_number').notNullable()  // SNS ID
    t.string('member_provider_name')  // SNS 이름
    t.string('member_avatar_url')  // SNS 사진경로
    t.integer('member_age')  // 나이
    t.enum('member_gender', ['남', '여'])  // 회원 성별
    t.string('token')  // SNS JWT 토큰(보류)
    t.timestamp('member_join_date').defaultTo(knex.fn.now())  // 데이터 로그시간
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('member')
};

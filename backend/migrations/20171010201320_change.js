
exports.up = function(knex, Promise) {
  return knex.schema.createTable('change', t => {
    t.increments('change_id')  //  변화 id(PK)
    t.integer('change_member_id').unsigned()  // 멤버 id(FK)
    t.foreign('change_member_id').references('member.member_id')
    t.float('change_height').notNullable()  // 키
    t.float('change_kg').notNullable()  // 몸무게
    t.integer('change_age').notNullable()  // 나이
    t.integer('change_kcal').notNullable()  // 목표 칼로리
    t.timestamp('change_date').defaultTo(knex.fn.now())  // 등록일
    t.string('change_regret')  // 반성일기
    t.string('change_comment')  // 일기 내용
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('change')
};

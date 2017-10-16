
exports.up = function(knex, Promise) {
  return knex.schema.createTable('burn', t => {
    t.increments('burn_id')  // 일련번호
    t.integer('burn_member_id').unsigned()  //  회원 (FK)
    t.foreign('burn_member_id').references('member.member_id')
    t.integer('burn_exercise_id').unsigned()  //  운동 (FK)
    t.foreign('burn_exercise_id').references('exercise.exercise_id')
    t.float('burn_kcal', [8], [3]).notNullable() // 소모칼로리
    t.integer('burn_minute').notNullable() // 운동시간
    t.date('burn_date') // 등록일
    t.timestamp('burn_time').defaultTo(knex.fn.now()) // 데이터 로그시간
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('burn')
};

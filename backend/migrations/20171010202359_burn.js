
exports.up = function(knex, Promise) {
  return knex.schema.createTable('burn', t => {
    t.increments('burn_id')  // 일련번호
    t.integer('burn_member_id').unsigned()  //  회원 (FK)
    t.foreign('burn_member_id').references('member.member_id')
    t.integer('burn_exercise_id').unsigned()  //  운동 (FK)
    t.foreign('burn_exercise_id').references('exercise.exercise_id')
    t.timestamp('burn_time').defaultTo(knex.fn.now()) //등록시간
    t.float('burn_kcal').notNullable() // 소모칼로리
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('burn')
};

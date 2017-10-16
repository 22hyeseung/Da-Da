
exports.up = function(knex, Promise) {
  return knex.schema.createTable('exercise', t => {
    t.increments('exercise_id')  // 일련번호(PK)
    t.float('exercise_burn_kcal', [8], [3]).notNullable() // 소모칼로리(1분)
    t.string('exercise_name').notNullable() // 운동 이름
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('exercise')
};

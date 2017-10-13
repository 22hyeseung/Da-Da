
exports.up = function(knex, Promise) {
  return knex.schema.createTable('day_log', t => {
    t.increments('day_log_id')  //  변화 id(PK)
    t.integer('day_log_member_id').unsigned()  // 멤버 id(FK)
    t.foreign('day_log_member_id').references('member.member_id')
    t.float('day_log_height')  // 키
    t.float('day_log_kg')  // 몸무게
    t.integer('day_log_kcal')  // 목표 칼로리
    t.string('day_log_regret')  // 반성일기
    t.string('day_log_comment')  // 일기 내용
    t.date('day_log_diary_date') // 등록일
    t.timestamp('day_log_submit_time').defaultTo(knex.fn.now())  // 데이터 로그시간
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('day_log')
};

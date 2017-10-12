
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('eat_log', t => {
    t.date('eat_log_diary_date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('eat_log', t => {
    t.dropColumn('eat_log_diary_date')
  })
};

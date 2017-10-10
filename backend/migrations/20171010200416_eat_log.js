
exports.up = function(knex, Promise) {
  return knex.schema.createTable('eat_log', t => {
    t.increments('eat_log_id')   // 일련번호
    t.integer('eat_log_member_id').unsigned()  // (FK)
    t.foreign('eat_log_member_id').references('member.member_id')
    t.integer('eat_log_food_id').unsigned()  // (FK)
    t.foreign('eat_log_food_id').references('food.food_id')
    t.integer('eat_log_recipe_id').unsigned()  // (FK)
    t.foreign('eat_log_recipe_id').references('recipe.recipe_id')  //
    t.enum('eat_log_meal_tag', ['아침', '점심', '저녁', '간식'])  // 다이어리 타입
    t.timestamp('eat_log_submit_time').defaultTo(knex.fn.now())  // 다이어리 등록시간
    t.string('eat_log_picture')  // 사진
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('eat_log')
};

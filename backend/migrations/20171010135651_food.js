
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food', t => {
    t.increments('food_id') // 일련번호(PK)
    t.string('food_name_ko').notNullable() // 이름(한글)
    t.string('food_name_en').notNullable() // 이름(영문)
    t.float('food_carb').notNullable() // 탄수화물
    t.float('food_protein').notNullable() // 단백질
    t.float('food_fat').notNullable() // 지방
    t.string('food_unit').notNullable() // 단위(g,cc,ml)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food')
};


exports.up = function(knex, Promise) {
  // VIEW 생성
  // eat_log, food, recipe 최종데이터 타입1

  return knex.schema.raw(
    `
    create view view_eat_log_type1 as
      select t1.*
      from
      (
        select  eat_log_id, eat_log_member_id, eat_log_food_id, eat_log_recipe_id, eat_log_meal_tag, eat_log_amount, eat_log_serve, eat_log_picture, eat_log_diary_date, eat_log_submit_time,
          food_name_ko as name, food_name_en as name_eng, food_carb as carb, food_protein as protein, food_fat as fat, food_unit as unit
        from eat_log join food
        on eat_log.eat_log_food_id = food.food_id
        union
        select eat_log_id, eat_log_member_id, eat_log_food_id, eat_log_recipe_id, eat_log_meal_tag, eat_log_amount, eat_log_serve, eat_log_picture, eat_log_diary_date, eat_log_submit_time,
          recipe_name_ko as name, recipe_name_en as name_eng, recipe_carb/recipe_serving as carb, recipe_protein/recipe_serving as protein, recipe_fat/recipe_serving as fat, 'people' as unit
        from eat_log join recipe
        on eat_log.eat_log_recipe_id = recipe.recipe_id
      ) as t1
    order by t1.eat_log_id
    `
  )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('VIEW_EAT_LOG_TYPE1')
};

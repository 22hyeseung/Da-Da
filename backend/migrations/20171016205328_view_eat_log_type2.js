
exports.up = function(knex, Promise) {
  // VIEW 생성
  // eat_log, food, recipe 최종데이터 타입2

  return knex.schema.raw(
    `
    create view view_eat_log_type2 as
    select t1.*
    from
    (
      select  eat_log_id, eat_log_member_id, eat_log_food_id, eat_log_recipe_id, eat_log_meal_tag, eat_log_amount, eat_log_serve, eat_log_picture, eat_log_diary_date, eat_log_submit_time,
        food_name_ko as name, food_name_en as name_eng,
        round(food_carb*eat_log_amount,3) as carb, round(food_protein*eat_log_amount,3) as protein, round(food_fat*eat_log_amount,3) as fat, food_unit as unit
      from eat_log join food
      on eat_log.eat_log_food_id = food.food_id
      union
      select eat_log_id, eat_log_member_id, eat_log_food_id, eat_log_recipe_id, eat_log_meal_tag, eat_log_amount, eat_log_serve, eat_log_picture, eat_log_diary_date, eat_log_submit_time,
        recipe_name_ko as name, recipe_name_en as name_eng,
        round((recipe_carb/recipe_serving)*eat_log_serve) as carb, round((recipe_protein/recipe_serving)*eat_log_serve) as protein, round((recipe_fat/recipe_serving)*eat_log_serve) as fat, 'people' as unit
      from eat_log join recipe
      on eat_log.eat_log_recipe_id = recipe.recipe_id
    ) as t1
    order by t1.eat_log_id
    `
  )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('VIEW_EAT_LOG_TYPE2')
};

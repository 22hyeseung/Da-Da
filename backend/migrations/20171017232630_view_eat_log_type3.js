exports.up = function(knex, Promise) {
  return knex.schema.raw(
    `
    create view view_eat_log_type3 as
    select t1.*
    from
    (
      select eat_log_id, eat_log_member_id, eat_log_food_id, eat_log_recipe_id,
        eat_log_meal_tag, eat_log_amount, eat_log_serve, eat_log_picture,
        eat_log_diary_date, eat_log_submit_time, food_name_ko as name, food_name_en as name_eng,
        round((food_carb*4 + food_protein*4 + food_protein*9)*eat_log_amount, 3) as kcal, food_unit as unit
      from eat_log join food on eat_log.eat_log_food_id = food.food_id
      union
      select eat_log_id, eat_log_member_id, eat_log_food_id, eat_log_recipe_id,
        eat_log_meal_tag, eat_log_amount, eat_log_serve, eat_log_picture,
        eat_log_diary_date, eat_log_submit_time, recipe_name_ko as name, recipe_name_en as name_eng,
        round((recipe_carb*4 + recipe_protein*4 + recipe_protein*9)/eat_log_serve, 3) as kcal, 'people' as unit
      from eat_log join recipe on eat_log.eat_log_recipe_id = recipe.recipe_id
    ) as t1
    order by t1.eat_log_id
    `
  )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('view_eat_log_type3')
};

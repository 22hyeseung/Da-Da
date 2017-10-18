const knex = require('./knex')
const bcrypt = require('bcrypt')
const validator = require('validator')

function firstOrCreateUserByProvider({
  member_provider,
  member_provider_number,
  member_provider_name,
  member_avatar_url,
  token = null
}) {
  return knex('member')
    .where({
      member_provider,
      member_provider_number
    })
    .first()
    .then(member => {
      if (member) {
        return member
      } else {
        return knex('member')
          .insert({
            member_provider,
            member_provider_number,
            member_provider_name,
            member_avatar_url,
            token
          })
          .then(([member_id]) => {
            return knex('member')
              .where({ member_id })
              .first()
          })
      }
    })
}

function getUserById(member_id) {
  return knex('member')
    .where({ member_id })
    .first()
}

function postDayLogRegret({ day_log_member_id, day_log_regret, day_log_diary_date }) {
  return knex('day_log')
    .where({ day_log_diary_date, day_log_member_id })
    .first()
    .then(day_log => {
      if (!day_log) {
        knex('day_log')
          .insert({
            day_log_member_id,
            day_log_diary_date
          })
          .then()
      }
      return knex('day_log')
        .where({ day_log_diary_date, day_log_member_id })
        .update({ day_log_regret })
    })
}

function postDayLogComment({ day_log_member_id, day_log_comment, day_log_diary_date }) {
  return knex('day_log')
    .where({ day_log_diary_date, day_log_member_id })
    .first()
    .then(day_log => {
      if (!day_log) {
        knex('day_log')
          .insert({
            day_log_member_id,
            day_log_diary_date
          })
          .then()
      }
      return knex('day_log')
        .where({ day_log_diary_date, day_log_member_id })
        .update({ day_log_comment })
    })
}

function getSelectDayLog({ day_log_member_id, day_log_diary_date }) {
  return knex('day_log')
    .where({ day_log_diary_date, day_log_member_id })
    .first()
}

function postDayKgbyUser({ day_log_member_id, day_log_kg, day_log_diary_date }) {
  return knex('day_log')
    .where({ day_log_diary_date, day_log_member_id })
    .first()
    .then(day_kg => {
      if (!day_kg) {
        knex('day_log')
          .insert({
            day_log_member_id,
            day_log_diary_date
          })
          .then()
      }
      return knex('day_log')
        .where({ day_log_diary_date, day_log_member_id })
        .update({ day_log_kg })
    })
}

function insertBurnById({ burn_member_id, burn_exercise_id, burn_date, burn_kcal, burn_minute }) {
  return knex('burn')
    .insert({
      burn_member_id,
      burn_exercise_id,
      burn_date,
      burn_kcal,
      burn_minute
    })
    .then(([burn_id]) => {
      return knex('burn')
        .where({ burn_id })
        .first()
    })
}

function getExercisesByName(exercise_name) {
  return knex('exercise')
    .where('exercise_name', 'like', `%${exercise_name}%`)
}

function getKgByDate(day_log_diary_date, day_log_member_id) {
  return knex('day_log')
    .where({ day_log_member_id })
    .orderBy('day_log_diary_date', 'desc')
    .select('day_log_kg', 'day_log_member_id', 'day_log_diary_date')
    .limit(4)
}

function postEatLogs({ eat_log_member_id, eat_log_food_id, eat_log_recipe_id, eat_log_meal_tag, eat_log_amount, eat_log_serve, eat_log_picture, eat_log_diary_date }) {
  return knex('eat_log')
    .insert({
      eat_log_member_id,
      eat_log_food_id,
      eat_log_recipe_id,
      eat_log_meal_tag,
      eat_log_amount,
      eat_log_serve,
      eat_log_picture,
      eat_log_diary_date
    })
    .then(([eat_log_id]) => {
      return knex('eat_log')
        .where({ eat_log_id })
    })
}

// function getEatLogs({ eat_log_member_id, eat_log_diary_date }) {
//   return knex('eat_log')
//     .where({ eat_log_member_id, eat_log_diary_date })
// }

function getEatLogs({ eat_log_member_id, eat_log_diary_date }) {
  return knex('eat_log')
    .where({ eat_log_member_id, eat_log_diary_date })
}

function getEatLogsFood({ eat_log_member_id, eat_log_diary_date }) {
  return knex('eat_log')
    .select(
      'eat_log_id', 'eat_log.eat_log_food_id', 'food.food_unit', 'eat_log.eat_log_meal_tag',
      knex.raw('(((food.food_carb*4) + (food.food_protein*4)+(food.food_fat*9))*eat_log.eat_log_amount) as food_kcal'),
      knex.raw('(eat_log.eat_log_amount * food.food_carb) as food_carb'),
      knex.raw('(eat_log.eat_log_amount * food.food_protein) as food_protein'),
      knex.raw('(eat_log.eat_log_amount * food.food_fat) as food_fat')
    )
    .join('food', 'eat_log.eat_log_food_id', '=', 'food.food_id')
    .where({ eat_log_member_id, eat_log_diary_date })
}

function getEatLogsRecipe({ eat_log_member_id, eat_log_diary_date }) {
  return knex('eat_log')
    .select(
      'eat_log_id', 'eat_log.eat_log_recipe_id', 'eat_log.eat_log_meal_tag',
      knex.raw('((((recipe.recipe_carb * 4) + (recipe.recipe_protein * 4) + (recipe.recipe_fat * 9))/recipe.recipe_serving)*eat_log.eat_log_serve) as recipe_kcal'),
      knex.raw('((recipe.recipe_carb/recipe.recipe_serving) * eat_log.eat_log_serve ) as recipe_carb'),
      knex.raw('((recipe.recipe_protein/recipe.recipe_serving) * eat_log.eat_log_serve) as recipe_protein'),
      knex.raw('((recipe.recipe_fat/recipe.recipe_serving) * eat_log.eat_log_serve) as recipe_fat')
    )
    .join('recipe', 'eat_log.eat_log_recipe_id', '=', 'recipe.recipe_id')
    .where({ eat_log_member_id, eat_log_diary_date })
}

function getFoodsSearch(name) {
  return knex('food')
    .select('food_id', 'food_name_ko', 'food_carb', 'food_protein', 'food_fat', 'food_unit')
    .where('food_name_ko', 'like', `%${name}%`)
    .orderByRaw('length(food_name_ko)')
    .orderBy('food_name_ko')
}

function getEatKcalByDate({ eat_log_member_id, eat_log_diary_date }) {
  return knex('eat_log')
    .select(
      'eat_log.eat_log_member_id', 'eat_log.eat_log_diary_date',
      knex.raw('sum(eat_log.eat_log_amount * ((food.food_carb * 4) + (food.food_protein * 4) + (food.food_fat * 9))) as today_kcal'),
      knex.raw('sum(eat_log.eat_log_amount * (food.food_carb * 4)) as today_carb'),
      knex.raw('sum(eat_log.eat_log_amount * (food.food_protein * 4)) as today_protein'),
      knex.raw('sum(eat_log.eat_log_amount * (food.food_fat * 9)) as today_fat')
    )
    .join('food', 'eat_log.eat_log_food_id', '=', 'food.food_id')
    .where({ eat_log_member_id, eat_log_diary_date })
    .groupBy(['eat_log.eat_log_member_id', 'eat_log.eat_log_diary_date'])
    .first()
}

function getBurnKcalByDate({ burn_member_id, burn_date }) {
  return knex('burn')
    .select('burn_member_id', 'burn_date', knex.raw('sum(burn_kcal) as burn_kcal'))
    .where({ burn_member_id, burn_date })
    .first()
}

function getDayLogAll({ day_log_member_id }) {
  return knex('day_log')
    .select('day_log_height', 'day_log_kg', 'day_log_kcal', 'day_log_diary_date')
    .where({ day_log_member_id })
    .orderBy('day_log_diary_date', 'desc')
    .then()
}

// 가장 마지막 day_log (방어코드 용)
function getLastDaylog({ day_log_member_id }) {
  return knex('day_log')
    .where({ day_log_member_id })
    .orderBy('day_log_diary_date', 'desc')
    .first()
}


// recipe를 가져온다.
function getRecipeById(recipe_id) {
  return knex('recipe')
    .select('*', knex.raw('((recipe_carb*4)+(recipe_protein*4)+(recipe_fat*9)) as recipe_kcal'))
    .where({ recipe_id })
    .first()
}

// 이름을 통하여 recipe를 검색한다.
function getRecipeByName(recipe_name) {
  return knex('recipe')
    .select('recipe_id', 'recipe_name_ko', 'recipe_time', knex.raw('((recipe_carb*4)+(recipe_protein*4)+(recipe_fat*9)) as recipe_kcal'))
    .where('recipe_name_ko', 'like', `%${recipe_name}%`)
}

// 날짜를 통해 몸무게기록을 가져온다.
function getWeightByDate({ day_log_member_id, day_log_diary_date }) {
  return knex('day_log')
    .join('member', 'day_log.day_log_member_id', '=', 'member.member_id')
    .select('day_log.day_log_kg', 'member.member_goal_weight')
    .where({ day_log_member_id, day_log_diary_date })
    .first()
}

// id를 통해 처음입력했던 몸무게를 가져온다.
function getFirstKgById({ day_log_member_id }) {
  return knex('day_log')
    .select('day_log_kg')
    .orderBy('day_log_diary_date', 'asc')
    .where({ day_log_member_id })
    .first()
}

function getReportKcalByDateF({ eat_log_member_id, start_date, end_date }) {
  return knex('eat_log')
    .select(
      'eat_log_member_id', 'eat_log.eat_log_diary_date', 'eat_log.eat_log_meal_tag',
      knex.raw('sum(eat_log.eat_log_amount * ((food.food_carb * 4) + (food.food_protein * 4) + (food.food_fat * 9))) as food_kcal')
    )
    .join('food', 'eat_log.eat_log_food_id', '=', 'food.food_id')
    .where({ eat_log_member_id })
    .whereNull('eat_log_recipe_id')
    .orderBy('eat_log_diary_date')
    .groupBy(['eat_log.eat_log_diary_date', 'eat_log.eat_log_meal_tag'])
    .whereBetween('eat_log_diary_date', [start_date, end_date])
}

function getReportKcalByDateR({ eat_log_member_id, start_date, end_date }) {
  return knex('eat_log')
    .select(
      'eat_log_member_id', 'eat_log.eat_log_diary_date', 'eat_log.eat_log_meal_tag',
      knex.raw('sum(recipe.recipe_serving/10 * ((recipe.recipe_carb * 4) + (recipe.recipe_protein * 4) + (recipe.recipe_fat * 9))) as recipe_kcal')
    )
    .join('recipe', 'eat_log.eat_log_recipe_id', '=', 'recipe.recipe_id')
    .where({ eat_log_member_id })
    .whereNull('eat_log_food_id')
    .orderBy('eat_log_diary_date')
    .groupBy(['eat_log.eat_log_diary_date', 'eat_log.eat_log_meal_tag'])
    .whereBetween('eat_log_diary_date', [start_date, end_date])
}

function getReportKcalByDateAvg({ eat_log_member_id, start_date, end_date }) {
  return knex('view_eat_log_type3')
    .select(
      'eat_log_meal_tag',
      knex.raw('sum(kcal)')
    )
    .where({ eat_log_member_id })
    .orderBy('eat_log_diary_date')
    .groupBy(['eat_log_meal_tag'])
    .whereBetween('eat_log_diary_date', [start_date, end_date])
}

function getReportNutrition({ eat_log_member_id, start_date, end_date }) {
  return knex('view_eat_log_type2')
    .select(
      'eat_log_member_id', 'eat_log_diary_date',
      knex.raw('round(sum(carb),3) as carb'),
      knex.raw('round(sum(protein),3) as protein'),
      knex.raw('round(sum(fat),3) as fat')
    )
    .where({ eat_log_member_id })
    .andWhere('eat_log_diary_date', '>=', start_date)
    .andWhere('eat_log_diary_date', '<=', end_date)
    .groupBy('eat_log_member_id', 'eat_log_diary_date')
    .orderBy('eat_log_member_id', 'eat_log_diary_date')
    .then()
}

function getReportNutritionSum({ eat_log_member_id, start_date, end_date }) {
  return knex('view_eat_log_type2')
    .select(
      'eat_log_member_id',
      knex.raw('round(sum(carb),3) as carb'),
      knex.raw('round(sum(protein),3) as protein'),
      knex.raw('round(sum(fat),3) as fat')
    )
    .where({ eat_log_member_id })
    .andWhere('eat_log_diary_date', '>=', start_date)
    .andWhere('eat_log_diary_date', '<=', end_date)
    .first()
}

module.exports = {
  getUserById,
  firstOrCreateUserByProvider,
  postDayLogRegret,
  postDayLogComment,
  getSelectDayLog,
  postDayKgbyUser,
  insertBurnById,
  getExercisesByName,
  getFoodsSearch,
  getKgByDate,
  postEatLogs,
  getLastDaylog,
  getEatKcalByDate,
  getBurnKcalByDate,
  getDayLogAll,
  getRecipeById,
  getRecipeByName,
  getEatLogs,
  getEatLogsFood,
  getEatLogsRecipe,
  getWeightByDate,
  getFirstKgById,
  getReportKcalByDateF,
  getReportKcalByDateR,
  getReportKcalByDateAvg,
  getReportNutrition,
  getReportNutritionSum
}

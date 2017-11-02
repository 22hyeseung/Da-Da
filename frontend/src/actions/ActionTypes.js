//==========================================
// diaryFood.js
// get Food Logs
export const GET_FOOD_LOGS_REQUEST =
  'GET_FOOD_LOGS_REQUEST'
export const GET_FOOD_LOGS_SUCCESS =
  'GET_FOOD_LOGS_SUCCESS'
export const GET_FOOD_LOGS_FAILED =
  'GET_FOOD_LOGS_FAILED'

// post Food Logs
export const POST_FOOD_TO_DATABASE_REQUEST =
  'POST_FOOD_TO_DATABASE_REQUEST'
export const POST_FOOD_TO_DATABASE_SUCCESS =
  'POST_FOOD_TO_DATABASE_SUCCESS'
export const POST_FOOD_TO_DATABASE_FAILED =
  'POST_FOOD_TO_DATABASE_FAILED'

// get Food data Next post
export const GET_FOOD_DATA_NEXT_POST_REQUEST =
  'GET_FOOD_DATA_NEXT_POST_REQUEST'
export const GET_FOOD_DATA_NEXT_POST_SUCCESS =
  'GET_FOOD_DATA_NEXT_POST_SUCCESS'
export const GET_FOOD_DATA_NEXT_POST_FAILED =
  'GET_FOOD_DATA_NEXT_POST_FAILED'

// (vision) post Food Image
export const POST_FOOD_IMG_TO_DATABASE_REQUEST =
  'POST_FOOD_IMG_TO_DATABASE_REQUEST'
export const POST_FOOD_IMG_TO_DATABASE_SUCCESS =
  'POST_FOOD_IMG_TO_DATABASE_SUCCESS'
export const POST_FOOD_IMG_TO_DATABASE_FAILED =
  'POST_FOOD_IMG_TO_DATABASE_FAILED'

// clear the image searched
export const CLEAR_IMG_SEARCH_DATA =
  'CLEAR_IMG_SEARCH_DATA'

// clear the image selected
export const CLEAR_SELECT_FOOD =
  'CLEAR_SELECT_FOOD'

// clear the image URL selected
export const CLEAR_IMG_URL = 'CLEAR_IMG_URL'

// save the image selected
export const SAVE_SELECT_FOOD = 'SAVE_SELECT_FOOD'

// update food data
export const UPDATE_FOOD_OF_DATABASE_REQUEST =
  'UPDATE_FOOD_OF_DATABASE_REQUEST'
export const UPDATE_FOOD_OF_DATABASE_SUCCESS =
  'UPDATE_FOOD_OF_DATABASE_SUCCESS'
export const UPDATE_FOOD_OF_DATABASE_FAILED =
  'UPDATE_FOOD_OF_DATABASE_FAILED'

//  get Food data Next update
export const GET_FOOD_DATA_NEXT_UPDATE_REQUEST =
  'GET_FOOD_DATA_NEXT_UPDATE_REQUEST'
export const GET_FOOD_DATA_NEXT_UPDATE_SUCCESS =
  'GET_FOOD_DATA_NEXT_UPDATE_SUCCESS'
export const GET_FOOD_DATA_NEXT_UPDATE_FAILED =
  'GET_FOOD_DATA_NEXT_UPDATE_FAILED'

// save the image selected
export const DELETE_FOOD_OF_DATABASE_REQUEST =
  'DELETE_FOOD_OF_DATABASE_REQUEST'
export const DELETE_FOOD_OF_DATABASE_SUCCESS =
  'DELETE_FOOD_OF_DATABASE_SUCCESS'
export const DELETE_FOOD_OF_DATABASE_FAILED =
  'DELETE_FOOD_OF_DATABASE_FAILED'
//==========================================

//==========================================
// action: diaryFood & reducer: dairySummary
export const UPDATE_CHART_SUMMARY =
  'UPDATE_CHART_SUMMARY'
export const DELETE_CHART_SUMMARY =
  'DELETE_CHART_SUMMARY'
export const UPDATE_LIST_SUMMARY =
  'UPDATE_LIST_SUMMARY'

//==========================================
// action: diaryFitness & reducer: dairySummary
export const UPDATE_SUMMARY_OF_BURN_CALORIE =
  'UPDATE_SUMMARY_OF_BURN_CALORIE'
export const DELETE_SUMMARY_OF_BURN_CALORIE =
  'DELETE_SUMMARY_OF_BURN_CALORIE,'

//==========================================
// diaryFitness.js
export const FETCHED_FITNESS_LOGS_SUCCESS =
  'FETCHED_FITNESS_LOGS_SUCCESS'
export const POST_FITNESS_TO_DATABASE =
  'POST_FITNESS_TO_DATABASE'
export const UPDATE_FITNESS_OF_DATABASE =
  'UPDATE_FITNESS_OF_DATABASE'
export const DELETE_FITNESS_OF_DATABASE =
  'DELETE_FITNESS_OF_DATABASE'
//==========================================

//==========================================
// weight.js
export const FETCHED_WEIGHT_SUCCESS =
  'FETCHED_WEIGHT_SUCCESS'
export const POST_AND_GET_WEIGHT_SUCCESS =
  'POST_AND_GET_WEIGHT_SUCCESS'
export const DELETE_AND_GET_WEIGHT_SUCCESS =
  'DELETE_AND_GET_WEIGHT_SUCCESS'

export const GET_WEIGHT_ALL_REQUEST =
  'GET_WEIGHT_ALL_REQUEST'
export const GET_WEIGHT_ALL_SUCCESS =
  'GET_WEIGHT_ALL_SUCCESS'
export const GET_WEIGHT_ALL_FAILED =
  'GET_WEIGHT_ALL_FAILED'

export const GET_WEIGHT_BY_DATE_REQUEST =
  'GET_WEIGHT_BY_DATE_REQUEST'
export const GET_WEIGHT_BY_DATE_SUCCESS =
  'GET_WEIGHT_BY_DATE_SUCCESS'
export const GET_WEIGHT_BY_DATE_FAILED =
  'GET_WEIGHT_BY_DATE_FAILED'
export const UPDATE_WEIGHT_CHART =
  'UPDATE_WEIGHT_CHART'

//==========================================

//==========================================
// auth.js
// Token save
export const SAVE_TOKEN = 'SAVE_TOKEN'

// Save UserInfo
export const SAVE_USERINFO_REQUEST =
  'SAVE_USERINFO_REQUEST'
export const SAVE_USERINFO_SUCCESS =
  'SAVE_USERINFO_SUCCESS'
export const SAVE_USERINFO_FAILED =
  'SAVE_USERINFO_FAILED'

// Post UserInfo
export const POST_USERINFO_REQUEST =
  'POST_USERINFO_REQUEST'
export const POST_USERINFO_SUCCESS =
  'POST_USERINFO_SUCCESS'
export const POST_USERINFO_FAILED =
  'POST_USERINFO_FAILED'

// Logout
export const LOGOUT = 'LOGOUT'
//==========================================

//==========================================
// review.js
export const CHANGE_MODE_COMMENT =
  'CHANGE_MODE_COMMENT'
export const CHANGE_MODE_ARTICLE =
  'CHANGE_MODE_ARTICLE'

// Comment GET
export const GET_COMMENT_REQUEST =
  'GET_COMMENT_REQUEST'
export const GET_COMMENT_SUCCESS =
  'GET_COMMENT_SUCCESS'
export const GET_COMMENT_FAILED =
  'GET_COMMENT_FAILED'
// Comment POST
export const POST_COMMENT_REQUEST =
  'POST_COMMENT_REQUEST'
export const POST_COMMENT_SUCCESS =
  'POST_COMMENT_SUCCESS'
export const POST_COMMENT_FAILED =
  'POST_COMMENT_FAILED'
// Comment DELETE
export const DELETE_COMMENT_REQUEST =
  'DELETE_COMMENT_REQUEST'
export const DELETE_COMMENT_SUCCESS =
  'DELETE_COMMENT_SUCCESS'
export const DELETE_COMMENT_FAILED =
  'DELETE_COMMENT_FAILED'

// Article GET
export const GET_ARTICLE_REQUEST =
  'GET_ARTICLE_REQUEST'
export const GET_ARTICLE_SUCCESS =
  'GET_ARTICLE_SUCCESS'
export const GET_ARTICLE_FAILED =
  'GET_ARTICLE_FAILED'
//Article POST
export const POST_ARTICLE_REQUEST =
  'POST_ARTICLE_REQUEST'
export const POST_ARTICLE_SUCCESS =
  'POST_ARTICLE_SUCCESS'
export const POST_ARTICLE_FAILED =
  'POST_ARTICLE_FAILED'
//Article DELETE
export const DELETE_ARTICLE_REQUEST =
  'DELETE_ARTICLE_REQUEST'
export const DELETE_ARTICLE_SUCCESS =
  'DELETE_ARTICLE_SUCCESS'
export const DELETE_ARTICLE_FAILED =
  'DELETE_ARTICLE_FAILED'
//==========================================

//==========================================
// setDate.js
export const SET_TODAY_DATE_AND_DAY =
  'SET_TODAY_DATE_AND_DAY'
export const SET_BEFORE_DATE_AND_DAY =
  'SET_BEFORE_DATE_AND_DAY'
export const MOVE_PREVIOUS_DATE =
  'MOVE_PREVIOUS_DATE'
export const MOVE_NEXT_DATE = 'MOVE_NEXT_DATE'
//==========================================

//==========================================
// reportAPI.js
export const GET_REPORTS_CALORIES_REQUEST =
  'GET_REPORTS_CALORIES_REQUEST'
export const GET_REPORTS_CALORIES_SUCCESS =
  'GET_REPORTS_CALORIES_SUCCESS'
export const GET_REPORTS_CALORIES_FAILED =
  'GET_REPORTS_CALORIES_FAILED'
export const GET_REPORTS_NUTRITION_REQUEST =
  'GET_REPORTS_NUTRITION_REQUEST '
export const GET_REPORTS_NUTRITION_SUCCESS =
  'GET_REPORTS_NUTRITION_SUCCESS'
export const GET_REPORTS_NUTRITION_FAILED =
  'GET_REPORTS_NUTRITION_FAILED'
export const GET_REPORTS_CALORIES_SUMMARY_REQUEST =
  'GET_REPORTS_CALORIES_SUMMARY_REQUEST'
export const GET_REPORTS_CALORIES_SUMMARY_SUCCESS =
  'GET_REPORTS_CALORIES_SUMMARY_SUCCESS'
export const GET_REPORTS_CALORIES_SUMMARY_FAILED =
  'GET_REPORTS_CALORIES_SUMMARY_FAILED'
export const GET_REPORTS_NUTRITION_SUMMARY_REQUEST =
  'GET_REPORTS_NUTRITION_SUMMARY_REQUEST'
export const GET_REPORTS_NUTRITION_SUMMARY_SUCCESS =
  'GET_REPORTS_NUTRITION_SUMMARY_SUCCESS'
export const GET_REPORTS_NUTRITION_SUMMARY_FAILED =
  'GET_REPORTS_NUTRITION_SUMMARY_FAILED'

//==========================================

//==========================================
// getFoodSummary.js
export const GET_FOOD_SUMMARY_REQUEST =
  'GET_FOOD_SUMMARY_REQUEST'
export const GET_FOOD_SUMMARY_SUCCESS =
  'GET_FOOD_SUMMARY_SUCCESS'
export const GET_FOOD_SUMMARY_FAILED =
  'GET_FOOD_SUMMARY_FAILED'
//==========================================

//==========================================
// recipe.js
export const GET_RECIPE_SUCCESS =
  'GET_RECIPE_SUCCESS'
export const GET_RECIPE_SEARCH_SUCCESS =
  'GET_RECIPE_SEARCH_SUCCESS'
//==========================================

//==========================================
// diaryKcal.js
export const GET_KCAL_REQUEST = 'GET_KCAL_REQUEST'
export const GET_KCAL_SUCCESS = 'GET_KCAL_SUCCESS'
export const GET_KCAL_FAILED = 'GET_KCAL_FAILED'
export const POST_KCAL_REQUEST =
  'POST_KCAL_REQUEST'
export const POST_KCAL_SUCCESS =
  'POST_KCAL_SUCCESS'
export const POST_KCAL_FAILED = 'POST_KCAL_FAILED'
//==========================================

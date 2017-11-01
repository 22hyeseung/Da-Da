
exports.up = function(knex, Promise) {
  return knex('exercise').insert([
      {exercise_id: 1, exercise_burn_kcal: 1.83, exercise_name: "요리하기"},
      {exercise_id: 2, exercise_burn_kcal: 12, exercise_name: "스쿼시"},
      {exercise_id: 3, exercise_burn_kcal: 8, exercise_name: "수영"},
      {exercise_id: 4, exercise_burn_kcal: 8, exercise_name: "달리기"},
      {exercise_id: 5, exercise_burn_kcal: 7, exercise_name: "빨리 걷기"},
      {exercise_id: 6, exercise_burn_kcal: 6, exercise_name: "등산"},
      {exercise_id: 7, exercise_burn_kcal: 4, exercise_name: "스트레칭"},
      {exercise_id: 8, exercise_burn_kcal: 4.7, exercise_name: "줄넘기"},
      {exercise_id: 9, exercise_burn_kcal: 4.5, exercise_name: "계단오르기"},
      {exercise_id: 10, exercise_burn_kcal: 4, exercise_name: "자전거타기"},
      {exercise_id: 11, exercise_burn_kcal: 2.26, exercise_name: "걷기"},
      {exercise_id: 12, exercise_burn_kcal: 0.83, exercise_name: "잠자기"},
      {exercise_id: 13, exercise_burn_kcal: 0.9, exercise_name: "눕기"},
      {exercise_id: 14, exercise_burn_kcal: 0.9, exercise_name: "버스타기"},
      {exercise_id: 15, exercise_burn_kcal: 0.9, exercise_name: "TV보기"},
      {exercise_id: 16, exercise_burn_kcal: 1.36, exercise_name: "목욕하기"},
      {exercise_id: 17, exercise_burn_kcal: 1.83, exercise_name: "샤워하기"},
      {exercise_id: 18, exercise_burn_kcal: 1.83, exercise_name: "운전하기"},
      {exercise_id: 19, exercise_burn_kcal: 2.73, exercise_name: "볼링"},
      {exercise_id: 20, exercise_burn_kcal: 3.6, exercise_name: "승마"},
      {exercise_id: 21, exercise_burn_kcal: 3.6, exercise_name: "탁구"},
      {exercise_id: 22, exercise_burn_kcal: 4.1, exercise_name: "골프"},
      {exercise_id: 23, exercise_burn_kcal: 4.1, exercise_name: "배드민턴"},
      {exercise_id: 24, exercise_burn_kcal: 5, exercise_name: "볼륨댄스"},
      {exercise_id: 25, exercise_burn_kcal: 5, exercise_name: "스케이트타기"},
      {exercise_id: 26, exercise_burn_kcal: 5, exercise_name: "헬스용 사이클"},
      {exercise_id: 27, exercise_burn_kcal: 5.9, exercise_name: "에어로빅(일반)"},
      {exercise_id: 28, exercise_burn_kcal: 6.3, exercise_name: "스쿠버 다이빙"},
      {exercise_id: 29, exercise_burn_kcal: 9.1, exercise_name: "테니스"},
      {exercise_id: 30, exercise_burn_kcal: 10, exercise_name: "암벽등반"}
    ])
};

exports.down = function(knex, Promise) {
  return knex('exercise').truncate()
};

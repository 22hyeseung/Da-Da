define({ "api": [
  {
    "type": "get",
    "url": "/diary/comment",
    "title": "Get Comment",
    "description": "<p>원하는 날의 comment(일기)를 가져온다.</p>",
    "name": "GetComment",
    "group": "diary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>등록일</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>반성일기의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "member_id",
            "description": "<p>반성일기를 작성한 유저의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>가져온 일기</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>페이지의 표시되어 있는 다이어리의 날짜</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/diary/comment?date=20171010\n{\n   \"day_log_id\": 4,\n   \"day_log_member_id\": 1,\n   \"day_log_regret\": null,\n   \"day_log_comment\": \"오늘의 일기입니다.\",\n   \"day_log_diary_date\": \"2017-10-24\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/diary.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "diary/kcal",
    "title": "Get kcal",
    "description": "<p>특정 날짜에 등록한 목표 칼로리</p>",
    "name": "GetKcal",
    "group": "diary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>사용자 id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>특정 날짜</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "day_log_kcal",
            "description": "<p>사용자가 입력했던 몸무게</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "day_log_member_id",
            "description": "<p>사용자id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "day_log_diary_date",
            "description": "<p>사용자가 입력했던 date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/diary/kcal?date=20170101\n{\n    \"day_log_kcal\": 1300,\n    \"day_log_member_id\": 1,\n    \"day_log_diary_date\": \"2016-12-31T15:00:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/diary.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "diary/kg",
    "title": "Get Kg",
    "description": "<p>최근 입력한 체중 4개만 출력</p>",
    "name": "GetKg",
    "group": "diary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>사용자 id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>'오늘'을 기준</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "day_log_kg",
            "description": "<p>사용자가 입력했던 몸무게</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "day_log_member_id",
            "description": "<p>사용자id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "day_log_diary_date",
            "description": "<p>사용자가 입력했던 date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/diary/kg?date=20170101\n [\n   {\n       \"day_log_kg\": 47.6,\n       \"day_log_member_id\": 1,\n       \"day_log_diary_date\": \"2017-10-09T15:00:00.000Z\"\n   },\n   {\n       \"day_log_kg\": 42,\n       \"day_log_member_id\": 1,\n       \"day_log_diary_date\": \"2017-10-08T15:00:00.000Z\"\n   },\n   {\n       \"day_log_kg\": 41,\n       \"day_log_member_id\": 1,\n       \"day_log_diary_date\": \"2017-10-07T15:00:00.000Z\"\n   },\n   {\n       \"day_log_kg\": 40,\n       \"day_log_member_id\": 1,\n       \"day_log_diary_date\": \"2017-10-06T15:00:00.000Z\"\n   },\n   {\n       \"day_log_kg\": 39,\n       \"day_log_member_id\": 1,\n       \"day_log_diary_date\": \"2017-10-05T15:00:00.000Z\"\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/diary.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "/diary/regret",
    "title": "Get Regret",
    "description": "<p>원하는 날의 반성일기 가져오기</p>",
    "name": "GetRegret",
    "group": "diary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>등록일</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>반성일기의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "member_id",
            "description": "<p>반성일기를 작성한 유저의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "regret",
            "description": "<p>가져온 반성일기</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>페이지의 표시되어 있는 다이어리의 날짜</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/diary/regret?date=20171011\n{\n    \"day_log_id\": 3,\n    \"day_log_member_id\": 1,\n    \"day_log_regret\": \"오늘의 반성일기입니다.\",\n    \"day_log_comment\": \"오늘의 일기입니다.\",\n    \"day_log_diary_date\": \"2017-10-23\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/diary.js",
    "groupTitle": ""
  },
  {
    "type": "post",
    "url": "/diary/comment",
    "title": "Post Comment",
    "description": "<p>오늘의 일기 작성 후 저장</p>",
    "name": "PostComment",
    "group": "diary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>일기</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>등록일</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>반성일기의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "member_id",
            "description": "<p>반성일기를 작성한 유저의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>작성한 일기</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>페이지의 표시되어 있는 다이어리의 날짜</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/diary/comment\n{\n    \"day_log_id\": 2,\n    \"day_log_member_id\": 1,\n    \"day_log_regret\": null,\n    \"day_log_comment\": \"오늘의 일기입니다.\",\n    \"day_log_diary_date\": \"2017-10-22\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/diary.js",
    "groupTitle": ""
  },
  {
    "type": "post",
    "url": "diary/kcal",
    "title": "Post kcal",
    "description": "<p>특정 날짜에 목표 칼로리 등록</p>",
    "name": "PostKcal",
    "group": "diary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>사용자 id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goal_kcal",
            "description": "<p>목표 칼로리</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>특정 날짜</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "day_log_kcal",
            "description": "<p>사용자가 등록한 목표 칼로리</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "day_log_member_id",
            "description": "<p>사용자id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "day_log_diary_date",
            "description": "<p>사용자가 입력했던 date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/diary/kcal\n{\n    \"day_log_kcal\": 1300,\n    \"day_log_member_id\": 1,\n    \"day_log_diary_date\": \"2016-12-31T15:00:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/diary.js",
    "groupTitle": ""
  },
  {
    "type": "post",
    "url": "diary/kg",
    "title": "Post Kg",
    "description": "<p>오늘 체중을 입력 후 저장</p>",
    "name": "PostKg",
    "group": "diary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>사용자 id</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>오늘날짜</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "kg",
            "description": "<p>사용자가 입력한 몸무게</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/diary/kg\n{\n    \"day_log_id\": 7,\n    \"day_log_kg\": 123,\n    \"day_log_member_id\": 1,\n    \"day_log_diary_date\": \"2017-09-12T15:00:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/diary.js",
    "groupTitle": ""
  },
  {
    "type": "post",
    "url": "/diary/regret",
    "title": "Post Regret",
    "description": "<p>오늘의 반성일기 작성 후 저장</p>",
    "name": "PostRegret",
    "group": "diary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "regret",
            "description": "<p>반성일기</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>등록일</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>반성일기의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "member_id",
            "description": "<p>반성일기를 작성한 유저의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "regret",
            "description": "<p>작성한 반성일기</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>페이지의 표시되어 있는 다이어리의 날짜</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/diary/regret\n\n{\n    \"day_log_id\": 2,\n    \"day_log_member_id\": 1,\n    \"day_log_regret\": \"오늘의 반성일기입니다.\",\n    \"day_log_comment\": null,\n    \"day_log_diary_date\": \"2017-10-22\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/diary.js",
    "groupTitle": ""
  },
  {
    "type": "put",
    "url": "/diary/comment/2",
    "title": "Put Comment",
    "description": "<p>원하는 날의 comment(일기)를 지운다.</p>",
    "name": "PutComment",
    "group": "diary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>등록일</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>반성일기의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "member_id",
            "description": "<p>반성일기를 작성한 유저의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>가져온 일기</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>페이지의 표시되어 있는 다이어리의 날짜</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/diary/comment/2\n{\n    \"day_log_id\": 2,\n    \"day_log_member_id\": 1,\n    \"day_log_comment\": null,\n    \"day_log_diary_date\": \"2017-10-22\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/diary.js",
    "groupTitle": ""
  },
  {
    "type": "put",
    "url": "/diary/regret/:id",
    "title": "Put regret",
    "description": "<p>오늘의 일기 작성 후 삭제 null로 치환</p>",
    "name": "PutRegret",
    "group": "diary",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "regret",
            "description": "<p>반성일기</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>반성일기의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "member_id",
            "description": "<p>반성일기를 작성한 유저의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "regret",
            "description": "<p>작성한 반성일기</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>페이지의 표시되어 있는 다이어리의 날짜</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/diary/regret/2\n{\n    \"day_log_id\": 2,\n    \"day_log_member_id\": 1,\n    \"day_log_regret\": null,\n    \"day_log_diary_date\": \"2017-10-22\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/diary.js",
    "groupTitle": ""
  },
  {
    "type": "delete",
    "url": "/eat-logs/:id",
    "title": "delete Eat-logs",
    "description": "<p>사용자가 선택한 기록을 지운다.</p>",
    "name": "Delete_EatLogs",
    "group": "eatlog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_id",
            "description": "<p>기록된것의 id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Message",
            "optional": false,
            "field": "complete",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/eat-logs/10\nMessage complete",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/eat_logs.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "/eat-logs",
    "title": "Get Eat-logs",
    "description": "<p>사용자가 지정한날에 먹은기록을 가져온다.</p>",
    "name": "GET_EatLogs",
    "group": "eatlog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>등록일</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_id",
            "description": "<p>eat_log에 남겨지는 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_member_id",
            "description": "<p>기록한 member의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_food_id",
            "description": "<p>food를 기록할시 food_id 입력</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_recipe_id",
            "description": "<p>recipe를 기록할시 recipe_id 입력</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "eat_log_meal_tag",
            "description": "<p>아침,점심,저녁,간식인지 구분</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eat_log_picture",
            "description": "<p>사진을 기록</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "eat_log_diary_date",
            "description": "<p>등록일</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/eat-logs?date=20171016\n{\n    \"foodresult\": [\n        {\n            \"eat_log_id\": 2,\n            \"eat_log_picture\": null,\n            \"eat_log_food_id\": 1,\n            \"eat_log_amount\": 322,\n            \"food_name_ko\": \"도토리묵밥\",\n            \"food_name_en\": \"Doritomi rice\",\n            \"food_unit\": \"g\",\n            \"eat_log_meal_tag\": \"저녁\",\n            \"food_kcal\": 193.522,\n            \"food_carb\": 34.776,\n            \"food_protein\": 7.084,\n            \"food_fat\": 2.898\n        },\n        {\n            \"eat_log_id\": 3,\n            \"eat_log_picture\": null,\n            \"eat_log_food_id\": 1,\n            \"eat_log_amount\": 100,\n            \"food_name_ko\": \"도토리묵밥\",\n            \"food_name_en\": \"Doritomi rice\",\n            \"food_unit\": \"g\",\n            \"eat_log_meal_tag\": \"저녁\",\n            \"food_kcal\": 60.1,\n            \"food_carb\": 10.8,\n            \"food_protein\": 2.2,\n            \"food_fat\": 0.9\n        }\n    ],\n    \"reciperesult\": [\n        {\n            \"eat_log_id\": 1,\n            \"eat_log_picture\": null,\n            \"eat_log_recipe_id\": 1,\n            \"eat_log_serve\": 350,\n            \"recipe_name_ko\": \"피자\",\n            \"recipe_name_en\": \"pizza\",\n            \"eat_log_meal_tag\": \"저녁\",\n            \"recipe_kcal\": 595000,\n            \"recipe_carb\": 35000,\n            \"recipe_protein\": 35000,\n            \"recipe_fat\": 35000\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/eat_logs.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "/eat-logs/:id",
    "title": "Get Eat-logs By Id",
    "description": "<p>사용자가 선택한 기록을 가져온다.</p>",
    "name": "GET_EatLogs_By_Id",
    "group": "eatlog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "eat-log-id",
            "description": "<p>기록된 id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_id",
            "description": "<p>eat_log에 남겨지는 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_member_id",
            "description": "<p>기록한 member의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_food_id",
            "description": "<p>food를 기록할시 food_id 입력</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_recipe_id",
            "description": "<p>recipe를 기록할시 recipe_id 입력</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "eat_log_meal_tag",
            "description": "<p>아침,점심,저녁,간식인지 구분</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eat_log_picture",
            "description": "<p>사진을 기록</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "eat_log_diary_date",
            "description": "<p>등록일</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/eat-logs/10\n{\n    \"eat_log_id\": 3,\n    \"eat_log_picture\": null,\n    \"eat_log_food_id\": 1,\n    \"eat_log_amount\": 322,\n    \"food_name_ko\": \"도토리묵밥\",\n    \"food_name_en\": \"Doritomi rice\",\n    \"food_unit\": \"g\",\n    \"eat_log_meal_tag\": \"저녁\",\n    \"food_kcal\": 120.2,\n    \"food_carb\": 21.6,\n    \"food_protein\": 4.4,\n    \"food_fat\": 1.8\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/eat_logs.js",
    "groupTitle": ""
  },
  {
    "type": "petch",
    "url": "/eat-logs/:id",
    "title": "Petch Eat-logs",
    "description": "<p>사용자가 먹은 음식의 기록을 변경</p>",
    "name": "Petch_EatLogs",
    "group": "eatlog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "amount",
            "description": "<p>먹은양 기록</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "serve",
            "description": "<p>인분 기록</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "eat_log_meal_tag",
            "description": "<p>아침,점심,저녁,간식인지 구분</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "eat_log_amount",
            "description": "<p>먹은양 기록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eat_log_picture",
            "description": "<p>사진을 기록</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "eat_log_diary_date",
            "description": "<p>등록일</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/eat-logs/2\n{\n    \"eat_log_id\": 2,\n    \"eat_log_member_id\": 1,\n    \"eat_log_food_id\": 1,\n    \"eat_log_recipe_id\": null,\n    \"eat_log_meal_tag\": \"저녁\",\n    \"eat_log_amount\": 322,\n    \"eat_log_serve\": null,\n    \"eat_log_picture\": null,\n    \"eat_log_diary_date\": \"2017-10-15T15:00:00.000Z\",\n    \"eat_log_submit_time\": \"2017-10-16T12:30:37.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/eat_logs.js",
    "groupTitle": ""
  },
  {
    "type": "post",
    "url": "/eat-logs",
    "title": "Post Eat-logs",
    "description": "<p>사용자가 먹은 음식을 기록</p>",
    "name": "Post_EatLogs",
    "group": "eatlog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "food_id",
            "description": "<p>입력 food등록</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "recipe_id",
            "description": "<p>입력 recipe등록</p>"
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "meal_tag",
            "description": "<p>아침,점심,저녁,간식인지 구분</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "amount",
            "description": "<p>먹은양 기록</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>사진을 기록</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>등록일</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_id",
            "description": "<p>eat_log에 남겨지는 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_member_id",
            "description": "<p>기록한 member의 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_food_id",
            "description": "<p>food를 기록할시 food_id 입력</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "eat_log_recipe_id",
            "description": "<p>recipe를 기록할시 recipe_id 입력</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "eat_log_meal_tag",
            "description": "<p>아침,점심,저녁,간식인지 구분</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "eat_log_amount",
            "description": "<p>먹은양 기록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eat_log_picture",
            "description": "<p>사진을 기록</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "eat_log_diary_date",
            "description": "<p>등록일</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/eat-logs\n[\n    {\n        \"eat_log_id\": 31,\n        \"eat_log_member_id\": 1,\n        \"eat_log_food_id\": null,\n        \"eat_log_recipe_id\": 1,\n        \"eat_log_meal_tag\": \"점심\",\n        \"eat_log_amount\": null,\n        \"eat_log_serve\": 2,\n        \"eat_log_picture\": null,\n        \"eat_log_diary_date\": \"2017-10-16T15:00:00.000Z\",\n        \"eat_log_submit_time\": \"2017-10-20T08:12:06.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/eat_logs.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "/eat-logs/summary",
    "title": "Get EatSummary",
    "description": "<p>우측의 사용자 칼로리 요약</p>",
    "name": "eatSummary",
    "group": "eatlog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>요약할 날짜 (&quot;YYYYMMDD&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "member_id",
            "description": "<p>사용자 id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>summary의 날짜</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "day_log_kcal",
            "description": "<p>목표 칼로리</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "today_kcal",
            "description": "<p>하루 섭취 칼로리</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "today_burn_kcal",
            "description": "<p>하루 소모 칼로리</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "today_carb",
            "description": "<p>하루 섭취 탄수화물</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "today_protein",
            "description": "<p>하루 섭취 단백질</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "today_fat",
            "description": "<p>하루 섭취 지방</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "/eat-logs/summary?date=20171010\n\n{\n    \"member_id\": 1,\n    \"date\": \"20171015\",\n    \"day_log_kcal\": 1200,\n    \"today_kcal\": 260,\n    \"today_burn_kcal\": 340,\n    \"today_carb\": 132,\n    \"today_protein\": 56,\n    \"today_fat\": 72\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/eat_logs.js",
    "groupTitle": ""
  },
  {
    "type": "delete",
    "url": "/exercises",
    "title": "delete Exercises",
    "description": "<p>burn_id를 선택해 소모 열량 운동기록 한개 삭제</p>",
    "name": "DeleteExercises",
    "group": "exercises",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>사용자가 선택한 기록 id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>user.id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Succes-Response:",
          "content": "http://localhost:5000/exercises/3",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/exercises.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "/exercises",
    "title": "Get Exercises",
    "description": "<p>사용자가 등록한 날짜별 운동기록</p>",
    "name": "GetExercises",
    "group": "exercises",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>사용자가 등록한 날짜</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>user.id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "burn_id",
            "description": "<p>burn 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "burn_member_id",
            "description": "<p>유저 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "burn_kcal",
            "description": "<p>운동별 소모 열량</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "burn_minute",
            "description": "<p>운동별 소요 시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "exercise_name",
            "description": "<p>운동이름</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succes-Response:",
          "content": "http://localhost:5000/exercises?date=20170101\n[\n   {\n       \"burn_id\": 1,\n       \"burn_member_id\": 1,\n       \"burn_kcal\": 50,\n       \"burn_minute\": 30,\n       \"exercise_name\": \"요리하기\"\n   }\n]",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/exercises.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "/exercises/search",
    "title": "Get ExercisesSearch",
    "description": "<p>사용자가 운동별 1분당 소모열량 검색</p>",
    "name": "GetExercisesSearch",
    "group": "exercises",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>사용자가 입력한 검색 글자</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "exercise_id",
            "description": "<p>exercise 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "exercise_burn_kcal",
            "description": "<p>1분당 소모 열량</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "exercise_name",
            "description": "<p>운동이름</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succes-Response:",
          "content": "http://localhost:5000/exercises/search?name=걷기\n걷기로 검색\n[\n   {\n       \"exercise_id\": 1,\n       \"exercise_burn_kcal\": 23,\n       \"exercise_name\": \"걷기\"\n   },\n   {\n       \"exercise_id\": 2,\n       \"exercise_burn_kcal\": 40,\n       \"exercise_name\": \"빨리 걷기\"\n   }\n]",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/exercises.js",
    "groupTitle": ""
  },
  {
    "type": "patch",
    "url": "/exercises/:id",
    "title": "Patch Exercises",
    "description": "<p>burn_id를 선택해 사용자가 입력한 정보로 업데이트</p>",
    "name": "PatchExercises",
    "group": "exercises",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>사용자가 선택한 기록 id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "burn_minute",
            "description": "<p>사용자가 수정할 운동한 시간</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "kcal",
            "description": "<p>사용자가 수정할 시간으로 계산된 소모 열량</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "burn_id",
            "description": "<p>사용자가 선택해 수정한 소모열량 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "burn_kcal",
            "description": "<p>사용자가 선택해 수정한 소모열량</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "burn_minute",
            "description": "<p>사용자가 선택해 수정한 소모 운동시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "exercise_name",
            "description": "<p>사용자가 선택한 수정하고자 한 운동이름</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succes-Response:",
          "content": "http://localhost:5000/exercises/3\n\n[\n  {\n      \"burn_id\": 3,\n      \"burn_kcal\": 300,\n      \"burn_minute\": 50,\n      \"exercise_name\": \"요리하기\"\n  }\n]",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/exercises.js",
    "groupTitle": ""
  },
  {
    "type": "post",
    "url": "/exercises",
    "title": "Post Exercises",
    "description": "<p>운동을 통한 열량소모를 등록하기 위한 액션</p>",
    "name": "PostExercises",
    "group": "exercises",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>userid</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "exercise_id",
            "description": "<p>exercise pk</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>등록하고자 하는 날짜</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "burn_kcal",
            "description": "<p>사용자가 입력한 정보로 계산된 소모된 열량</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "burn_minute",
            "description": "<p>사용자가 입력한 운동시간</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "burn_id",
            "description": "<p>post 완료한 운동항목 pk</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "burn_exercise_name",
            "description": "<p>post 완료한 운동이름</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "burn_date",
            "description": "<p>운동등록한 날짜</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "burn_kcal",
            "description": "<p>계산된 칼로리로 등록한 칼로리</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "burn_minute",
            "description": "<p>운동한 시간</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"burn_id\": 1,\n    \"burn_exercise_name\": \"요리하기\",\n    \"burn_date\": \"2016-12-31T15:00:00.000Z\",\n    \"burn_kcal\": 50,\n    \"burn_minute\": 30\n}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/exercises.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "/foods",
    "title": "Get FoodsSearch",
    "description": "<p>음식정보(영양소)를 검색한다.</p>",
    "name": "getFoodsSearch",
    "group": "foods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>음식 검색어</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "food_id",
            "description": "<p>음식ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "food_name_ko",
            "description": "<p>음식명</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "food_carb",
            "description": "<p>탄수화물</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "food_protein",
            "description": "<p>단백질</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "food_fat",
            "description": "<p>지방</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "food_unit",
            "description": "<p>단위(g, ml)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Respoonse:",
          "content": "/foods?name=덮밥\n\n[\n    {\n        \"food_id\": 21,\n        \"food_name_ko\": \"낙지덮밥\",\n        \"food_carb\": 0.22,\n        \"food_protein\": 0.09,\n        \"food_fat\": 0.02,\n        \"food_unit\": \"g\"\n    },\n    {\n        \"food_id\": 23,\n        \"food_name_ko\": \"제육덮밥\",\n        \"food_carb\": 0.23,\n        \"food_protein\": 0.06,\n        \"food_fat\": 0.04,\n        \"food_unit\": \"g\"\n    },\n    {\n        \"food_id\": 19,\n        \"food_name_ko\": \"해물덮밥\",\n        \"food_carb\": 0.14,\n        \"food_protein\": 0.06,\n        \"food_fat\": 0.03,\n        \"food_unit\": \"g\"\n    },\n    {\n        \"food_id\": 24,\n        \"food_name_ko\": \"양송이덮밥\",\n        \"food_carb\": 0.16,\n        \"food_protein\": 0.03,\n        \"food_fat\": 0.02,\n        \"food_unit\": \"g\"\n    },\n    {\n        \"food_id\": 16,\n        \"food_name_ko\": \"오징어덮밥\",\n        \"food_carb\": 0.22,\n        \"food_protein\": 0.06,\n        \"food_fat\": 0.03,\n        \"food_unit\": \"g\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/foods.js",
    "groupTitle": "foods"
  },
  {
    "type": "get",
    "url": "/recipe/search/:id",
    "title": "Get Recipe",
    "description": "<p>선택한 recipe를 보여준다.</p>",
    "name": "getRecipe",
    "group": "recipe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "recipe_id",
            "description": "<p>레시피의 id값</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "recipe_id",
            "description": "<p>recipe의 id값</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipe_name_ko",
            "description": "<p>recipe의 한국명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipe_name_en",
            "description": "<p>recipe의 영어명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipe_level",
            "description": "<p>recipe의 난이도</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipe_time",
            "description": "<p>recipe의 소요시간</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "recipe_carb",
            "description": "<p>recipe의 탄수화물</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "recipe_protein",
            "description": "<p>recipe의 단백질</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "recipe_fat",
            "description": "<p>recipe의 지방</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipe_ingredient",
            "description": "<p>recipe의 재료</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipe",
            "description": "<p>recipe의 순서</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "recipe_serving",
            "description": "<p>recipe의 인분수</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipe_from",
            "description": "<p>recipe의 출처</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "recipe_kcal",
            "description": "<p>recipe의 kcal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/recipe/search/1\n=> 여기서 1은 recipe_id값이다.\n{\n    \"recipe_id\": 1,\n    \"recipe_name_ko\": \"피자\",\n    \"recipe_name_en\": \"pizza\",\n    \"recipe_level\": \"하\",\n    \"recipe_time\": \"30분\",\n    \"recipe_carb\": 100,\n    \"recipe_protein\": 100,\n    \"recipe_fat\": 100,\n    \"recipe_ingredient\": \"치즈, 감자\",\n    \"recipe\": \"피자를 오븐에 넣는다.\",\n    \"recipe_serving\": 1,\n    \"recipe_from\": \"www.naver.com\",\n    \"recipe_kcal\": 1700\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/recipe.js",
    "groupTitle": "recipe"
  },
  {
    "type": "get",
    "url": "/recipe/search?name",
    "title": "Get RecipeSearch",
    "description": "<p>검색한 recipe들을 보여준다.</p>",
    "name": "getRecipe_search",
    "group": "recipe",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>레시피명</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "recipe_id",
            "description": "<p>recipe의 id값</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipe_name_ko",
            "description": "<p>recipe의 한국명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "recipe_time",
            "description": "<p>recipe의 소요시간</p>"
          },
          {
            "group": "Success 200",
            "type": "float",
            "optional": false,
            "field": "recipe_kcal",
            "description": "<p>recipe의 kcal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "http://localhost:5000/recipe/search?name=피자\n[\n    {\n        \"recipe_id\": 1,\n        \"recipe_name_ko\": \"피자\",\n        \"recipe_time\": \"30분\",\n        \"recipe_kcal\": 1700\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/recipe.js",
    "groupTitle": "recipe"
  },
  {
    "type": "get",
    "url": "/report/nutrition/summary",
    "title": "Get ReportNutritionSum",
    "description": "<p>사용자의 영양분을 기간내 합산한다.</p>",
    "name": "ReportNutritionSummary",
    "group": "report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>시작일 YYYYMMDD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>종료일 YYYYMMDD</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "eat_log_member_id",
            "description": "<p>회원ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "carb",
            "description": "<p>탄수화물</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "protein",
            "description": "<p>단백질</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "fat",
            "description": "<p>지방</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Respoonse:",
          "content": "/report/nutrition/summary?start_date=20171010&end_date=20171016\n\n{\n    \"eat_log_member_id\": 7,\n    \"carb\": 971.45,\n    \"protein\": 410.55,\n    \"fat\": 179.35\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/report.js",
    "groupTitle": "report"
  },
  {
    "type": "get",
    "url": "/kcal/days",
    "title": "Get Kcal",
    "description": "<p>레포트에서 특정 기간동안의 입력했던 먹은 음식들의 일별 칼로리</p>",
    "name": "getKcalDays",
    "group": "report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>시작일 YYYYMMDD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>종료일 YYYYMMDD</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "eat_log_meal_tag",
            "description": "<p>사용자가 섭취한 시기</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "day_log_diary_date",
            "description": "<p>사용자가 등록한 섭취일자</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sum",
            "description": "<p>(kcal) 사용자가 meal_tag에 섭취한 당일 열량</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "day_log_kcal",
            "description": "<p>사용자가 입력한 당일 목표 섭취 칼로리</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Respoonse:",
          "content": "http://localhost:5000/report/kcal/days?start_date=20170101&end_date=20170102\n[\n   {\n       \"eat_log_meal_tag\": \"간식\",\n       \"eat_log_diary_date\": \"2017-10-10T15:00:00.000Z\",\n       \"sum(kcal)\": 37.48,\n       \"day_log_kcal\": 1200\n   },\n   {\n       \"eat_log_meal_tag\": \"아침\",\n       \"eat_log_diary_date\": \"2017-10-10T15:00:00.000Z\",\n       \"sum(kcal)\": 9.37,\n       \"day_log_kcal\": 1200\n   },\n   {\n       \"eat_log_meal_tag\": \"저녁\",\n       \"eat_log_diary_date\": \"2017-10-10T15:00:00.000Z\",\n       \"sum(kcal)\": 28.11,\n       \"day_log_kcal\": 1200\n   },\n   {\n       \"eat_log_meal_tag\": \"점심\",\n       \"eat_log_diary_date\": \"2017-10-10T15:00:00.000Z\",\n       \"sum(kcal)\": 18.74,\n       \"day_log_kcal\": 1200\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/report.js",
    "groupTitle": "report"
  },
  {
    "type": "get",
    "url": "/kcal/summary",
    "title": "GetKcalSummaryDate",
    "description": "<p>사용자의 아침,점심,저녁,간식의 비중을 요약</p>",
    "name": "getKcalSummaryDate",
    "group": "report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>시작일 YYYYMMDD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>종료일 YYYYMMDD</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "eat_log_member_id",
            "description": "<p>회원ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eat_log_meal_tag",
            "description": "<p>섭취시기</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sum",
            "description": "<p>(kcal) 합계</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Respoonse:",
          "content": "http://localhost:5000/report/kcal/summary?start_date=20170101&end_date=20170102\n[\n    {\n        \"eat_log_meal_tag\": \"아침\",\n        \"sum(kcal)\": 9.37\n    },\n    {\n        \"eat_log_meal_tag\": \"점심\",\n        \"sum(kcal)\": 18.74\n    },\n    {\n        \"eat_log_meal_tag\": \"저녁\",\n        \"sum(kcal)\": 28.11\n    },\n    {\n        \"eat_log_meal_tag\": \"간식\",\n        \"sum(kcal)\": 37.48\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/report.js",
    "groupTitle": "report"
  },
  {
    "type": "get",
    "url": "/report/nutrition/days",
    "title": "Get ReportNutrition",
    "description": "<p>사용자의 영양분을 일별기간 통계낸다.</p>",
    "name": "getReportNutrition",
    "group": "report",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>시작일 YYYYMMDD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>종료일 YYYYMMDD</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "eat_log_member_id",
            "description": "<p>회원ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "eat_log_diary_date",
            "description": "<p>기록일</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "carb",
            "description": "<p>탄수화물</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "protein",
            "description": "<p>단백질</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "fat",
            "description": "<p>지방</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Respoonse:",
          "content": "/report/nutrition/days?start_date=20171010&end_date=20171016\n\n[\n    {\n        \"eat_log_member_id\": 7,\n        \"eat_log_diary_date\": \"2017-10-14T15:00:00.000Z\",\n        \"carb\": 544.05,\n        \"protein\": 250.75,\n        \"fat\": 56.75\n    },\n    {\n        \"eat_log_member_id\": 7,\n        \"eat_log_diary_date\": \"2017-10-15T15:00:00.000Z\",\n        \"carb\": 427.4,\n        \"protein\": 159.8,\n        \"fat\": 122.6\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/report.js",
    "groupTitle": "report"
  },
  {
    "type": "post",
    "url": "/user/first",
    "title": "Post UserData",
    "description": "<p>사용자의 초기 정보를 입력한다.</p>",
    "name": "Post_First_UserData",
    "group": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Enum",
            "optional": false,
            "field": "gender",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "goal_weight",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "height",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "kg",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "member_id",
            "description": "<p>member 아이디값</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "member_birth",
            "description": "<p>생년월일</p>"
          },
          {
            "group": "Success 200",
            "type": "Enum",
            "optional": false,
            "field": "member_gender",
            "description": "<p>성별</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "member_goal_weight",
            "description": "<p>목표몸무게</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "day_log_id",
            "description": "<p>day_log 아이디 값</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "day_log_member_id",
            "description": "<p>기록한 유저 아이디값</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "day_log_height",
            "description": "<p>사용자의 키</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "day_log_kg",
            "description": "<p>사용자의 몸무게</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "day_log_diray_date",
            "description": "<p>등록일</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Respoonse:",
          "content": "http://localhost:5000/user/first\n{\n    \"MemberResult\": {\n        \"member_id\": 1,\n        \"member_birth\": \"1993-09-07\",\n        \"member_gender\": \"남\",\n        \"member_goal_weight\": 60\n    },\n    \"DaylogResult\": {\n        \"day_log_id\": 1,\n        \"day_log_member_id\": 1,\n        \"day_log_height\": 173,\n        \"day_log_kg\": 65,\n        \"diary_date\": \"2017-10-22\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/user.js",
    "groupTitle": "user"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get UserData",
    "description": "<p>현재 로그인된 사용자의 정보를 가져온다.</p>",
    "name": "getUserData",
    "group": "user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "member_provider",
            "description": "<p>sns분류</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "member_provider_number",
            "description": "<p>sns ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "member_provider_name",
            "description": "<p>sns 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "member_avatar_url",
            "description": "<p>sns 프로필이미지</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "member_age",
            "description": "<p>나이</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "member_gender",
            "description": "<p>성별</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Respoonse:",
          "content": "{\n    \"member_provider\": \"kakao\",\n    \"member_provider_number\": \"532971400\",\n    \"member_provider_name\": \"홍길동\",\n    \"member_avatar_url\": \"http://k.kakaocdn.net/dn/beeqib/btqhlVJQRrn/8bFQnlKKwFyOd4xyvNIjTk/img_640x640.jpg\",\n    \"member_birth\": \"1990-06-14T15:00:00.000Z\",\n    \"member_goal_weight\": 70,\n    \"member_gender\": \"남\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/user.js",
    "groupTitle": "user"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "Delete Weight",
    "description": "<p>사용자가 지우고자하는 몸무게 기록을 삭제한다.</p>",
    "name": "DeleteWeight",
    "group": "weight",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>사용자가 선택한 몸무게 id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "weight",
            "description": "<p>null complete</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/weight.js",
    "groupTitle": ""
  },
  {
    "type": "post",
    "url": "/weight",
    "title": "Post Weight",
    "description": "<p>사용자가 목표 체중을 수정한다.</p>",
    "name": "PostWeight",
    "group": "weight",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>사용자 id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goal_weight",
            "description": "<p>사용자가 입력한 목표 몸무게</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "member_goal_weight",
            "description": "<p>사용자가 입력한 목표 몸무게</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/router/weight.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "/weight/all",
    "title": "Get WeightAll",
    "description": "<p>체중기록 전체현황. 로그인한 사용자의 최초 기록시간부터 현재까지의 기록을 불러온다.</p>",
    "name": "getWeightAll",
    "group": "weight",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "allDayLog",
            "description": "<p>기록 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "allDayLog.day_log_height",
            "description": "<p>기록 키</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "allDayLog.day_log_kg",
            "description": "<p>기록 몸무게</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "allDayLog.day_log_kcal",
            "description": "<p>기록 칼로리</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "allDayLog.day_log_diary_date",
            "description": "<p>기록일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "goal_weight",
            "description": "<p>목표 칼로리</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Respoonse:",
          "content": "{\n    \"allDayLog\": [\n        {\n            \"day_log_height\": 171,\n            \"day_log_kg\": 78,\n            \"day_log_kcal\": 1800,\n            \"day_log_diary_date\": \"2017-10-14T15:00:00.000Z\"\n        },\n        {\n            \"day_log_height\": 170,\n            \"day_log_kg\": 77,\n            \"day_log_kcal\": 2000,\n            \"day_log_diary_date\": \"2017-10-13T15:00:00.000Z\"\n        }\n    ],\n    \"goal_weight\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/weight.js",
    "groupTitle": ""
  },
  {
    "type": "get",
    "url": "/weight?date",
    "title": "WeightDate",
    "description": "<p>사용자가 찾고자 하는 날짜를 기준으로 등록한 뭄무게와 목표 몸무게, 처음에 입력한 몸무게를 불러온다.</p>",
    "name": "getWeightDate",
    "group": "weight",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "first_kg",
            "description": "<p>사용자가 처음 입력한 몸무게</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "goal_weight",
            "description": "<p>사용자가 입력한 목표 몸무게</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "date_weight",
            "description": "<p>특정 날짜에 입력한 몸무게</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"member_id\": 1,\n  \"date\": \"20171004\",\n  \"first_kg\": 90,\n  \"goal_weight\": 39,\n  \"date_weight\": 21\n}",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/router/weight.js",
    "groupTitle": ""
  }
] });

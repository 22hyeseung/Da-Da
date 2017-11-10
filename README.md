
---
#### Index
[1. About Service](https://github.com/huusz/Da-Da#about-service)

[2. About Tech](https://github.com/huusz/Da-Da#about-tech)

[3. About Team](https://github.com/huusz/Da-Da#about-team)

[4. About Project](https://github.com/huusz/Da-Da#about-project)

[5. All Links (Summary)](https://github.com/huusz/Da-Da#all-links)

---

# DA, DA
<기록과 통계>를 통해 식습관을 모니터링 할 수 있고,
칼로리 카운트를 통해 식단을 관리할 수 있는 회원제 <다이어트 다이어리> 서비스

<br>

# About Service

## 목표

바른 다이어트를 위해서는 건강하고 균형잡힌 식습관을 유지할 필요가 있다.
- 사용자가 복잡하고 번거로운 칼로리/영양성분 계산을 하지 않아도 되게 하자.
- 사용자가 식단을 기록하고, 통계를 확인하면서 본인의 식습관을 차차 교정하도록 유도하자.

***사용자가 건강한 식습관을 유지할 수 있도록 식단 관리를 서포트해주는 편리한 서비스를 제공하자.***

<br>

## 기능 요약

### 1. 기록(주요 기능)

- **식단 기록**
  - 텍스트 검색과 사진 검색을 지원한다.
  - 검색을 통해 아침/점심/저녁/간식 식사 정보를 기록할 수 있다.

- **사진 기록**
  - 사진을 업로드할 수 있다.
  - 업로드한 사진은 앨범을 통해 보관할 수 있다.
  - 앨범에 저장된 사진은 이후 다른 날 식단 다이어리에서도 첨부하거나 사진 검색에 활용할 수 있다.

- **일기 기록**
  - 당일 장문의 일기와 짧은 반성 일기를 남길 수 있다.
  - 반성 일기는 다음 날 로그인시 홈 로딩화면 위에 표시된다.

- **체중 기록**
  - 시작/목표/현재 체중을 사용자가 직접 입력하거나 삭제 할 수 있다.
  - 시작 체중으로부터 현재 체중까지 변화 양상을 확인할 수 있는 그래프를 제공한다.

<br>

### 2. 리포트

- 주 별 통계 (차트)
  - 사용자의 식사 패턴(식사 시간대, 3대 영양소 비율)에 대한 막대그래프와 요약 정보를 제공한다.

<br>

### 3. 레시피 검색

- **검색**
  - 텍스트 검색을 지원한다.

- **레시피 정보**
  - 원하는 레시피 정보를 조회할 수 있다.
  - 레시피 화면을 통해 요리 진행 사항을 체크할 수 있다. (체크박스 제공)
  - 레시피 재료의 양 정보를 기준 인분 수  입력을 통해 조정된 값으로 제공받을 수 있다.
  - 레시피로 조리한 음식을 식단 통계에 합산하여 기록할 수 있다.

<br>

### 4. 로그인
- 로그인은 소셜로그인만 지원한다.
- 네이버, 카카오, 페이스북, 인스타그램 로그인을 지원한다.

<br>

### 5. SNS공유
- 식단 및 통계를 미리 디자인된 정적 페이지로 각 소셜에 공유할 수 있다.

<br>

# About Tech

## 기술 스택 & 툴

### Prototype & Design
- Google spread sheet
- Sketch
- Invision

<br>

### Frontend

**1) UI**
- React
- React-Router
- Redux
- CSS

<br>

**1.1) Framework**

- [Semantic-ui-react](https://react.semantic-ui.com/) (CSS Framework)
- [Draft.js](https://draftjs.org/) (Text editor Framework)
- [recharts.js](http://recharts.org/#/en-US) (Chart Framework)

<br>

**2) Network**
- fetch API

<br>

**3) Package Manager**
- yarn

<br>

**4) Convention & Task Manager**
- editor config
- prettier (formatter)
- eslint
- webpack

<br>

### Backend

**1) Server**
- Node.js
- Express
- AWS
  - EC2
  - S3 (Image Storage)
  - Caddy
- Redis (In-memory data structure store)
  - KUE

<br>

**2) Database**
- MYSQL
- KNEX (node-mysql connector)

<br>

**3) Open API**

- [Google Vision API](https://cloud.google.com/vision/)


<br>

**4) Package Manager**
- npm

<br>

**5) Convention**
- editor config
- eslint

<br>

**6) Error Reporting Manager**
- BugSnag

<br>

---
## Release

### 환경
  - AWS EC2 (Ubuntu v16.04)
  - AWS RDS (MySql v5.7.17)
  - AWS S3
  - [create-react-app](https://github.com/facebookincubator/create-react-app) 환경 빌드
  - 외부 도메인 대행 업체

### 메인서버 :: AWS EC2
  - node.js(v8.5) + npm(v5.3) + nvm
  - git : github 통한 코드 배포
  - pm2 : node.js 프로세스 관리
  - Caddy : WEB Server (Proxy로 활용)
  - python(v2.7.11) : 이미지 변환 처리 ([sharp](https://www.npmjs.com/package/sharp) 활용)
  - redis : 이미지 변환 큐 관리 ([Kue](https://www.npmjs.com/package/kue) 활용)

### 프론트엔드 배포
  - create-react-app의 `build` script로 정적 웹사이트 배포

### 웹서버 정책 :: [Caddy](https://caddyserver.com/)
  - dada.downmix.net : 프론트 웹 페이지 >> 웹 서버
  - api.downmix.net : 배포용 API 서버 >> 내부 포트 프록시
  - devapi.downmix.net : 개발용 API 서버 >> 내부 포트 프록시

### 데이터베이스 구축 :: MySql
  - AWS RDS 연동
  - [knex.js](https://www.npmjs.com/package/knex) 를 통한 DB 마이그레이션 진행
  - knex 마이그레이션 경로 : `/backend/migrations`

<br>

---

# About Team

## Member

### Frontend

 - [김나영](https://github.com/feel5ny)
 - [이혜승](https://github.com/huusz)

### Backend

- [김세준](https://github.com/KimSejune)
- [임옥택](https://github.com/downmix)
- [조수현](https://github.com/suhyeon)

<br>

## Collaboration
- Git: 소스 코드 버전 관리
- Zeplin: 디자인 시안 공유
- 매주 월/화/목 HangOut 온라인 회의: 데일리 스크럼
- 매주 수/금 오프라인 정기 회의: 이슈 공유 및 논의, 코드 리뷰
- [Scrum Board 작성](https://docs.google.com/spreadsheets/d/e/2PACX-1vR57PrRMvXjFa1sHCtLX-ifjMt8VEoiPuzKa0ErH-h787p4MqxssYJKt7QaYCReGVIaJEu_HgpMBGRC/pubhtml)(Google Spread Sheet): 매일 진행 사항 공유 & 일정 관리
- [Github](https://github.com/huusz/Da-Da) & [Github Projects](https://github.com/huusz/Da-Da/projects): 작업 분담(기능/페이지별) 및 이슈 관리
- [API Document](https://api.downmix.net/)

<br>

---

# About Project

## Workflow

#### 1) 2017-09-27 ~ 2017-09-30 (3 days)
- 기획, 디자인
  - [와이어프레임](https://docs.google.com/presentation/d/e/2PACX-1vRgjDbUHXEy2dDrOFUiSDvOQ2hTvXXMSGbRQw3Bakq3Xh7Jcw5sVTkolmp-XKsWISoXxpxI6EjV6twg/pub?start=false&loop=false&delayms=3000) 제작
  - [프로토타입](https://invis.io/2GDPBHAT5) 제작
  - [디자인 시안](https://invis.io/DCE154SUH) 제작

<br>

#### 2) 2017-10-01 ~ 2017-10-09 (8 days)
  - 프론트엔드
    - 정적 페이지 개발(퍼블리싱)
    - json-server 이용한 가상 데이터 통신
  - 백엔드
    - DB 개발
    - API 개발 및 문서화 작업

<br>

#### 3) 2017-10-10 ~ 2017-10-19 (9 days)
  - 프론트엔드
    - router 개발
    - redux 연동
    - 서버 api 연동, ajax 통신 개발 (json-server 삭제)
    - 페이지 별 핵심 기능 개발
  - 백엔드
    - API 개발 및 문서화 작업
    - 소셜 Login API 개발

    <br>

#### 4) 2017-10-20 ~ 2017-10-27 (7days)
  - 프론트엔드
    - 페이지 별 부가 기능 개발
    - 리팩토링
  - 백엔드
    - Google Vision API 개발
    - 1차 배포
  - 공통
    - 테스팅 및 버그 픽싱
    - [시연 동영상 제작](https://youtu.be/DWtnFShrpKM)

    <br>

#### 5) 2017-10-28 ~ 2017-11-3 (6days)
  - 프론트엔드
    - 부가 기능 추가 개발
    - 리팩토링
  - 백엔드
    - 리팩토링
    - [최종 배포](https://dada.downmix.net)
  - 공통
    - 테스팅 및 버그 픽싱

<br>

## All Links

1. [Scrum Board](https://docs.google.com/spreadsheets/d/e/2PACX-1vR57PrRMvXjFa1sHCtLX-ifjMt8VEoiPuzKa0ErH-h787p4MqxssYJKt7QaYCReGVIaJEu_HgpMBGRC/pubhtml)

2. [와이어프레임](https://docs.google.com/presentation/d/e/2PACX-1vRgjDbUHXEy2dDrOFUiSDvOQ2hTvXXMSGbRQw3Bakq3Xh7Jcw5sVTkolmp-XKsWISoXxpxI6EjV6twg/pub?start=false&loop=false&delayms=3000)

3. [프로토타입](https://invis.io/2GDPBHAT5)

4. [디자인 시안](https://invis.io/DCE154SUH)

5. [Github](https://github.com/huusz/Da-Da)

6. [Github Projects](https://github.com/huusz/Da-Da/projects)

7. [API Document](https://api.downmix.net/)

8. [1차 배포 시연 동영상](https://youtu.be/DWtnFShrpKM)

9. [최종 배포 홈페이지](https://dada.downmix.net)


> 현재 SNS 로그인 공개 승인 절차 문제로 **카카오 로그인**만 가능합니다.

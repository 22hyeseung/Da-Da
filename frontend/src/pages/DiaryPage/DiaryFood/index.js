import React from 'react'
import {
  Segment,
  Header,
} from 'semantic-ui-react'
import DiaryFoodAlbum from './DiaryFoodAlbum'
import DiaryFoodMeal from './DiaryFoodMeal'
import foodIconDefault from '../../../static/img/diary-food_default.svg'
import * as Style from './StyledDiaryFood'
import { connect } from 'react-redux'
import { fetchFoodLogsFromDB } from '../../../actions/diaryFood'

class DiaryFood extends React.Component {
  componentWillMount() {
    this.props.fetchFoodLogs()
  }

  render() {
    return (
      <Segment style={Style.foodBox}>
        {/* title 시작 */}
        <Header style={Style.header}>
          <Header.Subheader
            style={Style.subHeader}
          >
            FOOD DIARY
          </Header.Subheader>
          오늘의 식단 다이어리
          <img
            src={foodIconDefault}
            style={{
              height: '27px',
              marginBottom: '9px',
            }}
            alt="의미없는 식단 다이어리 표시 아이콘입니다."
          />
        </Header>
        {/* title 끝 */}
        {console.log(this.props.foodresult)}

        <DiaryFoodMeal type="아침" />
        <DiaryFoodMeal type="점심" />
        <DiaryFoodMeal type="저녁" />
        <DiaryFoodMeal type="간식" />
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    foodresult: state.foodLogs.foodresult,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFoodLogs: () =>
      dispatch(fetchFoodLogsFromDB()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryFood)

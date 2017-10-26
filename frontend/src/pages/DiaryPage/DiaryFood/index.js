import React from 'react'
import {
  Segment,
  Label,
  Header,
} from 'semantic-ui-react'
import * as Style from './StyledDiaryFood'
import { iconSet } from '../StyledDiaryCommon'

// 컴포넌트
import DiarySubHeader from '../DiarySubHeader'
import DiaryFoodAdd from './DiaryFoodAdd'
import DiaryFoodAlbum from './DiaryFoodAlbum'
import DiaryFoodMeal from './DiaryFoodMeal'
import ComponentLoader from '../../../components/Loader/ComponentLoader'

import { connect } from 'react-redux'
import { getFoodLogsFromDB } from '../../../actions/diaryFood'
// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../helper/date'

class DiaryFood extends React.Component {
  state = {
    loading: false,
    date: dateStringForApiQuery(
      this.props.dateState,
    ),
  }

  componentWillMount() {
    this.props.fetchFoodLogs(this.state.date)
    this.setState({ loading: true }, () =>
      this.fetchData(),
    )
  }

  // Loader 일정시간추가
  fetchData = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000)
  }

  render() {
    // 끼니별 배열
    const breackfast = []
    const lunch = []
    const dinner = []
    const desert = []

    if (this.state.loading) {
      return <ComponentLoader />
    }

    return (
      <Segment style={Style.foodBox}>
        <DiarySubHeader
          tabNameEN="FOOD"
          tabNameKR="식단 다이어리"
          icon="foodIcon"
        />

        {/* 받은 데이터를 끼니별 배열에 넣어준다 */}
        {this.props.foodresult.map(
          (result, i) => {
            if (
              result.eat_log_meal_tag === '아침'
            ) {
              {
                breackfast.push(result)
              }
            }
            if (
              result.eat_log_meal_tag === '점심'
            ) {
              {
                lunch.push(result)
              }
            }
            if (
              result.eat_log_meal_tag === '저녁'
            ) {
              {
                dinner.push(result)
              }
            }
            if (
              result.eat_log_meal_tag === '간식'
            ) {
              {
                desert.push(result)
              }
            }
          },
        )}

        <DiaryFoodMeal
          type="아침"
          foodresult={breackfast}
        />
        <DiaryFoodMeal
          type="점심"
          foodresult={lunch}
        />
        <DiaryFoodMeal
          type="저녁"
          foodresult={dinner}
        />
        <DiaryFoodMeal
          type="간식"
          foodresult={desert}
        />
        <DiaryFoodAlbum />
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    foodresult: state.foodLogs.foodresult,
    dateState: state.today.date,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFoodLogs: date =>
      dispatch(getFoodLogsFromDB(date)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryFood)

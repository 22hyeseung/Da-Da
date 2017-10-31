import React from 'react'
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as Style from './StyledDiaryFood'

// 컴포넌트
import DiarySubHeader from '../DiarySubHeader'
import FoodAlbum from './FoodAlbum'
import FoodMeal from './FoodMeal'
import ComponentLoader from '../../../components/Loader/ComponentLoader'

// 리덕스 액션
import { getFoodLogsFromDB } from '../../../actions/diaryFood'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../helper/date'

class FoodIndex extends React.Component {
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
    const { foodresult } = this.props

    // 끼니별 배열
    const breakfast = []
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
        {foodresult.map((result, i) => {
          if (result.eat_log_meal_tag === '아침') {
            breakfast.push(result)
          }
          if (result.eat_log_meal_tag === '점심') {
            lunch.push(result)
          }
          if (result.eat_log_meal_tag === '저녁') {
            dinner.push(result)
          }
          if (result.eat_log_meal_tag === '간식') {
            desert.push(result)
          }
        })}

        <FoodMeal
          type="아침"
          foodresult={breakfast}
        />
        <FoodMeal type="점심" foodresult={lunch} />
        <FoodMeal type="저녁" foodresult={dinner} />
        <FoodMeal type="간식" foodresult={desert} />
        <FoodAlbum />
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
)(FoodIndex)

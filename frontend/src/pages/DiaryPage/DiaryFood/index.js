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
import { connect } from 'react-redux'
import { fetchFoodLogsFromDB } from '../../../actions/diaryFood'
import ComponentLoader from '../../../components/Loader/ComponentLoader'

class DiaryFood extends React.Component {
  state = {
    loading: false,
  }
  componentWillMount() {
    this.props.fetchFoodLogs()
    this.setState({ loading: true }, () =>
      this.fetchData(),
    )
  }
  fetchData = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000)
  }
  render() {
    const breackfast = []
    const lunch = []
    const dinner = []
    const desert = []

    if (this.state.loading) {
      return <ComponentLoader />
    }
    return (
      <Segment style={Style.foodBox}>
        {/* title 시작 */}
        <DiarySubHeader
          tabNameEN="FOOD"
          tabNameKR="식단 다이어리"
          icon="foodIcon"
        />
        {/* title 끝 */}
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

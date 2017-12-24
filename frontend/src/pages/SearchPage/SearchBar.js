import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// 스타일링
import { Grid, Header, Input, Icon } from 'semantic-ui-react'
import * as Style from './StyledSearch'
import './Search.css'

// API 통신용 date형식 리턴하는 함수: YYYYMMDD
import { dateStringForApiQuery } from '../../helper/date'

// 리덕스 액션
import {
  getFoodSummaryFromDB, // 하루 단위 food summary
} from '../../actions/diarySummary'
import { getGoalKcal } from '../../actions/diaryKcal' // 하루 단위 목표 칼로리 get

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
    }
  }

  componentWillMount() {
    const { getFoodSummaryFromDB, getGoalKcal, dateState } = this.props

    const date = dateStringForApiQuery(dateState)
    getFoodSummaryFromDB(date)
    getGoalKcal(date)
  }

  handleSearch = (e) => {
    if (e.keyCode === 13) {
      this.props.history.push('/search/' + this.state.searchText)
    }
  }

  handleSearchTextChange = (e) => {
    this.setState({ searchText: e.target.value })
  }

  render() {
    const { defaultGoalCalorie, eatKcal, burnKcal, kcalGoal } = this.props

    const goalCalorie = kcalGoal ? kcalGoal : defaultGoalCalorie

    const restCalorie = goalCalorie - eatKcal + burnKcal

    return (
      <div>
        <Grid>
          <Grid.Column width={3} />
          <Grid.Column width={10} style={Style.centerGrid}>
            <Grid.Row style={Style.headerGrid}>
              <Header
                style={Style.h2}
                as="h2"
                content="어떤 요리를 원하세요?"
                inverted
              />
              <Header
                style={Style.h1}
                as="h1"
                content="레시피를 검색해보세요."
                inverted
              />
            </Grid.Row>
            <Input
              className={this.props.className}
              icon={
                <Icon
                  name="search"
                  link
                  onClick={() =>
                    this.props.history.push('/search/' + this.state.searchText)
                  }
                />
              }
              value={this.state.searchText}
              onKeyDown={this.handleSearch}
              onChange={this.handleSearchTextChange}
            />
            <Header
              style={Style.h5}
              as="h5"
              content={`하루 권장량 기준, 현재 소비 가능한 칼로리는 ${restCalorie}kcal입니다.`}
              inverted
            />
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dateState: state.today.date,
    eatKcal: state.diarySummary.eatKcal,
    burnKcal: state.diarySummary.burnKcal,
    kcalGoal: state.goalKcal.kcal,
    defaultGoalCalorie: state.auth.userInfo.userDefaultKcal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getFoodSummaryFromDB: (date) => dispatch(getFoodSummaryFromDB(date)),
    getGoalKcal: (date) => dispatch(getGoalKcal(date)),
  }
}
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBar),
)

import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일링
import {
  Segment,
  Modal,
  Input,
  Button,
} from 'semantic-ui-react'
import * as Style from './StyledFitness'
import { submitBtn } from '../StyledDiary'

// 컴포넌트
import SubHeader from '../SubHeader'
import FitnessList from './FitnessList'
import FitnessAdd from './FitnessAdd'
import ComponentLoader from '../../../components/Loader/ComponentLoader'

//리덕스 액션
import {
  getFitnessLogsFromDB,
  deleteFitnessOfDB,
  updateFitnessOfDB,
} from '../../../actions/diaryFitness'
import { updateFitnessSummary } from '../../../actions/diarySummary'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../helper/date'

class DiaryFitness extends Component {
  state = {
    open: false,
    loading: false,
    updateTimeVal: null,
    burn_id: null,
    burn_kcal: null,
    burn_time: null,
    unitKcal: null,
    exercise_name: null,
    disabled: false,
    date: dateStringForApiQuery(
      this.props.dateState,
    ),
  }

  // 기존에 기록된 로그를 불러온다.
  componentWillMount() {
    this.props.fetchFitnessLogs(this.state.date)
    this.setState({ loading: true }, () =>
      this.fetchData(),
    )
  }

  // 인풋 창이 열리면 인풋에 포커싱
  componentDidMount() {
    if (this.state.open) {
      this.textInput.focus()
    }
  }

  // Loader 일정시간추가
  fetchData = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000)
  }

  // 수정 value 받는 핸들러
  handleUpdate = e => {
    this.setState({
      updateTimeVal: e.target.value,
    })
    // 양 입력 안했을 경우 버튼 비활성화
    if (e.target.value > 0)
      this.setState({
        disabled: false,
      })
  }

  // post보낼 json 만드는 함수
  createPayloadAndUpdateToDB = () => {
    const {
      updateTimeVal,
      unitKcal,
      burn_id,
    } = this.state

    const { updateFitnessOfDB } = this.props

    // 수정값이 없을 경우 반환
    if (!updateTimeVal || updateTimeVal < 1) {
      return this.setState({
        disabled: true,
      })
    }

    // 수정된 시간에 따라 칼로리 계산
    const finalKcal = unitKcal * updateTimeVal

    const requestBody = {
      burn_minute: updateTimeVal,
      kcal: finalKcal,
    }

    // 입력 받은 값으로 업데이트
    updateFitnessOfDB(requestBody, burn_id).then(
      data => {
        this.props.updateFitnessSummary(
          data, // 수정한 내용이 담긴 전체 데이터
          this.state.burn_time, // 기존에 입력했던 시간
        )
        this.close() // 성공 시 모달창 close
      },
      error => {
        console.log(error)
      },
    )
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.createPayloadAndUpdateToDB()
    }
  }

  // Modal 보여주는 함수
  show = (
    dimmer,
    id,
    kcal,
    name,
    time,
    unitKcal,
  ) => () => {
    this.setState({
      dimmer,
      open: true,
      burn_id: id,
      burn_kcal: kcal,
      exercise_name: name,
      burn_time: time,
      unitKcal: unitKcal,
    })
  }

  // Modal 닫는 함수
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state

    // 일정시간 로딩
    if (this.state.loading) {
      return <ComponentLoader />
    }

    return (
      <Segment style={Style.container}>
        {this.finalKcal}
        <SubHeader
          tabNameEN="FITNESS"
          tabNameKR="운동 다이어리"
          icon="fitnessIcon"
        />
        {this.props.fitnessResult ===
        undefined ? (
          ''
        ) : (
          <div>
            {this.props.fitnessResult.map(
              (fitness, i) => (
                <FitnessList
                  name={fitness.exercise_name}
                  time={fitness.burn_minute}
                  kcal={fitness.burn_kcal}
                  unitKcal={
                    fitness.exercise_burn_kcal
                  }
                  id={fitness.burn_id}
                  deleteFitnessOfDB={
                    this.props.deleteFitnessOfDB
                  }
                  show={this.show}
                  key={i}
                />
              ),
            )}
          </div>
        )}
        {/* 모달 시작 */}
        <Modal
          dimmer={dimmer}
          open={open}
          onClose={this.close}
          size="mini"
        >
          <Modal.Content
            style={{
              padding: '21px 14px 0px 14px',
            }}
          >
            <Modal.Header style={Style.modalName}>
              {this.state.exercise_name}
            </Modal.Header>
            <Modal.Description
              style={Style.modalTime}
            >
              <span style={Style.modalTimeInfo}>
                기존 입력했던 시간은 {this.state.burn_time}분입니다.
              </span>
              <Input
                ref={input =>
                  (this.textInput = input)}
                type="number"
                style={{
                  margin: '0px 0px 28px',
                }}
                placeholder="수정할 시간을 적으세요"
                onChange={e =>
                  this.handleUpdate(e)}
                onKeyDown={this.handleKeyPress}
              />
            </Modal.Description>
          </Modal.Content>
          <div
            style={{
              display: 'flex',
              padding: '0px 14px 14px',
            }}
          >
            <Button
              fluid
              content="취소"
              onClick={this.close}
              basic
            />
            <Button
              fluid
              style={{
                ...submitBtn,
                padding: '10px',
              }}
              onClick={
                this.createPayloadAndUpdateToDB
              }
              onKeyDown={this.handleKeyPress}
            >
              수정하기
            </Button>
          </div>
        </Modal>
        {/* 모달 끝 */}
        <FitnessAdd />
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    fitnessResult: state.fitness.fitnessResult,
    dateState: state.today.date,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFitnessLogs: date =>
      dispatch(getFitnessLogsFromDB(date)),
    deleteFitnessOfDB: (id, burnKcal) =>
      dispatch(deleteFitnessOfDB(id, burnKcal)),
    updateFitnessOfDB: (requestBody, id) =>
      dispatch(
        updateFitnessOfDB(requestBody, id),
      ),
    updateFitnessSummary: (
      modifiedData,
      beforeMinute,
    ) =>
      dispatch(
        updateFitnessSummary(
          modifiedData,
          beforeMinute,
        ),
      ),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryFitness)

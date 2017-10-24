import React, { Component } from 'react'
import { connect } from 'react-redux'

// 스타일링
import {
  Segment,
  Modal,
  Input,
  Button,
} from 'semantic-ui-react'
import { container } from './StyledFitness'
import * as Style from './StyledFitness'

// 컴포넌트
import DiarySubHeader from '../DiarySubHeader'
import DiaryFitnessList from './DiaryFitnessList'
import DiaryFitnessAdd from './DiaryFitnessAdd'
import ComponentLoader from '../../../components/Loader/ComponentLoader'

//리덕스 액션
import {
  getFitnessLogsFromDB,
  deleteFitnessOfDB,
  updateFitnessOfDB,
} from '../../../actions/diaryFitness'

// helper: 오늘 날짜 API Query형식
import { dateStringForApiQuery } from '../../../helper/date'

class DiaryFitness extends Component {
  state = {
    loading: false,
    updateTimeVal: null,
    burn_id: null,
    burn_kcal: null,
    burn_time: null,
    exercise_name: null,
    disabled: false,
    date: dateStringForApiQuery(
      this.props.dateState,
    ),
  }

  componentWillMount() {
    this.props.fetchFitnessLogs(this.state.date)
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

  // 삭제 actionDispatch
  deleteFitnessOfDB = id => {
    this.props.deleteFitnessOfDB(id)
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
    // 수정값이 없을 경우 반환
    if (
      !this.state.updateTimeVal ||
      this.state.updateTimeVal < 1
    ) {
      return this.setState({
        disabled: true,
      })
    }

    // 수정된 시간에 따라 칼로리 계산
    const finalKcal =
      this.state.burn_kcal *
      this.state.updateTimeVal

    this.props.updateFitnessOfDB(
      {
        burn_minute: this.state.updateTimeVal * 1,
        kcal: finalKcal,
      },
      this.state.burn_id,
    )
    this.close()
  }

  // Modal 보여주는 함수
  show = (dimmer, id, kcal, name, time) => () => {
    this.setState({
      dimmer,
      open: true,
      burn_id: id,
      burn_kcal: kcal,
      exercise_name: name,
      burn_time: time,
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
      <Segment style={container}>
        <DiarySubHeader
          tabNameEN="FITNESS"
          tabNameKR="운동 다이어리"
          icon="fitnessIcon"
        />
        {this.props.fitnessResult.map(
          (fitness, i) => (
            <DiaryFitnessList
              name={fitness.exercise_name}
              time={fitness.burn_minute}
              kcal={fitness.burn_kcal}
              id={fitness.burn_id}
              deleteFitnessOfDB={
                this.deleteFitnessOfDB
              }
              show={this.show}
              key={i}
            />
          ),
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
                // ...submitBtn,
                padding: '10px',
              }}
              onClick={
                this.createPayloadAndUpdateToDB
              }
            >
              수정하기
            </Button>
          </div>
        </Modal>
        {/* 모달 끝 */}
        <DiaryFitnessAdd />
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
    deleteFitnessOfDB: id =>
      dispatch(deleteFitnessOfDB(id)),
    updateFitnessOfDB: (payload, id) =>
      dispatch(updateFitnessOfDB(payload, id)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryFitness)

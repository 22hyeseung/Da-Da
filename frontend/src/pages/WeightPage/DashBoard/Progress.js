import React from 'react'
import { connect } from 'react-redux'
// 스타일링
import './Progress.css'
import '../weight.css'
import { icon } from '../StyledWeight'

const Progress = props => {
  // 공식 = {(시작체중-현재체중)/(시작체중 - 목표체중 )}*100
  let flagPosition = ''
  props.weightListItem.length === 0
    ? // 인터넷 느린 경우 등, get 데이터가 안 왔을때
      (flagPosition = 0)
    : (flagPosition =
        (props.startWeight -
          props.currentWeight) /
        (props.startWeight - props.goalWeight) *
        100)

  return (
    <div className="weight-progress">
      {/* 왼쪽 시작체중 그리드 시작 */}
      <ul className="weight-progress-bar-start">
        <li>
          <span className="weight-progress-start">
            {props.startWeight}
          </span>
          <span className="weight-progress-unit-kg">
            kg
          </span>
        </li>
        <li style={{ padding: '10px' }}>
          <img
            src={icon.startPoint}
            alt="시작체중부분을 표시한 이미지입니다."
          />
        </li>
        <li className="weight-progress-label">
          시작체중
        </li>
      </ul>
      {/* 왼쪽 시작체중 그리드 끝*/}

      {/* 중간 그리드 시작 (bar+flag) */}
      <ul className="weight-progress-bar-start weight-progress-bar">
        <li
          style={{
            padding: '10px',
            lineHeight: '0px',
          }}
        >
          <div className="weight-progress-bar-rec" />
          <div className="weight-progress-bar-center" />
        </li>
      </ul>
      {/* 중간 그리드 끝 (bar+flag) */}

      {/* 오른쪽 목표체중 그리드 시작 */}
      <ul className="weight-progress-bar-flag">
        <li style={{ paddingBottom: '8px' }}>
          <img
            src={icon.weightFlag}
            alt="목표체중과 시작체중 사이의 현재체중을 표시하는 플래그 아이콘입니다."
            style={
              props.currentWeight >
                props.startWeight ||
              props.currentWeight <
                props.goalWeight
                ? {
                    display: 'none',
                  }
                : {
                    left: `${flagPosition}%`,
                    position: 'relative',
                  }
            }
          />
        </li>
        <li style={{ padding: '10px' }} />
        <li style={{ padding: '10px' }} />
      </ul>
      <ul className="weight-progress-bar-end">
        <li>
          <span className="weight-progress-end">
            {props.goalWeight}
          </span>
          <span className="weight-progress-unit-kg">
            kg
          </span>
        </li>
        <li style={{ padding: '10px' }}>
          <img
            src={icon.endPoint}
            alt="목표체중부분을 표시한 이미지입니다."
          />
        </li>
        <li className="weight-progress-label">
          목표체중
        </li>
      </ul>
      {/* 오른쪽 목표체중 그리드 끝 */}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    weightListItem:
      state.weightList.weightListItem,
    currentWeight: state.weightList.currentWeight,
    startWeight: state.weightAll.startWeight,
    goalWeight: state.weightAll.goalWeight,
  }
}

export default connect(mapStateToProps, null)(
  Progress,
)

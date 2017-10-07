import React from 'react'
import './WeightProgress.css'
import progressIndicator from '../../static/img/weight-ProgressIndicator.svg'
import weightFlag from '../../static/img/weight-flag.svg'

const WeightProgress = () => {
  return (
    <div className="weight-progress">
      <ul className="weight-progress-bar-start">
        <li style={{ paddingBottom: '20px' }}>
          <span className="weight-progress-start">
            60
          </span>
          <span className="weight-progress-unit-kg">
            kg
          </span>
        </li>
        <li style={{ padding: '10px' }} />
        <li className="weight-progress-label">
          시작체중
        </li>
      </ul>
      <ul className="weight-progress-bar-start weight-progress-bar">
        <li
          style={{
            padding: '10px',
            lineHeight: '0px',
          }}
        >
          <img
            src={progressIndicator}
            alt="선 모양 이미지이며, 처음 포인트는 시작체중, 마지막 포인트는 목표체중입니다."
          />
        </li>
      </ul>

      <ul
        className="weight-progress-bar-flag"
        style={{
          left: '19.8rem',
        }}
      >
        {/* 추후 데이터 연동시, left에 수치값 적용
          left = (시작체중-목표체중)/(시작체중-현재체중)*33  */}
        <li style={{ paddingBottom: '8px' }}>
          <img
            src={weightFlag}
            alt="목표체중과 시작체중 사이의 현재체중을 표시하는 플래그 아이콘입니다."
          />
        </li>
        <li style={{ padding: '10px' }} />
        <li style={{ padding: '10px' }} />
      </ul>
      <ul className="weight-progress-bar-end">
        <li style={{ paddingBottom: '20px' }}>
          <span className="weight-progress-end">
            50
          </span>
          <span className="weight-progress-unit-kg">
            kg
          </span>
        </li>
        <li style={{ padding: '10px' }} />
        <li className="weight-progress-lable">
          목표체중
        </li>
      </ul>
    </div>
  )
}

export default WeightProgress

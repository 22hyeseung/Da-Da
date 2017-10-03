import React, { Component } from 'react'
import './WeightProgress.css'
import progressIndicator from '../../static/img/weight-ProgressIndicator.svg'
import weightFlag from '../../static/img/weight-flag.svg'

class WeightProgress extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            listStyle: 'none',
            alignItems: 'center',
          }}
        >
          <li style={{ paddingBottom: '20px' }}>
            <span className="weight-progress-start">
              60
            </span>
            <span className="weight-progress-unit-kg">
              kg
            </span>
          </li>
          <li style={{ padding: '10px' }} />
          <li className="weight-progress-lable">
            시작체중
          </li>
        </ul>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            listStyle: 'none',
            alignItems: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <li
            style={{
              padding: '10px',
              lineHeight: '0px',
            }}
          >
            <img src={progressIndicator} />
          </li>
        </ul>

        <ul
          style={{
            display: 'flex',
            position: 'absolute',
            flexDirection: 'column',
            listStyle: 'none',
            margin: '0px 200px',
            left: '19.8rem',
          }}
        >
          {/* 추후 데이터 연동시, left에 수치값 적용
          left = (시작체중-목표체중)/(시작체중-현재체중)*33  */}
          <li style={{ paddingBottom: '8px' }}>
            <img src={weightFlag} />
          </li>
          <li style={{ padding: '10px' }} />
          <li style={{ padding: '10px' }} />
        </ul>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            listStyle: 'none',
            alignItems: 'center',
          }}
        >
          <li style={{ paddingBottom: '20px' }}>
            <span className="weight-progress-end">
              60
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
}

export default WeightProgress

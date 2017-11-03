import React, { Component } from 'react'
import './Root.css'

class Responsive extends Component {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          display: 'flex',
          flexDirection: 'column',
          fontSize: '21px',
          fontWeight: '200',
          color: '#54698D',
          lineHeight: '28px',
          transform: 'translateY(-50%)',
        }}
      >
        <span>조금 더</span>
        <span>넓은 화면에서</span>
        <div>
          <span
            style={{
              fontFamily: 'montserrat-bold',
            }}
          >
            DA, DA
          </span>
          <span>를 만나보세요 </span>
        </div>
        <span
          style={{
            fontSize: '12px',
            marginTop: '7px',
            color: '#16325C',
          }}
        >
          DA,DA는 데스크탑 환경에 최적화 되어있습니다.
        </span>
      </div>
    )
  }
}

export default Responsive

import React from 'react'
import './Share.css'
import graph from '../../static/img/share-graph.svg'
const ShareTitle = () => {
  return (
    <div className="share-header">
      <div className="share-header-title">
        <span>홍길동님의</span>
        <span>2017년 11월 11일 월요일,</span>
        <span>다이어트 다이어리입니다.</span>
      </div>
      <div className="share-header-summary">
        <div className="share-summary-plusKcal">
          <span className="share-summary-plusKcal-label">
            섭취 칼로리
          </span>
          <span className="share-summary-plusKcal-num">
            +1000
          </span>
        </div>
        <div className="share-summary-minusKcal">
          <span className="share-summary-minusKcal-label">
            <span
              style={{ paddingBottom: '4px' }}
            >
              운동으로
            </span>
            <span>소모한 칼로리</span>
          </span>
          <span className="share-summary-minusKcal-num">
            +1000
          </span>
        </div>
        <div className="share-summary-meal">
          <span>끼니별</span>
          <span>칼로리</span>
          <span>그래프</span>
          <img
            src={graph}
            alt="칼로리 그래프"
            className="share-summary-meal-graph"
          />
        </div>
        <div className="share-summary-nutritions">
          <span>영양분</span>
          <span>그래프</span>
          <img
            src={graph}
            alt="영양분 그래프"
            className="share-summary-nutritions-graph"
          />
        </div>
      </div>
    </div>
  )
}

export default ShareTitle

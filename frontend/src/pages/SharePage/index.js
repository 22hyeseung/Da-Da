import React from 'react'
import './Share.css'
import DiaryFood from './DiaryFood'
import DiaryFitness from './DiaryFitness'
import ShareTitle from './ShareTitle'

const SharePage = () => {
  return (
    <div className="share-wrapper">
      <div className="share-grid">
        <span className="share-bg-logo">
          DA, DA
        </span>
        <ShareTitle />
        <DiaryFood />
        <DiaryFitness />
      </div>
      <footer className="share-footer">
        나만의 식단다이어리를 갖고 싶다면
        <span className="share-footer-logo">
          DA,DA
        </span>
        를 찾으세요!
      </footer>
    </div>
  )
}

export default SharePage

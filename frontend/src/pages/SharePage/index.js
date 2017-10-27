import React, { Component } from 'react'
import './Share.css'
import './ShareDiary.css'
import ShareDiaryFood from './ShareDiaryFood'
import ShareDiaryFitness from './ShareDiaryFitness'
import ShareTitle from './ShareTitle'

class SharePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      params: new URLSearchParams(props.location.search),
    }
  }

  render() {
    console.log(this.state.params.get('user_id'), '<< [ this.state.params.get(user_id) ]');
    return (
      <div className="share-wrapper">
        <div className="share-grid">
          <span className="share-bg-logo">
            DA, DA
          </span>
          <ShareTitle />
          <ShareDiaryFood />
          <ShareDiaryFitness />
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
}

export default SharePage

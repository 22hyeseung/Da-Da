import React, { Component } from 'react'
import './Share.css'
import './ShareDiary.css'
import ShareDiaryFood from './ShareDiaryFood'
import ShareDiaryFitness from './ShareDiaryFitness'
import ShareTitle from './ShareTitle'
import rootApi from '../../config'

class SharePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      params: new URLSearchParams(props.location.search),
      date: null,
    }
  }

  componentDidMount() {
    const paramId = this.state.params.get('id');
    const paramDate = this.state.params.get('date')

    fetch(`${rootApi}/share?id=${paramId}&date=${paramDate}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.token}`,
      },
    })
      .then(res => res.json())
      .then(result => {
        this.setState({result, date:paramDate})
        console.log(result, '<< [ result ]');
      })
  }

  render() {
    const { result, date } = this.state

    if(typeof result === "undefined") {
      return null
    }
    console.log(result, '<< [ result ]');
    return (
      <div className="share-wrapper">
        <div className="share-grid">
          <span className="share-bg-logo">
            DA, DA
          </span>
          <ShareTitle userData={result.User} reportKcal={result.Report_kcal} burn={result.Burn} reportDate={date} />
          <ShareDiaryFood foodLogs={result.FoodLogs} reportKcal={result.Report_kcal} />
          <ShareDiaryFitness burn={result.Burn}/>
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

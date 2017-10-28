import React, { Component } from 'react'
import { Helmet } from "react-helmet";
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
    const metaDesc = `${result.User.member_provider_name}님의 다이어트 다이어리를 확인 할 수 있습니다.`
    return (
      <div className="share-wrapper">
        <Helmet>
          <link rel="image_src" href="//youdie.net/dev/dada.png" />
          <meta name="description" content="<기록과 통계>를 통해 식습관을 모니터링 할 수 있고, 칼로리 카운트를 통해 식단을 관리할 수 있는 <다이어트 다이어리> 서비스" />
          <meta property="og:title" content="다이어트 다이어리 Da, Da" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={metaDesc} />
          <meta property="og:image" content="//youdie.net/dev/dada.png" />
          <meta property="og:url" content={window.location.href} />
          <meta name="twitter:card" content={metaDesc} />
          <meta name="twitter:url" content={window.location.href} />
          <meta name="twitter:description" content={metaDesc} />
          <meta name="twitter:image" content="//youdie.net/dev/dada.png" />
        </Helmet>
        <div className="share-grid">
          <span className="share-bg-logo">
            DA, DA
          </span>
          <ShareTitle userData={result.User} reportKcal={result.Report_kcal} reportNutri={result.Report_nutri} burn={result.Burn} reportDate={date} />
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

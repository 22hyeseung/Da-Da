import React, { Component } from 'react'
import './Share.css'
import graph from '../../static/img/share-graph.svg'
import Chart from '../../components/Charts/ShareChart'

class ShareTitle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      member_provider_name: '',
    }
  }

  componentDidMount() {
    let total_kcal = 0;
    let burn_kcal = 0;
    let reportKcalChart = [];

    this.props.reportKcal.map(val => {
      total_kcal += val['sum(kcal)']
      reportKcalChart.push({
        name: val['eat_log_meal_tag'],
        value: val['sum(kcal)'],
      })
    })

    let reportNutriChart = [
      {name: '탄수화물', value: this.props.reportNutri.carb},
      {name: '단백질', value: this.props.reportNutri.protein},
      {name: '지방', value: this.props.reportNutri.fat},
    ]

    this.props.burn.map(val => {
      burn_kcal += val['burn_kcal']
    })

    //{name: "탄수화물", value: 474.6}
    this.setState({
      member_provider_name: this.props.userData.member_provider_name,
      total_kcal,
      burn_kcal,
      reportKcalChart,
      reportNutriChart,
    })
  }

  render() {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const yy = this.props.reportDate.substr(0,4);
    const mm = this.props.reportDate.substr(4,2);
    const dd = this.props.reportDate.substr(6,2);
    const shareDate = new Date(yy,mm-1,dd);

    return (
      <div className="share-header">
        <div className="share-header-title">
          <span>{this.state.member_provider_name}</span>
          <span>{yy}년 {mm}월 {dd}일 {week[shareDate.getDay()]}요일,</span>
          <span>다이어트 다이어리입니다.</span>
        </div>
        <div className="share-header-summary">
          <div className="share-summary-plusKcal">
            <span className="share-summary-plusKcal-label">
              섭취 칼로리
            </span>
            <span className="share-summary-plusKcal-num">
              +{Math.round(this.state.total_kcal)}
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
              +{Math.round(this.state.burn_kcal)}
            </span>
          </div>
          <div className="share-summary-meal">
            <span>끼니별</span>
            <span>칼로리</span>
            <span>그래프</span>
            <Chart chartData={this.state.reportKcalChart} />
          </div>
          <div className="share-summary-nutritions">
            <span>영양분</span>
            <span>그래프</span>
            <span>&nbsp;</span>
            <Chart chartData={this.state.reportNutriChart} />
          </div>
        </div>
      </div>
    )
  }
}

export default ShareTitle

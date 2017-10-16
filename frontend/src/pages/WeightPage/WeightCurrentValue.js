import React, { Component } from 'react'
import weightMeasure from '../../static/img/weight-img.svg'
import { connect } from 'react-redux'

class WeightCurrentValue extends Component {
  render() {
    return (
      <div className="weight-current-wrapper">
        <div>
          <img
            src={weightMeasure}
            alt="의미없는 체중계 눈금모양 이미지"
          />
          {console.log(this.props.token)}
          {console.log(this.props.userInfo)}
        </div>
        <div>
          <span className="weight-current">
            {this.props.weightListItem[0].weight}
          </span>
          <span className="weight-unit-kg">
            kg
          </span>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    weightListItem:
      state.weightList.weightListItem,
    userInfo: state.auth.userInfo,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, null)(
  WeightCurrentValue,
)

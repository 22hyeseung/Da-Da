import React, { Component } from 'react'
import weightMeasure from '../../static/img/weight-img.svg'
import { connect } from 'react-redux'

class WeightCurrentValue extends Component {
  render() {
    let recentWeight = 0

    this.props.weightListItem.forEach(item => {
      if (
        item.id ===
        this.props.weightListItem.length
      ) {
        recentWeight = item.weight
      }
    })
    return (
      <div className="weight-current-wrapper">
        <div>
          <img
            src={weightMeasure}
            alt="의미없는 체중계 눈금모양 이미지"
          />
        </div>
        <div>
          <span className="weight-current">
            {recentWeight}
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
  }
}

export default connect(mapStateToProps, null)(
  WeightCurrentValue,
)

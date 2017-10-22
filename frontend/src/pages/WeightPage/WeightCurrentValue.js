import React, { Component } from 'react'
import weightMeasure from '../../static/img/weight-img.svg'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'

class WeightCurrentValue extends Component {
  render() {
    let beingWeight = ''
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
            {this.props.weightListItem.length ===
            0 ? (
              // 인터넷 느린 경우 등, get 데이터가 안 왔을때
              <Icon loading name="asterisk" />
            ) : (
              this.props.weightListItem[0]
                .day_log_kg
            )}
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

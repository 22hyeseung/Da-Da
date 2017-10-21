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
            {/* 인터넷 느린경우 */}
            {this.props.weightListItem.length !==
            0 ? (
              // (beingWeight =
              // null값이 아닌 첫번째 요소 등장
              this.props.weightListItem.find(
                Item => Item.day_log_kg !== null,
              ).day_log_kg
            ) : (
              // `${beingWeight.day_log_kg}`
              <Icon loading name="asterisk" />
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

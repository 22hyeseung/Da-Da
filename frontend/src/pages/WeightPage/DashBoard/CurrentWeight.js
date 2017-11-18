import React from 'react'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import { img } from '../StyledWeight'

const CurrentWeight = props => {
  return (
    <div className="weight-current-wrapper">
      <div>
        <img
          src={img.weightMeasure}
          alt="의미없는 체중계 눈금모양 이미지"
        />
      </div>
      <div>
        <span className="weight-current">
          {props.weightListItem.length === 0 ? (
            // 인터넷 느린 경우 등, get 데이터가 안 왔을때
            <Icon loading name="asterisk" />
          ) : (
            props.weightListItem[0].day_log_kg
          )}
        </span>
        <span className="weight-unit-kg">kg</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    weightListItem:
      state.weightList.weightListItem,
  }
}

export default connect(mapStateToProps, null)(
  CurrentWeight,
)

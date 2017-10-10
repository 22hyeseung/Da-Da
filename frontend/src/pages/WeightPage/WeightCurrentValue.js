import React from 'react'
import weightMeasure from '../../static/img/weight-img.svg'

const WeightCurrentValue = () => {
  return (
    <div className="weight-current-wrapper">
      <div>
        <img
          src={weightMeasure}
          alt="의미없는 체중계 눈금모양 이미지"
        />
      </div>
      <div>
        <span className="weight-current">55</span>
        <span className="weight-unit-kg">kg</span>
      </div>
    </div>
  )
}

export default WeightCurrentValue

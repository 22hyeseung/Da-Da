import React, { Component } from 'react'
import weightFlag from '../../static/img/weight-flag.svg'
import weightMeasure from '../../static/img/weight-img.svg'

class WeightCurrentValue extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginBottom: '35px',
          height: '166px',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <img src={weightMeasure} />
        </div>
        <div>
          <span className="weight-current">
            55
          </span>
          <span className="weight-unit-kg">
            kg
          </span>
        </div>
      </div>
    )
  }
}

export default WeightCurrentValue

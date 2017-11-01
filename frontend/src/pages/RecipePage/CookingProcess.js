import React, { Component } from 'react'
import {
  checkboxStyle,
  description,
} from './StyledRecipe'
// import { Checkbox } from 'semantic-ui-react'

class CookingProcess extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ischecked: false,
    }
  }

  handleCheckboxChange = e => {
    const ischecked = this.state.ischecked
    console.log(ischecked)
    this.state = {
      ischecked: `${!ischecked}`,
    }
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: '450px',
          top: '46px',
        }}
      >
        <form style={{ width: '884px' }}>
          <label
            htmlFor="num-circle"
            style={checkboxStyle}
          >
            <input
              id="num-circle"
              className="num-circle"
              type="checkbox"
              value={1}
              style={{ display: 'none' }}
              onClick={this.handleCheckboxChange}
            />
            <span style={{ fontSize: '22px' }}>
              1
            </span>
          </label>
          <p style={description}>
            볼에 재료를 전부 넣고 섞으면서 반죽합니다. 반죽이 부풀도록 5분
            정도 기다려주세요.
          </p>

          <label style={checkboxStyle}>
            <input
              type="checkbox"
              value={1}
              style={{ display: 'none' }}
            />
            <span style={{ fontSize: '22px' }}>
              2
            </span>
          </label>
          <p style={description}>
            {' '}
            프라이팬에 버터나 오일을 두르세요. 앞 뒤 각각 3-4분정도 중불에
            구워주세요. 반죽이 흩어질 수 있으니 살살 뒤집으셔야 해요. 코티지
            치즈가 녹아 프라이팬에 눌러붙을 수 있으니 주의하세요.
          </p>

          <label style={checkboxStyle}>
            <input
              type="checkbox"
              value={1}
              style={{ display: 'none' }}
            />
            <span style={{ fontSize: '22px' }}>
              3
            </span>
          </label>
          <p style={description}>
            블루베리 또는 다른 베리류와 헤비 휘핑 크림을 함께 곁들이면 더
            맛있습니다.
          </p>
        </form>
      </div>
    )
  }
}

export default CookingProcess

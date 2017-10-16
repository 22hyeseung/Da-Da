import React, { Component } from 'react'
import reactCSS from 'reactcss'
import { TwitterPicker } from 'react-color'

class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayColorPicker: false,
      // 기본 컬러: 검정
      color: {
        r: '3',
        g: '3',
        b: '3',
      },
    }
  }

  // color picker 팝업 열기
  handleClick = () => {
    this.setState({
      displayColorPicker: !this.state
        .displayColorPicker,
    })
  }
  // color picker 팝업 닫기
  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  // color 선택 시 state 변경됨
  handleChange = color => {
    this.setState({ color: color.rgb })
  }

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgb(${this.state.color
            .r}, ${this.state.color.g}, ${this
            .state.color.b})`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    })

    return (
      <div>
        <div
          style={styles.swatch}
          onClick={this.handleClick}
        >
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div
              style={styles.cover}
              onClick={this.handleClose}
            />
            <TwitterPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

export default ColorPicker

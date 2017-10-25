import React, { Component } from 'react'
import { connect } from 'react-redux'
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
          {
            this.props.recipe.map((val, i) => {
              return (
                <div>
                  <label style={checkboxStyle}>
                    <input
                      type="checkbox"
                      value={val.step}
                      style={{ display: 'none' }}
                    />
                    <span style={{ fontSize: '22px' }}>
                      {val.step}
                    </span>
                  </label>
                  <p style={description}>{val.content}</p>
                </div>
              )
            })
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipe: state.recipe.recipe,
  }
}

export default connect(mapStateToProps, null)(CookingProcess)

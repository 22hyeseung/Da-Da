import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
// import MdAdd from 'react-icons/lib/md/add'
import * as Style from './StyledDiaryFood'
import DiaryFoodSearch from './DiaryFoodSearch'

class DiaryFoodAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSearchMode: false,
    }
  }
  toggleSearchMode = () => {
    this.setState({
      isSearchMode: !this.state.isSearchMode,
    })
  }
  render() {
    return (
      <div>
        {this.state.isSearchMode ? (
          <div>
            <DiaryFoodSearch
              type={this.props.type}
            />
          </div>
        ) : (
          <Button
            fluid
            className="diary-food-addBtn"
            style={Style.addBtn}
            onClick={this.toggleSearchMode}
          >
            {/* <MdAdd
              size={20}
              style={{ marginRight: '10px' }}
            /> */}
            음식추가
          </Button>
        )}
      </div>
    )
  }
}

export default DiaryFoodAdd

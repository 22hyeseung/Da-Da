import React, { Component } from 'react'
import { clearSelect } from '../../../actions/diaryFood'
import { Button, Icon } from 'semantic-ui-react'
import * as Style from './StyledDiaryFood'
import DiaryFoodSearch from './DiaryFoodSearch'
import DiaryFoodSearchModal from './DiaryFoodSearchModal'

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
          <div style={{ display: 'flex' }}>
            <Button
              fluid
              className="diary-food-addBtn"
              style={Style.addBtn}
              onClick={this.toggleSearchMode}
            >
              <Icon
                name="plus"
                style={{ marginRight: '10px' }}
              />
              음식추가
            </Button>
            <DiaryFoodSearchModal
              isSearchMode={this.toggleSearchMode}
            />
          </div>
        )}
      </div>
    )
  }
}

export default DiaryFoodAdd

import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import {
  addButton,
  addIcon,
} from './StyledFitness'
import DiaryFitnessSearch from './DiaryFitnessSearch'

class DiaryFitnessAdd extends React.Component {
  state = {
    isSearchMode: false,
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
          <DiaryFitnessSearch
            isSearchMode={this.toggleSearchMode}
          />
        ) : (
          <Button
            fluid
            className="diary-food-addBtn"
            style={addButton}
            onClick={this.toggleSearchMode}
          >
            <Icon name="plus" style={addIcon} />
            운동 추가하기
          </Button>
        )}
      </div>
    )
  }
}

export default DiaryFitnessAdd

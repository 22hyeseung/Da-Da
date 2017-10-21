import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import {
  addButton,
  addIcon,
} from './StyledFitness'

const DiaryFitnessAdd = () => {
  return (
    <Button fluid style={addButton}>
      <Icon name="plus" style={addIcon} />
      운동 추가하기
    </Button>
  )
}

export default DiaryFitnessAdd

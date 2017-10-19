import React from 'react'
import { Button } from 'semantic-ui-react'
// import MdAdd from 'react-icons/lib/md/add'
import {
  addButton,
  addIcon,
} from './StyledFitness'

const DiaryFitnessAdd = () => {
  return (
    <Button fluid style={addButton}>
      {/* <MdAdd size={20} style={addIcon} />
      운동 추가하기 */}
    </Button>
  )
}

export default DiaryFitnessAdd

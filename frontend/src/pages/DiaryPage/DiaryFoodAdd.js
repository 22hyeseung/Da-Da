import React from 'react'
import { Button } from 'semantic-ui-react'
import MdAdd from 'react-icons/lib/md/add'
import * as Style from './StyledDiaryFood'

const DiaryFoodAdd = () => {
  return (
    <Button
      fluid
      className="diary-food-addBtn"
      style={Style.addBtn}
    >
      <MdAdd
        size={20}
        style={{ marginRight: '10px' }}
      />
      음식추가
    </Button>
  )
}

export default DiaryFoodAdd

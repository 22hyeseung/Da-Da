import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import MdAdd from 'react-icons/lib/md/add'
import foodIconDefault from '../../static/img/diary-food_default.svg'

class DiaryFoodAdd extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Button
        fluid
        style={{
          textAlign: 'left',
          padding: '8px 14px',
          color: '#16325C',
          backgroundColor: 'white',
          border: '1px solid #D8DDE6',
          borderRadius: '4px',
          fontWeight: '200',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <MdAdd
          size={20}
          style={{ marginRight: '10px' }}
        />
        음식추가
      </Button>
    )
  }
}

export default DiaryFoodAdd

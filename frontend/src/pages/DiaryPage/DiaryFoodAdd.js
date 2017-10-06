import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import MdAdd from 'react-icons/lib/md/add'

class DiaryFoodAdd extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Button
        fluid
        className="diary-food-addBtn"
        style={{
          textAlign: 'left',
          padding: '8px 14px',
          color: '#16325C',
          backgroundColor: 'white',
          border: '1px dashed #A8B7C7',
          borderRadius: '4px',
          fontWeight: '200',
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'Spoqa Han Sans',
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

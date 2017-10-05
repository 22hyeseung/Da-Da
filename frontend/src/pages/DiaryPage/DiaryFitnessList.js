import React, { Component } from 'react'
import { Button, List } from 'semantic-ui-react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrashO from 'react-icons/lib/fa/trash-o'

const textSmall = {
  fontSize: '12px',
}

const text = {
  fontSize: '17px',
  letterSpacing: '-0.3px',
  color: '#16325c',
}

const textBig = {
  fontSize: '28px',
  letterSpacing: '-1px',
  color: '#16325c',
  fontFamily: 'Montserrat-Bold',
}

const buttonIcon = {
  padding: '3px',
  color: '#a8b7c7',
  backgroundColor: 'transparent',
  display: 'inline-block',
}
const DiaryFitnessAdd = () => (
  <List horizontal style={{ marginTop: '35px' }}>
    <List.Item>
      <List.Header style={text}>
        팔 굽혀 펴기
      </List.Header>
    </List.Item>
    <List.Item>
      <Button style={buttonIcon}>
        <FaPencil size={20} />
      </Button>
      <Button style={buttonIcon}>
        <FaTrashO size={20} />
      </Button>
    </List.Item>
    <List.Item
      style={{
        marginLeft: '375px',
        marginRight: '179px',
      }}
    >
      <List.Header style={text}>30분</List.Header>
    </List.Item>
    <List.Item>
      <List.Header style={textSmall}>
        <span style={textBig}>105 </span>kcal
      </List.Header>
    </List.Item>
  </List>
)

export default DiaryFitnessAdd

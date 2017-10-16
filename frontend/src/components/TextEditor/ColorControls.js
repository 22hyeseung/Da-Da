import React from 'react'
import { Style } from './StyledTextEditor'
import ColorPicker from './ColorPicker'
import { Button } from 'semantic-ui-react'

const COLORS = [
  {
    style: 'red',
    color: 'rgb(242, 61, 55)',
  },
  {
    style: 'pink',
    color: 'rgb(243, 112, 115)',
  },
  {
    style: 'orange',
    color: 'rgb(253, 150, 27)',
  },
  {
    style: 'yellow',
    color: 'rgb(253, 236, 77)',
  },
  {
    style: 'lime',
    color: 'rgb(203, 221, 73)',
  },
  {
    style: 'green',
    color: 'rgb(11, 151, 136)',
  },
  {
    style: 'blue',
    color: 'rgb(52, 149, 241)',
  },
  {
    style: 'indigo',
    color: 'rgb(69, 80, 178)',
  },
  {
    style: 'violet',
    color: 'rgb(106, 55, 180)',
  },
  {
    style: 'brown',
    color: 'rgb(120, 85, 73)',
  },
  {
    style: 'gray',
    color: 'rgb(97, 125, 138)',
  },
  {
    style: 'black',
    color: 'rgb(3, 3, 3)',
  },
]

const ColorControls = props => {
  return (
    <div
      style={{
        padding: '10px 10px 2px',
      }}
    >
      {COLORS.map(type => (
        <ColorPicker
          color={type.color}
          colorStyle={type.style}
          onClick={props.onClick}
        />
      ))}
    </div>
  )
}

export default ColorControls

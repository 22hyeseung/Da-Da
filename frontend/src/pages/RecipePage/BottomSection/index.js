import React, { Component } from 'react'
import { bottomContainer } from '../StyledRecipe'
import { Grid } from 'semantic-ui-react'
// components
import IngredientBox from './IngredientBox'
import CookingProcess from './CookingProcess'

const BottomContainer = props => {
  return (
    <Grid style={bottomContainer}>
      <Grid.Column
        width={4}
        style={{ paddingRight: '20px' }}
      >
        <IngredientBox />
      </Grid.Column>
      <Grid.Column
        width={12}
        style={{ paddingLeft: '20px' }}
      >
        <CookingProcess />
      </Grid.Column>
    </Grid>
  )
}

export default BottomContainer

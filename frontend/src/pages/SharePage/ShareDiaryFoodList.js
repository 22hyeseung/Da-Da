import React, { Component } from 'react'
import ShareDiaryFoodListCard from './ShareDiaryFoodListCard'

class ShareDiaryFoodList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(typeof this.props.foodList === "undefined") {
      return null
    }

    return (
      <div className="share-diary-food-meal-list-scroll">
        <div
          style={{ display: 'flex' }}
          className="diary-food-meal-list-card"
        >
          {
            this.props.foodList.map(val => {
              return <ShareDiaryFoodListCard foodData={val} />
            })
          }
        </div>
      </div>
    )
  }
}

export default ShareDiaryFoodList

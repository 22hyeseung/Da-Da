import React from 'react'
import { connect } from 'react-redux'
import DiaryFoodAlbumListCard from './DiaryFoodAlbumListCard'

class DiaryFoodAlbumList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="diary-food-album-list-scroll">
        <div
          style={{ display: 'flex' }}
          className="diary-food-meal-list-card"
        >
          {console.log(this.props.foodresult)}
          {this.props.foodresult.map(
            (item, i) => (
              <div>
                {item.eat_log_picture === null ? (
                  ''
                ) : (
                  <DiaryFoodAlbumListCard
                    picture={item.eat_log_picture}
                    name={item.food_name_ko}
                    meal_tag={
                      item.eat_log_meal_tag
                    }
                  />
                )}
              </div>
            ),
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    foodresult: state.foodLogs.foodresult,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // deleteFoodOfDB: id =>
    //   dispatch(deleteFoodOfDB(id)),
    // updateFoodOfDB: (payload, id) =>
    //   dispatch(updateFoodOfDB(payload, id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DiaryFoodAlbumList)

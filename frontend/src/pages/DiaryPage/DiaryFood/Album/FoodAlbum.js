import React from 'react'
import { connect } from 'react-redux'
import { Header } from 'semantic-ui-react'
import FoodAlbumList from './FoodAlbumList'
import { header } from '../../StyledDiary'
import notyet from '../../../../static/img/diary-album.svg'
import arrow from '../../../../static/img/diary-album-arrow.svg'

class FoodAlbum extends React.Component {
  render() {
    const album =
      this.props.foodResult.length === 0
        ? []
        : this.props.foodResult.map(
            (item, key) => item.eat_log_picture,
          )

    return (
      <div className="diary-food-album">
        <Header
          style={{
            ...header,
            marginBottom: '21px',
          }}
        >
          오늘의 식단 앨범
        </Header>
        {album.every(elem => elem == null) ? (
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={notyet}
                alt="사진앨범이 없을때 나오는 이미지입니다."
                style={{
                  width: '17%',
                  filter: 'grayscale(100%)',
                  opacity: '.6',
                }}
              />
              <span
                style={{
                  color: '#a8b7c7',
                  marginTop: '14px',
                  fontWeight: '100',
                  textAlign: 'center',
                }}
              >
                <b>사진 등록으로</b> <br />더 멋진{' '}
                <b>식단 일기</b>를 만들어 보세요!
              </span>
            </div>
            <img
              style={{
                position: 'absolute',
                top: '-65px',
                right: '38px',
                width: '277px',
              }}
              src={arrow}
              alt="오른쪽 사진과 같이 나오는 의미없는 이미지입니다."
            />
          </div>
        ) : (
          <FoodAlbumList />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    foodResult: state.foodLogs.foodresult,
  }
}

export default connect(mapStateToProps, null)(
  FoodAlbum,
)

import React from 'react'
import { Segment } from 'semantic-ui-react'
import FbIcon from '../../static/img/diary-social-facebook.svg'
import InstagramIcon from '../../static/img/diary-social-instagram.svg'
import KakaoIcon from '../../static/img/diary-social-kakaotalk.svg'
import NaverIcon from '../../static/img/diary-social-naver.svg'
import './Diary.css'

const DiarySocialBtns = () => {
  return (
    <div className="diary-social-wrapper">
      <div className="diary-social">
        <img src={FbIcon} />
        <img src={InstagramIcon} />
        <img src={NaverIcon} />
        <img src={KakaoIcon} />
      </div>
    </div>
  )
}

export default DiarySocialBtns

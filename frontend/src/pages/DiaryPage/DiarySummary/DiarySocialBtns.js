import React from 'react'
import FbIcon from '../../../static/img/diary-social-facebook.svg'
import InstagramIcon from '../../../static/img/diary-social-instagram.svg'
import KakaoIcon from '../../../static/img/diary-social-kakaotalk.svg'
import NaverIcon from '../../../static/img/diary-social-naver.svg'
import '../Diary.css'

const DiarySocialBtns = () => {
  return (
    <div className="diary-social-wrapper">
      <div className="diary-social">
        <img
          src={FbIcon}
          alt="클릭하면 오늘 하루의 다이어리를 페이스북으로 공유할 수 있습니다."
        />
        <img
          src={InstagramIcon}
          alt="클릭하면 오늘 하루의 다이어리를 인스타그램으로 공유할 수 있습니다."
        />
        <img
          src={NaverIcon}
          alt="클릭하면 오늘 하루의 다이어리를 네이버로 공유할 수 있습니다."
        />
        <img
          src={KakaoIcon}
          alt="클릭하면 오늘 하루의 다이어리를 카카오톡으로 공유할 수 있습니다."
        />
      </div>
    </div>
  )
}

export default DiarySocialBtns

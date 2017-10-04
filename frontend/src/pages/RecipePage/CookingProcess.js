import React, { Component } from 'react'
// import { Checkbox } from 'semantic-ui-react'

const checkboxStyled = {
  display: 'inline-block',
  marginRight: '24px',
  marginBottom: '48px',
  color: '#54698d',
  fontSize: '20px',
  lineHeight: '40px',
  textAlign: 'center',
  width: '52px',
  height: '52px',
  border:'3px solid #54698d',
  cursor: 'pointer',
  borderRadius: '50%',
  transition: 'border 0.1s ease-in'
}

const text = {
  display:'inline-flex',
  fontSize: '18px',
  lineHeight: '32px',
  letterSpacing: '-0.2px',
  color: '#54698d',
  width: '780px'
}

class CookingProcess extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          left: '450px',
          top: '46px',
        }}>
        <form style={{width: '884px'}}>
        <label style={
          checkboxStyled}>
          <input type="checkbox" value={1} style={{display: 'none'}}/><span style={{fontSize:'22px'}}>1</span></label><p style={text}>볼에 재료를 전부 넣고 섞으면서 반죽합니다. 그리고나서 5분 정도 그대로 두세요.</p></form>
        <form style={{width: '884px'}}>
        <label style={
          checkboxStyled}>
          <input type="checkbox" value={1} style={{display: 'none'}}/><span style={{fontSize:'22px'}}>2</span></label><p style={text}> 프라이팬에 버터나 오일을 두르세요. 앞 뒤로 약 3-4분정도 중불에 구워주세요. 뒤집을 땐 살살 뒤집어야 합니다. 코티지 치즈가 녹아 프라이팬에 눌러붙을 수 있으니 주의하세요.</p></form>

        <form style={{width: '884px'}}>
        <label style={
          checkboxStyled}>
          <input type="checkbox" value={1} style={{display: 'none'}}/><span style={{fontSize:'22px'}}>3</span></label><p style={text}>블루베리 또는 다른 베리류와 헤비 휘핑 크림을 함께 곁들이면 더 맛있습니다.</p></form>
        {/* <Checkbox label="Blend all ingredients for the batter in a bowl with a spoon or a big fork. Let expand for 5 minutes or more." />
        <Checkbox label="Heat butter or oil in a frying pan. Fry the pancakes on medium heat for 3–4 minutes on each side. Flip very carefully. Be sure not to let the cottage cheese lumps stick to the pan as they melt." />
        <Checkbox label="Serve with blueberries or other berries, and heavy cream whipped until soft peaks form." /> */}
      </div>
    )
  }
}

export default CookingProcess

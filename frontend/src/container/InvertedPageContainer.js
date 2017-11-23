import React from 'react'
import Navigation from '../components/Navigation'
// import Footer from '../components/Footer'

const InvertedPageContainer = ({ children }) => {
  return (
    <div
      style={{
        width: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <Navigation color="#fff" />
      {children}
    </div>
  )
}

export default InvertedPageContainer

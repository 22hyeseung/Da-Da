import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DefaultPageContainer = ({ children }) => {
  return (
    <div
      style={{
        width: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultPageContainer

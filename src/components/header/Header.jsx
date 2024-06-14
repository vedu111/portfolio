import React from 'react'
import './header.css'
import me from '../../assets/me-new.jpg'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>Vedant Dagadkhair</h1>
          <h5 className="text-light">Software Engineering Undergraduate</h5>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

        </div>
      </header>

    
    
  )
}

export default Header
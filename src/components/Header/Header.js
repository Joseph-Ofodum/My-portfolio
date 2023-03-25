import React from 'react'
import './Header.css'
import CV from './CV'
import ME from '../../assets/joseph3.JPG'
//import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>I am</h5>
      <h1>Joseph-Ofodum</h1>
      <h5 className='text-light'>Java Developer</h5>
      <CV />
      {/* <HeaderSocials /> */}

      <div className='me'>
        <img src={ME} alt='me' />
      </div>
      {/* <a href="#contacts" className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header
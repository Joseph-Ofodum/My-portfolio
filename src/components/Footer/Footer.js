/* eslint-disable jsx-a11y/anchor-is-valid */
 import React from 'react'
 import './Footer.css'
 import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li> 
        <li><a href='#about'>About</a></li> 
        {/* <li><a href='#experience'>Experience</a></li>  */}
        <li><a href='#portfolio'>Portfolio</a></li> 
        {/* <li><a href='#testimonial'>Testimonials</a></li>  */}
        {/* <li><a href='#contact'>Contact</a></li>  */}
      </ul>
      <div className="footer__socials">
       <a href="https://www.facebook.com/josephmartineo?mibextid=LQQJ4d"><FaFacebookF/></a>
        <a href="https://instagram.com/joemartins2197?igshid=YmMyMTA2M2Y="><BsInstagram/></a>
       <a href="https://twitter.com/Oghomgbo"><FiTwitter/></a>
     </div>
     <div className="footer__copyright">
        <small>&copy;ZMARTZEE solutions</small>
      </div>
   </footer>
  )
}

 export default Footer
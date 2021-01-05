import React from 'react'
import './Header.css'
import logo from './img/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';


function Header() {
  return (
    <div className='header'>
      <img className='header_logo' src={logo} alt="" />
      <div className='header_title'>
        <h1>The Finest Local Deals</h1>
      </div>

      <div className='header_social'>
        <FacebookIcon className='Facebook_icon' />
        <InstagramIcon className='Instagram_icon' />
        <TwitterIcon className='Twitter_icon' />
        <PinterestIcon className='Pinterest_icon' />
      </div>
      <div className='header_registration'>
          <div className='header_reg1'>
            <span>LOG IN</span>
          </div>
          <div className='header_reg1'>
            <span>SIGN UP</span>
          </div>
      </div>
    </div>
    
  )
}

export default Header

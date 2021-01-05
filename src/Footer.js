import React from 'react'
import './Footer.css'
import logo from './img/logo.png'
import logo_rb from './img/logo_rb.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';

function Footer() {
  return (
    <div className='footer_main'>
      <div className='footer_container'>
      <div className='footer_columns'>
        <img className='footer_logo' src={logo} alt="" />
      </div>
      <div className='footer_columns'>
        <div className='site_links'>
          <ul>
            <li>DEALS</li>
            <li>ABOUT</li>
            <li>HOW IT WORKS</li>
            <li>NEWSLETTER</li>
            <li>PRESS</li>
          </ul>
        </div>
      </div>
      <div className='footer_columns'>
        <div className='site_links'>
            <ul>
              <li>HELP</li>
              <li>ADVERTISE</li>
              <li>RESTAURANTS</li>
              <li>EMPLOYMENT</li>
            </ul>
        </div>
      </div>
      <div className='footer_columns'>
        <h3>Stay Connected:</h3>
      <div className='footer_social'>
        <FacebookIcon className='Facebook_icon' />
        <InstagramIcon className='Instagram_icon' />
        <TwitterIcon className='Twitter_icon' />
        <PinterestIcon className='Pinterest_icon' />
      </div>
      </div>
      <div className='footer_columns'>
      <img className='footer_logo' src={logo_rb} alt="" />
      </div>
      </div>
      
    </div>
  )
}

export default Footer

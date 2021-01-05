import React from 'react'
import PropTypes from 'prop-types'
import './Deals.css'
import getDeals from './img/getDeals.png'

function Deals({id, title, rating, address, phno, description, expiryDate}) {
  return (
    <div className='deals'>
      <div className='deals_info'>
        <h3>{title}</h3>
        <div className='r_rating'>
          {Array(rating)
          .fill()
          .map((_, i) => (
          <p>🌟</p>
          ))}
          
        </div>
        <p className='r_address'>{address}</p>
        <p className='r_phno'>{phno}</p>
        <strong className='r_description'>{description}</strong>
        <p className='r_expiryDate'>{expiryDate}</p>
      </div>
      <img className='getDeals' src={getDeals} alt="" />      
    </div>
  )
}

Deals.propTypes = {

}

export default Deals


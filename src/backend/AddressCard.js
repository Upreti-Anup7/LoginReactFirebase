import React from 'react'
import './Backend.css'

function AddressCard() {
  return (
    <div>
      <div className='addressCard'>
        <h3>Anup Upreti</h3>
        <p>150 River Road apt 3a</p>
        <p>City, State, zipcode</p>
        <p>Country</p>
      </div>
      <div className='myaddress_addeditdelete'>
        <a href='#' className='editaddress'>Edit Address</a> <span>|</span>
        <a href='#' className='removeaddress'>Remove Address</a>
        </div>
    </div>
    
  )
}

export default AddressCard

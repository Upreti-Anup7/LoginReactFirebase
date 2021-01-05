import React from 'react'
import './Advertisement.css'

function Advertisement({advHeader, advHyperlink, advImage, advDescription}) {
  return (
    <div className='advertisement'>
      <h3>{advHeader}</h3>
      <p>{advHyperlink}</p>
      <div className='advertising_info'>
        <img src={advImage} alt=''></img>
        <p className='advertising_description'>{advDescription}</p>
      </div>
      
    </div>
  )
}

export default Advertisement

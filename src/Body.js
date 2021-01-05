import React from 'react'
import './Body.css'
import Deals from './Deals'
import bodyImage from './img/hotel3.jpg'
import Advertisement from './Advertisement'
import AddBanner from './AddBanner'
import blankDeals from './img/deals_blank.png'
import video from './img/hotel4.jpg'

function Body() {
  return (
    <div className='body_main'>
      <div className='body_container'>
        <div className='body_contents'>
          <div className='body_content'>
            <div className='body_topic'>
              <h1>Lets eat today......</h1>
            </div>
            <div className='body_image'>
              <img src={bodyImage} alt='' />
            </div>
          </div>
          <div className='body_deals'>
            <div className='deal_title'>
              <img className='getDeals' src={blankDeals} alt="" />
              <h1>Deals Near You</h1>
            </div>
            <div className='deals_section'>
              <div className='body_goodDeals'>
                <Deals 
                  id='1'
                  title='Fuel america'
                  rating={5}
                  address='boston, ma'
                  phno='2345345345'
                  description=" loreum asdfasd asdfasdf asdfsdf"
                  expiryDate='01/12/2021'
                />
                <Deals 
                  id='2'
                  title="Gurung's kitchen"
                  rating={5}
                  address="Manchester, NH"
                  phno='2345345345'
                  description=" loreum asdfasd asdfasdf asdfsdf"
                  expiryDate='01/12/2021'
                />
                <Deals 
                  id='3'
                  title='Saino Restaurant'
                  rating={3}
                  address='boston, ma'
                  phno='2345345345'
                  description=" loreum asdfasd asdfasdf asdfsdf"
                  expiryDate='01/12/2021'
                />              
              </div>
              <div className='body_video'>
                <img className='video' src={video} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='body_aside'>
          <Advertisement 
          advHeader= "Advertisement Header 1"
          advHyperlink= "Advertisement Hyperlink"
          advImage= 'https://images.unsplash.com/photo-1609531763075-c0f86a895aa0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          advDescription= "asdasd asdfasd asdfadsf asdffasdf"
          />
          <Advertisement 
          advHeader= "Advertisement Header 2"
          advHyperlink= "Advertisement Hyperlink"
          advImage= 'https://images.unsplash.com/photo-1609531763075-c0f86a895aa0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          advDescription= "asdasd asdfasd asdfadsf asdffasdf"
          />
          <Advertisement 
          advHeader= "Advertisement Header 3"
          advHyperlink= "Advertisement Hyperlink"
          advImage= 'https://images.unsplash.com/photo-1609531763075-c0f86a895aa0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          advDescription= "asdasd asdfasd asdfadsf asdffasdf"
          />
          <Advertisement 
          advHeader= "Advertisement Header 4"
          advHyperlink= "Advertisement Hyperlink"
          advImage= 'https://images.unsplash.com/photo-1609531763075-c0f86a895aa0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          advDescription= "asdasd asdfasd asdfadsf asdffasdf"
          />
          <Advertisement 
          advHeader= "Advertisement Header 5"
          advHyperlink= "Advertisement Hyperlink"
          advImage= 'https://images.unsplash.com/photo-1609531763075-c0f86a895aa0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
          advDescription= "asdasd asdfasd asdfadsf asdffasdf"
          />
        </div>
         
      </div>
        {/* {Adv Banner} */}
        <AddBanner />
    </div>
  )
}

export default Body

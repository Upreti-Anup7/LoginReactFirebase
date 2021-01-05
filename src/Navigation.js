import React from 'react'
import './Navigation.css'
import SearchIcon from '@material-ui/icons/Search';
import findDeals from './img/findDeals.png'

function Navigation() {
  return (
    <div className='navigation'>
      <div className='navigation_menus'>
        <div className='navigation_menu'>
          <span className='navigation_item'>NEWEST DEALS</span>
        </div>
        <div className='navigation_menu'>
          <span className='navigation_item'>HOW IT WORKS</span>
        </div>
        <div className='navigation_menu'>
          <span className='navigation_item'>CATEGORIES</span>
        </div>
        <div className='navigation_menu'>
          <span className='navigation_item'>GIFTS</span>
        </div>
        <div className='navigation_menu'>
          <span className='navigation_item'>HELP</span>
        </div>
      </div>
      <div className='navigation_search'>
        <div className='navigation_searchTitle'>Find deals near you!</div>
        <div className='navigation_search1'>
          <input className='navigation_searchInput' type='text' placeholder='City & State or ZIP code'/>
          <img className='findDeals' src={findDeals} alt="" />
          {/* <SearchIcon className='navigation_searchIcon'/> */}
        </div>
      </div>
      
    </div>
  )
}

export default Navigation

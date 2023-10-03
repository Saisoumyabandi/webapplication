import React from 'react'
import { Link } from 'react-router-dom'
import {CiLocationOn} from 'react-icons/ci'

function Header() {
  return (
    
    <div className='container1'>
        <img className='img' src='https://motors.stylemixthemes.com/elementor-dealer-one/wp-content/uploads/sites/22/2015/12/logo.svg' alt=''/>
        <p className='para'><CiLocationOn className='icon'/>1840 E GARVEY AVE SOUTH WEST <br/> COVINA, CA 91791 VIEW ON MAP</p>
        <p></p>
        <ul className='list1'>
            <li><Link className='list2' to='/'>Home</Link></li>
            <li><Link className='list2' to='/inventory'>Inventory</Link></li>
            <li><Link className='list2' to='/listing'>Listing</Link></li>
            <li><Link className='list2' to='/pages'>Pages</Link></li>
            <li><Link className='list2'  to='/megamenu'>Megamenu</Link></li>
            <li><Link className='list2' to='/blog'>Blog</Link></li>
            <li><Link className='list2' to='/shop'>Shop</Link></li>
            <li><Link className='list2' to='/contact'>Contact</Link></li>



        </ul>
    
    </div>
  )
}

export default Header
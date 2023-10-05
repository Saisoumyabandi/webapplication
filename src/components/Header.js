import React from 'react'
import { Link } from 'react-router-dom'
import {CiLocationOn} from 'react-icons/ci'
import {GiPhone} from 'react-icons/gi'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'

function Header() {
  return (
    
    <div className='container1'>
        <img className='img' src='https://motors.stylemixthemes.com/elementor-dealer-one/wp-content/uploads/sites/22/2015/12/logo.svg' alt=''/>
        <p className='para'><CiLocationOn className='icon'/>1840 E GARVEY AVE SOUTH WEST <br/> COVINA, CA 91791 VIEW ON MAP</p>
        <p className='para1'><GiPhone className='icon1'/>PHONE<br/>878-9674-4455</p>
        <p className='para2'> SERVICE 878-3853-9576<br/>PARTS 878-0505-0440</p>
        <a href="https://www.facebook.com"><ImFacebook className='facebook'/>  </a>
        <a href="http://www.twitter.com"><BsTwitter className='twitter'/></a>
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
import React from 'react'
import {AiFillCar} from 'react-icons/ai'
import {BiBookmarks} from 'react-icons/bi'
import {AiFillChrome} from 'react-icons/ai'
import {AiOutlineComment} from 'react-icons/ai'
import {GiBattery100} from 'react-icons/gi'

const Data = [
    {
        id: 1,
        img: 'https://motors.stylemixthemes.com/elementor-dealer-one/wp-content/uploads/sites/22/2021/03/01-20.jpg',
        title: 'Mercedes-Benz C-Class 2015',
        price: '$540,000'
    },
    {
        id: 2,
        img: 'https://motors.stylemixthemes.com/elementor-dealer-one/wp-content/uploads/sites/22/2021/03/01-7.jpg',
        title: 'Lexus RX-350 2021',
        price: '$825,000'
    },
    {
        id: 3,
        img: 'https://motors.stylemixthemes.com/elementor-dealer-one/wp-content/uploads/sites/22/2021/03/01-10.jpg',
        title: 'BMW 4-series 2021',
        price: '$740,000'
    },
    {
        id: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UDAOOSpRvHY3f65om8G46-fH4IGT7vavSAJs93ZDqzUcurJYttvD5oQsdJGx1k2uUrg&usqp=CAU',
        title: 'Chevrolet Suburban 2021',
        price: '$2,6000',
    },
    {
        id: 5,
        img: 'https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/27310/1623932526627/GeneralNews.jpg?tr=w-270',
        title: 'Acura ILX 2021',
        price: '$4,7500 '
    },
    {
        id: 6,
        img: 'https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/Topics/specialoffers/may-sales-push/2gc-desktop-new.jpg',
        title: 'Acura ILX 2021',
        price: '$3,1000',
 
    },
]
function Home() {
    return (
        <div>
            <div>
                <img className='img1' src='https://wallpapercave.com/wp/wp8623962.jpg' alt='' />
            </div>
            <div className='car'>
                <h2 className='car1'>CAR DEALER WORDPRESS THEME</h2>
                <div className='btn'>
                    <button className='btn1'> NEW CARS</button>
                     <button className='btn2'> USED CARS</button>
                    <button className='btn3'> SEARCH INVENTORY</button>
                </div>
            </div>
            <div className='sonu2'>
                
                <ul className='d-flex row p-0'>
                    {Data.map((each) => {
                        return (
                            <li className='col-xl-4'>
                                <div className='sonu-3'>
                                <img className='w-100' src={each.img} alt='' />
                                </div>
                                <div className='real-1'>
                                    <p className='sonu'>{each.title}</p>
                                    <p className='sonu1'>{each.price}</p>
                                </div>
                                
                            </li>
                        )
                    }
                    )
                    }
                </ul>
                <button className='btn5' >SHOW ALL</button>

            </div>
            <div>
                <img className='sonu-4' src='https://d3psh8e9i5r6b9.cloudfront.net/wp-content/uploads/2019/10/22120221/BMW-Banner.jpg' alt='img'/>
            </div>
            <div className='text-1'>
            <AiFillCar className='icon-6'/>
                <h1 className='text'>Are You Looking for a car?</h1>
                <p className='text-3'>Our cars are delivered fully-registered with all<br/> requirements completed. We’ll deliver your car <br/>wherever you are.</p>
                </div>
                <div className='text-4'>
                <AiFillCar className='icon-7'/>
                <h1 className='text-2'>DO  You want to sell a car?</h1>
                <p className='text-6'>What’s your car worth? Receive the absolute best value for your trade-in vehicle.<br/> We even handle all paperwork.</p>
            </div>
            <div className='lucky'>
                <br/> <br/>
                <h1 className='lucky1'>WHY CHOOSE US</h1>
           </div>
           <div>
            <ul className='lucky2'>
                <li className='lucky3'>FINANCING MADE EASY</li>
                <li className='lucky3'>WIDE RANGE OF<br/> BRANDS</li>
                <li className='lucky3'>TRUSTED BY<br/> THOUSANDS</li>
                <li className='lucky3'>CAR SERVICE & <br/>MAINTENANCE</li>

            </ul>
            <ul className='lucky4'>
                <li className='lucky5'><BiBookmarks className='lax'/>Our stress-free finance <br/>department that can find<br/> financial solutions to save<br/> you money.</li>
                <li className='lucky6'><AiFillChrome className='lax1'/>With a robust selection of<br/> popular vehicles on hand, as<br/> well as leading vehicles from<br/> BMW and Ford.</li>
                <li className='lucky7'><AiOutlineComment className='lax2'/>10 new offers every day.<br/> 350 offers on site, trusted<br/> by a community of<br/> thousands of users.</li>
                <li className='lucky8'><GiBattery100 className='lax3'/>Our service department<br/> maintain your car to stay safe<br/> on the road for many more<br/> years.</li>
            </ul>
            <div >
                <button className='btn6'>LEARN MORE</button>
            </div>
            <div>

            </div>
           </div>
           <div>
            <img className='lucky9' src='https://c4.wallpaperflare.com/wallpaper/960/351/734/car-bmw-blue-cars-bmw-e34-wallpaper-preview.jpg' alt=''/>
           </div>
           <div className='lucky10'>
            <h1 className='sai1'>CAR DEALERSHIP <br/> AUTOMOTIVE WP<br/> THEME</h1>
            <p className='sai2'>With specialists on hand to help with any part of the car<br/> shopping or vehicle ownership experience, Motors provides <br/>financing, car service and a great selection of vehicles for<br/> luxury car shoppers in Chicago, IL. Motors is ultimate<br/> Automotive, Car Dealer WordPress theme.</p>
            
           </div>
           <div className='sai3'>

           </div>
        </div>

    )
}

export default Home
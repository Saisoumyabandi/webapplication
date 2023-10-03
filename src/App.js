import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Inventory from './components/Inventory'
import Listing from './components/Listing'
import Pages from './components/Pages'
import Megamenu from './components/Megamenu'
import Blog from './components/Blog'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/'to element={<Home/>}/>
        <Route path='/inventory'to element={<Inventory/>}/>
        <Route path='/listing'to element={<Listing/>}/>
        <Route path='/pages'to element={<Pages/>}/>
        <Route path='/megamenu'to element={<Megamenu/>}/>
        <Route path='/blog'to element={<Blog/>}/>
        <Route path='/shop'to element={<Shop/>}/>
        <Route path='/contact'to element={<Contact/>}/>

      </Routes>

    </div>
  )
}

export default App
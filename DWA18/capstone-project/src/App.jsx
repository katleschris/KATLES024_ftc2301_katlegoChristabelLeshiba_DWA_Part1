// import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Pages/Home'
import AllShows from './Pages/AllShows'
import RecentlyPlayed from './Pages/RecentlyPlayed'
import Favorites from './Pages/Favorites'
import {Route, Routes} from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage'

function App() {
  
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/LandingPage' element={<LandingPage />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/AllShows' element={<AllShows />} />
          <Route path='/RecentlyPlayed' element={<RecentlyPlayed />} />
          <Route path='/Favorites' element={<Favorites />} />
        </Routes>
      </div>
    
    </>
  )
}

export default App

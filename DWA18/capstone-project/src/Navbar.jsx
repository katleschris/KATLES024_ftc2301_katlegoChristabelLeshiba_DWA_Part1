import React, { Component } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState } from 'react'

export default class Navbar extends Component {
    
  render() {
    return (
      <nav className='nav'>
        <Link to='/LandingPage' className='site-tittle'><h2>Watch</h2></Link>
        <ul>
            <CustomLink to='./Home' className='home'>Home</CustomLink>
            <CustomLink to='./AllShows' className='all-shows'>All Shows</CustomLink>
            <CustomLink to='./Favorites' className='favorites'>Favorites</CustomLink>
            <CustomLink to='./RecentlyPlayed' className='recently-played'>Recently Played</CustomLink>
        </ul>
      </nav>
    )
  }
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

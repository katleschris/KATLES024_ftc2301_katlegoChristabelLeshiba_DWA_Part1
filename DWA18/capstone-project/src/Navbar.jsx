import React, { Component } from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default class Navbar extends Component {
    
  render() {
    return (
      <nav className='nav'>
        <Link to='/Home' className='site-tittle'><h2>Site name</h2></Link>
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

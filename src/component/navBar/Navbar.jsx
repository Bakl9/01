import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

  return(
    <nav className={s.nav}>
        <div className={s.nav_item}>
          <NavLink to="/profiler" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.nav_item}>
          <NavLink to='/dialogs' activeClassName={s.active}>Message</NavLink>
        </div>
        <div className={s.nav_item}>
          <NavLink to='#'>News</NavLink>
        </div>
        <div className={s.nav_item} activeClassName={s.active}> 
          <NavLink to='#'>Music</NavLink> 
        </div>
        <div className={s.nav_item} activeClassName={s.active}>
          <a >Settings</a> 
        </div>
      </nav>
  )
}


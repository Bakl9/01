import React from 'react'
import s from './Navbar.module.css'

export const Navbar = () => {

  return(
    <nav className={s.nav}>
        <div className={s.nav_item}>
          <a href="#">Prodile</a>
        </div>
        <div className={s.nav_item}>
          <a href='#'>Message</a>
        </div>
        <div className={s.nav_item}>
          <a href='#'>News</a>
        </div>
        <div className={s.nav_item}> 
          <a href='#'>Music</a> 
        </div>
        <div className={s.nav_item}>
          <a >Settings</a> 
        </div>
      </nav>
  )
}


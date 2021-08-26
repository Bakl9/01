import React from 'react'
import s from './Content.module.css'

export const Content = () => {

  return(
    <div className={s.content}>
      <div></div>
    <div>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhuW9pxcur7yZ2YLmRT0ve5tnJZ02z_magA&usqp=CAU'></img>
    </div>
    <div>
      ava + desc
    </div>
    <div>
      My post
    </div>
    <div>
      New Post
    </div>
    <div>
      <div className={s.nav_item}>
        post 1
      </div>
      <div className={s.nav_item}>
        post 2 
      </div>
    </div>
  </div>

  )
}


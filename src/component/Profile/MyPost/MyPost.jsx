import React from 'react'

import './MyPost.module.css'
import { Post } from './Post /Post'
export const MyPost = () => {

  return(
    <>
    <div>
      My post
    </div>
    <textarea></textarea>
    <button>Add post</button>
    <Post
     message ='Hello'
     like =' like 20'
    />
    
    <Post message='Mb pro'/>
    
  </>
  )
}

 
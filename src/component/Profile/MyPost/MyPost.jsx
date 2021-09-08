import React from 'react'
import './MyPost.module.css'
import s from './MyPost.module.css'
import { Post } from './Post /Post'

let postData = [
  { id: 0, message: 'Hello', like: 23},
  { id: 1, message: 'Mb pro', like: 11},
]

export const MyPost = () => {
	return (
		<>
    <div className={s.content}>
			<div>My post</div>
			<textarea></textarea>
			<button>Add post</button>
			<Post message={postData[0].message} like={postData[0].like} />
			<Post message={postData[1].message} like={postData[1].like} />
    </div>
		</>
	)
}

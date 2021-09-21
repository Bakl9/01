import React from 'react'
import './MyPost.module.css'
import s from './MyPost.module.css'
import { Post } from './Post /Post'



export const MyPost = (props) => {

	let postElement = props.post.map(post => (
		<Post message={post.message} like={post.like} />
	))

	return (
		<>

			<div className={s.content}>
				<div>My post</div>
				<textarea></textarea>
				<button>Add post</button>
				{ postElement }
			</div>
		</>
	)
}

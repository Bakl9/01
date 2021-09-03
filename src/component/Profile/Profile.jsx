import React from 'react'
import s from './Profile.module.css'
import { MyPost } from './MyPost/MyPost'

export const Profiler = () => {
	return (
		<div className={s.content}>
			<div></div>
			<div>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzhuW9pxcur7yZ2YLmRT0ve5tnJZ02z_magA&usqp=CAU"></img>
			</div>
			<div>ava + desc</div>
			<MyPost />
		</div>
	)
}

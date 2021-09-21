import React from 'react'

import { MyPost } from './MyPost/MyPost'
import { ProfileInfo } from './MyPost/ProfileInfo/ProfileInfo'

export const Profiler = (props) => {


	return (
		<div>
			<ProfileInfo />
			<MyPost post={props.state.post}/>
		</div>
	)
}

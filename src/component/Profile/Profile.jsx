import React from 'react'

import { MyPost } from './MyPost/MyPost'
import { ProfileInfo } from './MyPost/ProfileInfo/ProfileInfo'

export const Profiler = () => {
	return (
		<div>
			<ProfileInfo />
			<MyPost />
		</div>
	)
}

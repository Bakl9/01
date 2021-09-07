import React from 'react'
import './ProfileInfo.css'

export const ProfileInfo = props => {
	return (
		<div className='page'>
			<div>
				<img src="data:image/jpeg;base64,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"></img>
			</div>
			<div>ava + desc</div>
		</div>
	)
}

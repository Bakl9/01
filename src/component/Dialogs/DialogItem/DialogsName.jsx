import React from 'react'
import s from './Item.module.css'
import { NavLink } from 'react-router-dom'


const DialogsName = props => {
	return (
		<div className='Dialogs_dialogs__y8tne'>
			<img className='od'src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'></img>
		<div className={s.dialog + ' ' + s.active}>
		
		<NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
		</div>
		</div>
	)
}

export default DialogsName;

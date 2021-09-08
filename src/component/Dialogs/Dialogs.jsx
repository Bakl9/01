import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Message = props => {
	return <div className={s.message}>{props.message}</div>
}

const DialogsName = props => {
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
		</div>
	)
}

let people = [
	{ name: 'Dmitry', id: 0 },
	{ name: 'Olya', id: 1 },
	{ name: 'Tomy', id: 2 },
	{ name: 'Oliver', id: 3 },
	{ name: 'Kot', id: 4 },
]

let message = [
	{ message: 'hello', id: 0 },
	{ message: 'Ok', id: 1 },
	{ message: 'Bay', id: 2 },
	{ message: 'ti kto', id: 3 },
	{ message: 'Nechto', id: 4 },
]

let dialogsElement = people.map(d => <DialogsName name={d.name} id={d.id} />)

let messageElement = message.map(m => <Message message={m.message} />)

const Dialogs = props => {
	return (
		<div className={s.dialogs}>
			<div className={s.item_dialog}>
                {dialogsElement}
            </div>
			<div className={s.item_message}>
                {messageElement}
            </div>
		</div>
	)
}

export default Dialogs

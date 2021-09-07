import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Message = props => {
    return (
    <div className={s.message}>{props.message}</div>
    )
}

const DialogsName = props => {
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
		</div>
	)
}

let peopleData = [
    { name: 'Dmitry', id: 0},
    { name: 'Olya', id: 1},
    { name: 'Tomy', id: 2},
    { name: 'Oliver', id: 3},
    { name: 'Kot', id: 4},
];

let messageData = [
    { message: 'hello', id: 0},
    { message: 'Ok', id: 1},
    { message: 'Bay', id: 2},
    { message: 'ti kto', id: 3},
    { message: 'Nechto', id: 4},
]

const Dialogs = props => {
	return (
		<div className={s.dialogs}>
			<div className={s.item_dialog}>
                <DialogsName name={peopleData[1].name} id={peopleData[1].id}/>
			</div>
			<div className={s.item_message}>
				<Message message={[messageData[1].message]}/>
				
			</div>
		</div>
	)
}

export default Dialogs

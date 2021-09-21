import React from 'react'
import s from './Dialogs.module.css'
import DialogsName from './DialogItem/DialogsName'
import Message from './Message/Message'

const Dialogs = props => {

let dialogsElement = props.state.people.map(d => <DialogsName name={d.name} id={d.id} />)
let messageElement = props.state.message.map(m => <Message message={m.message} />)

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

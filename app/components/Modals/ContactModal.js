import React from 'react'
import Modal from 'boron/ScaleModal'

class ContactModal extends React.Component {

	constructor(){
		super()
		this.handleMessage = this.handleMessage.bind(this)
		this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
	}

	handleMessage(e){
		e.preventDefault()
	}

	componentWillReceiveProps(){

		if(this.props.modalState === "showModal"){
			this.refs.contactModal.show()
		} else {
			this.refs.contactModal.hide()
		}
	}

	render() {

		return (
			<Modal ref="contactModal">
				<h2>Want this piece?</h2>
				<p>Make an offer and I will contact you.</p>
				<p>Looking for something different?<br />I do custom work.</p>

				<form onSubmit={this.handleMessage}>
					<input type="text" ref="name" />
					<input type="text" ref="phone" />
					<input type="text" ref="email" />
					<textarea ref="message" />
					<button>Send</button>
				</form>
			</Modal>
		)
	}
}

export default ContactModal
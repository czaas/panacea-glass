import React from 'react'
import Modal from 'boron/ScaleModal'

class ContactModal extends React.Component {

	constructor(){
		super()
		this.handleMessage = this.handleMessage.bind(this)
		this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)

		this.state = {
			errors: [],
			sending: false
		}
	}

	handleMessage(e){
		e.preventDefault()
		let message = {
			name: this.refs.name.value,
			phone: this.refs.phone.value,
			email: this.refs.email.value,
			message: this.refs.message.value,
			image:  this.refs.image.value
		}

		let that = this

		validateForm(message)

		function validateForm(message){
			let errors = []
			let errorMessage = {
				name: 'Please fill out a name',
				phoneOrEmail: 'Please fill out phone or email field'
			}

			if(message.name === ''){
				errors.push(errorMessage.name)
			}
			if(message.phone === '' && message.email === ''){
				errors.push(errorMessage.phoneOrEmail)
			}

			if(errors.length === 0){
				that.refs.contactForm.reset()
				console.log(message)
				that.setState({
					errors: errors,
					sending: true
				})
			} else {
				that.setState({
					errors: errors
				})
			}
		}
	}

	componentWillReceiveProps (){
		// This needs to be here so when the modalState is passed down this component will know to popup	
	}

	render() {
		if(this.props.modalState.shouldShow === "showModal"){
			this.refs.contactModal.show()
		}

		let errors = this.state.errors.map((error, i) => {
			return <li>{error}</li>
		})

		return (
			<Modal ref="contactModal" className="contactModal pure-u-g">
				
				<div className="pure-u-1">
					<img src={this.props.modalState.image} className="thumbnail" />
					<h2>Want this piece?</h2>
					<p>Make an offer and I will contact you.</p>
					<p>Looking for something different?<br />I do custom work.</p>
				</div>
				<ul>
					{errors}
				</ul>
				<form onSubmit={this.handleMessage} ref="contactForm" className="pure-u-g">
					<input type="hidden" ref="image" value={this.props.modalState.image} className="pure-u-1" />
					<input type="text" ref="name" placeholder="Name*" className="pure-u-1" />
					<input type="phone" ref="phone" placeholder="Phone*" className="pure-u-1" />
					<input type="email" ref="email" placeholder="Email*" className="pure-u-1" />
					<textarea ref="message" placeholder="Your Offer or Custom Request" className="pure-u-1" />
					<button>Send</button>
				</form>
			</Modal>
		)
	}
}

export default ContactModal
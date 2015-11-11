import React from 'react'

class LinkBox extends React.Component {

	constructor(){
		super()
		this.launchContactModal = this.launchContactModal.bind(this)
	}

	launchContactModal(){
		this.props.launchModal('contact', this.props.feedIndex)
	}

	render() {
		return (
			<div className="pure-u-1">
				<div className="pure-g linkBox">
					<a className="pure-u-1-4">Request</a>
					<a href={this.props.instagramLink} target="_blank" className="pure-u-1-4">Instagram</a>
					<a className="pure-u-1-4">Zoom</a>
					<a className="pure-u-1-4" onClick={this.launchContactModal}>Contact</a>
				</div>
			</div>
		)
	}
}

export default LinkBox
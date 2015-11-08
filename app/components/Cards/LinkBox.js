import React from 'react'

class LinkBox extends React.Component {
	render() {
		return (
			<div className="pure-u-1">
				<div className="pure-g linkBox">
					<a href="#!" className="pure-u-1-4">Request</a>
					<a href={this.props.instagramLink} target="_blank" className="pure-u-1-4">Instagram</a>
					<a href="#!" className="pure-u-1-4">Zoom</a>
					<a href="#!" className="pure-u-1-4">Contact</a>
				</div>
			</div>
		)
	}
}

export default LinkBox
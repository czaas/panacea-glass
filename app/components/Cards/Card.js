import React from 'react'

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<img src={this.props.images.low_resolution.url} />
			</div>
		)
	}
}

export default Card
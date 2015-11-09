import React from 'react'

import LinkBox from './LinkBox'

class Card extends React.Component {
	render() {
		return (
			<div className="pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 card">
				<img src={this.props.images.low_resolution.url} />
				<LinkBox instagramLink={this.props.instagramLink} feedIndex={this.props.feedIndex} launchModal={this.props.launchModal} />
			</div>
		)
	}
}

export default Card
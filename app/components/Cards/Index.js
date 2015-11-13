import React from 'react'

import Card from './Card'

class Cards extends React.Component {

	render() {

		let cards = this.props.feed.map(function(card, i){
			return <Card instagramLink={card.link} feedIndex={i} images={card.images} launchModal={this.props.launchModal} />
		}.bind(this))

		return (
			<div className="pure-g">
				<div className="cardContainer pure-g">
					{cards}
				</div>
			</div>
		)
	}
}

export default Cards
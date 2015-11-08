import React from 'react'

import Card from './Card'

class Cards extends React.Component {

	render() {
		let cards = this.props.feed.map(function(card, i){
			return <Card instagramLink={card.link} feedIndex={i} images={card.images} />
		})

		return (
			<div className="pure-g">
				<h2 className="pure-u-1">All Cards</h2>
				<div className="cardContainer pure-g">
					{cards}
				</div>
			</div>
		)
	}
}

export default Cards
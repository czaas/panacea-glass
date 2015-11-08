import React from 'react'

import Card from './Card'

class Cards extends React.Component {

	render() {
		let cards = this.props.feed.map(function(card, i){
			return <Card _link={card.link} iindex={i} images={card.images} />
		})

		return (
			<div>
				<h2>All Cards</h2>
				{cards}
			</div>
		)
	}
}

export default Cards
import React from 'react'
import Instafeed from 'instafeed.js'

import Cards from './Cards/Index'
import ContactModal from './Modals/ContactModal'

class App extends React.Component {

	constructor() {
		super()

		this.handleModals = this.handleModals.bind(this)

		this.state = {
			feed: [],
			contactModal: ""
		}
		
	}

	componentWillMount() {
		let that = this

		let feed = new Instafeed({
			get: 'user',
			userId: 1388413337,
			clientId: 'efdc48d247ca43e1a890066446d81c16',
			accessToken: '1388413337.efdc48d.c50dbba9aec14c0c9b6f82e968620029',
			mock: true,
			limit: 50,
			success: function getImagesData(data){
				that.setState({
					feed: data.data
				})
			}
		})

		feed.run()
	}

	handleModals(typeOfModal, imageIndex){
		if(typeOfModal === 'contact'){
			this.setState({
				contactModal: { 
					shouldShow: "showModal",
					image: this.state.feed[imageIndex].images.low_resolution.url
				}
			})
		}
		console.log(typeOfModal, imageIndex)
	}

	render() {
		return (
			<div>
				<h1>Chads Glass V2</h1>
				<Cards feed={this.state.feed} launchModal={this.handleModals} />
				<ContactModal modalState={this.state.contactModal} />
			</div>
		)
	}
}

export default App
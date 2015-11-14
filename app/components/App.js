import React from 'react'
import Instafeed from 'instafeed.js'

import Cards from './Cards/Index'
import ContactModal from './Modals/ContactModal'
import ZoomModal from './Modals/ZoomModal'

class App extends React.Component {

	constructor() {
		super()

		this.handleModals = this.handleModals.bind(this)
		this.handleImageNav = this.handleImageNav.bind(this)

		this.state = {
			imageIndex: 0,
			feed: [],
			contactModal: {},
			zoomModal: {}
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

	handleModals(typeOfModal, newIndex){

		if(typeOfModal === 'contact'){
			this.setState({
				imageIndex: newIndex,
				contactModal: { 
					shouldShow: "showModal",
					image: this.state.feed[newIndex].images.low_resolution.url
				},
				zoomModal: {}
			})
		} else if(typeOfModal === 'zoom'){
			this.setState({
				imageIndex: newIndex,
				zoomModal: {
					shouldShow: 'showModal',
					feed: this.state.feed
				},
				contactModal: {}
			})
		}
	}

	handleImageNav(newIndex){
		this.setState({
			imageIndex: newIndex
		})
	}

	render() {
		return (
			<div>
				<Cards feed={this.state.feed} launchModal={this.handleModals} />
				<ContactModal modalState={this.state.contactModal} />
				<ZoomModal modalState={this.state.zoomModal} currentImage={this.state.imageIndex} handleImageNav={this.handleImageNav} />
			</div>
		)
	}
}

export default App
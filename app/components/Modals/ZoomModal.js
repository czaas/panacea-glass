import React from 'react'
import Modal from 'boron/ScaleModal'

class ZoomModal extends React.Component {

	constructor(){
		super()
		this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
		this.handleNextImage = this.handleNextImage.bind(this)
		this.handlePrevImage = this.handlePrevImage.bind(this)
	}

	componentWillReceiveProps (){
		// This needs to be here so when the modalState is passed down this component will know to popup	
	}

	handleNextImage(e){
		e.preventDefault()
		let nextImage = this.props.currentImage + 1

		if(nextImage >= this.props.modalState.feed.length){
			nextImage = 0
		}

		this.props.handleImageNav(nextImage)
	}

	handlePrevImage(e){
		e.preventDefault()
		let prevImage = this.props.currentImage - 1

		if(prevImage === -1){
			prevImage = this.props.modalState.feed.length - 1
		}

		this.props.handleImageNav(prevImage)
	}

	render() {
		let image
		if(this.props.modalState.shouldShow === "showModal"){
			this.refs.zoomModal.show()
			image = this.props.modalState.feed[this.props.currentImage].images.standard_resolution.url
		}

		return (
			<Modal ref="zoomModal">
				<img src={image} />
				<div className="pure-u-g zoomNavigation">
					<a className="pure-u-1-2 prev" onClick={this.handlePrevImage}>Previous</a>
					<a className="pure-u-1-2 next" onClick={this.handleNextImage}>Next</a>
				</div>
			</Modal>
		)
	}
}

export default ZoomModal
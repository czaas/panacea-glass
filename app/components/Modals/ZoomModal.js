import React from 'react'
import Modal from 'boron/ScaleModal'

class ZoomModal extends React.Component {

	constructor(){
		super()
		this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
	}

	componentWillReceiveProps (){
		// This needs to be here so when the modalState is passed down this component will know to popup	
	}

	render() {

		if(this.props.modalState.shouldShow === "showModal"){
			this.refs.zoomModal.show()
		}

		return (
			<Modal ref="zoomModal">
				<img src={this.props.modalState.image} />
			</Modal>
		)
	}
}

export default ZoomModal
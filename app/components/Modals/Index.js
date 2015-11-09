import React from 'react'

import ContactModal from './ContactModal'
import ZoomModal from './ZoomModal'

class Modals extends React.Component {
	render(){
		return (
			<div>	
				<ContactModal />
				<ZoomModal />
			</div>
		)
	}
}

export default Modals
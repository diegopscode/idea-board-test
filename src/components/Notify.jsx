import React from 'react'

const Notify = ({ show }) => (
    show &&
	<div className="notify">
		<div className="notify-alert">All changed saved!</div>
	</div>
)

export default Notify

import React from 'react'

const Card = ({ title, text }) => (
	<div className="card card-idea">
        <div className="card-content">
            <div className="card-title">
                <input type="text" value={title}/>
            </div>
            <div className="card-text">
                <textarea type="text" value={text}/>
            </div>
        </div>
        {/* <a className="card-button-close">X</a> */}
	</div>
)

export default Card

import React from 'react'

const updateData = () => {

}

const Card = ({ index, title, text, autoFocus, onRemove, onChange, onBlur }) => (
    <div className="card card-idea">
        <div className="card-content">
            <div className="card-title">
                <input type="text" name="title" className="card-input" value={title} onChange={e => onChange(e.target, index)} autoFocus={autoFocus} onBlur={onBlur} />
            </div>
            <div className="card-text">
                <textarea type="text" name="text" rows="8" className="card-input" value={text} onChange={e => onChange(e.target, index)} onBlur={onBlur} />
            </div>
        </div>
        <a className="card-button-close" onClick={() => onRemove(index)}>X</a>
    </div>
)

export default Card

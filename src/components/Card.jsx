import React from 'react'
import classNames from 'classnames'

const Card = ({ index, title, text, autoFocus, onRemove, onChange, onBlur }) => (
    <div className={classNames("card card-idea", { active: autoFocus })}>
        <div className="card-content">
            <div className="card-title">
                <input
                    type="text"
                    name="title"
                    className="card-input"
                    placeholder="Enter a title"
                    value={title} onChange={e => onChange(e.target, index)}
                    autoFocus={autoFocus} onBlur={onBlur}
                />
            </div>
            <div className="card-text">
                <textarea
                    type="text"
                    name="text"
                    rows="8"
                    className="card-input"
                    placeholder="Describe your idea"
                    value={text} onChange={e => onChange(e.target, index)}
                    onBlur={onBlur}
                />
            </div>
        </div>
        <a className="card-button-close" onClick={() => onRemove(index)}>&times;</a>
    </div>
)

export default Card

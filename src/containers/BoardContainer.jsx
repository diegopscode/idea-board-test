import React, { Component } from 'react'

import IdeaContainer from './IdeaContainer'

class BoardContainer extends Component {

    render() {
        return (
            <div className="board-container">
                <div className="container">
                    <IdeaContainer />
                </div>
            </div>
        )
    }
}

export default BoardContainer
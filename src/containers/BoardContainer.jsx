import React, { Component } from 'react'
import { inject, observer } from "mobx-react"

import IdeaContainer from './IdeaContainer'

@inject("BoardStore")
@observer
class BoardContainer extends Component {

    onAddIdea = () => this.props.BoardStore.add()

    render() {
        return (
            <div className="board-container">
                <div className="container">
                    <div className="board-filter">
                        <button className="button" onClick={this.onAddIdea}>New Idea</button>
                    </div>

                    <IdeaContainer />
                </div>
            </div>
        )
    }
}

export default BoardContainer
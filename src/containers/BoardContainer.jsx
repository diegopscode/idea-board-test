import React, { Component } from 'react'
import { inject, observer } from "mobx-react"

import IdeaContainer from './IdeaContainer'
import Notify from '@/components/Notify'

@inject("BoardStore")
@observer
class BoardContainer extends Component {

    onAddIdea = () => this.props.BoardStore.add()

    render() {
        const { notify } = this.props.BoardStore

        return (
            <div className="board-container">
                <div className="container">
                    <div className="board-filter">
                        <button className="button" onClick={this.onAddIdea}>New Idea</button>
                        <Notify show={notify} />
                    </div>

                    <IdeaContainer />
                </div>
            </div>
        )
    }
}

export default BoardContainer
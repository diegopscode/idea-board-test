import React, { Component } from 'react'
import { inject, observer } from "mobx-react"

import Card from '@/components/Card'

@inject("BoardStore")
@observer
class IdeaContainer extends Component {

    componentDidMount() {
    }

    renderList = (items) => {
        return items.map(item => (
            <div className="idea-item">
                <Card {...item} />
            </div>
        ))
    }

    render() {
        const { BoardStore } = this.props
        const { board } = BoardStore

        return (
            <div className="idea-container">
                <div className="idea-list">
                    {this.renderList(board)}
                </div>
            </div>
        )
    }
}

export default IdeaContainer
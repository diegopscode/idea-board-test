import React, { Component } from 'react'
import { inject, observer } from "mobx-react"

import Card from '@/components/Card'

@inject("BoardStore")
@observer
class IdeaContainer extends Component {

    componentDidMount() {
    }

    renderList = (items) => {
        return items.map(item => <Card {...item} />)
    }

    render() {
        const { BoardStore } = this.props
        const { board } = BoardStore

        return (
            <div className="idea-container">
                {this.renderList(board)}
            </div>
        )
    }
}

export default IdeaContainer
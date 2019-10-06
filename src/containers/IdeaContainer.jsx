import React, { Component } from 'react'
import { inject, observer } from "mobx-react"

import Card from '@/components/Card'

@inject("BoardStore")
@observer
class IdeaContainer extends Component {

    componentDidMount() {
        this.props.BoardStore.loadStorage()
    }

    onRemoveIdea = (index) => this.props.BoardStore.remove(index)
    onUpdateIdea = (item, index) => this.props.BoardStore.update(item, index)
    onSaveStorage = () => this.props.BoardStore.saveStorage()

    renderList = (items) => {
        return items.map((item, index) => (
            <div className="idea-item" key={index}>
                <Card {...item}
                    index={index}
                    onRemove={this.onRemoveIdea}
                    onChange={this.onUpdateIdea}
                    onBlur={this.onSaveStorage}
                />
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
import { observable, computed, action } from "mobx"

class BoardStore {
    @observable board = [
        { title: "teste 1", text: "..." },
        { title: "teste 2", text: "..." },
        { title: "teste 3", text: "..." },
        { title: "teste 4", text: "..." }
    ]

    @action
    add(idea) {
        this.board.push(idea)
    }

    @action
    remmove(idea) {
        let index = this.board.findIndex(item => item.id === idea)
        if(index) this.board.slice(index, 1)
    }
    
    @computed 
    get boardSize() {
        return this.board.length
    }
}

export default new BoardStore()
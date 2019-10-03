import { observable, computed, action } from "mobx"

class BoardStore {
    @observable board = []

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
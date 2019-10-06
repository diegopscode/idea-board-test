import { observable, computed, action } from "mobx"

class BoardStore {
    @observable board = []

    newIdea = {
        title: '',
        text: '',
        autoFocus: true
    }

    @action
    add() {
        this.board.push(this.newIdea)
    }

    @action
    update(input, indexIdea) {
        this.board[indexIdea][input.name] = input.value
    }

    @action
    remove(indexIdea) {
        this.board.splice(indexIdea, 1)
    }

    @action
    loadStorage() {
        this.board = JSON.parse(window.localStorage.getItem("USER_BOARDS"))
    }

    @action
    saveStorage() {
        window.localStorage.setItem("USER_BOARDS", JSON.stringify(this.board))
    }
    
    @computed 
    get boardSize() {
        return this.board.length
    }
}

export default new BoardStore()
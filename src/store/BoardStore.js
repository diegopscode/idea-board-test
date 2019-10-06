import { observable, computed, action } from "mobx"

class BoardStore {
    @observable board = []
    @observable notify = false

    newIdea = {
        title: '',
        text: '',
        autoFocus: true
    }

    timeoutControl = {}

    @action
    add() {
        this.board.push(this.newIdea)
    }

    @action
    update(input, indexIdea) {
        this.board[indexIdea][input.name] = input.value
        this.board[indexIdea].autoFocus = false
    }

    @action
    remove(indexIdea) {
        this.board.splice(indexIdea, 1)
        this.saveStorage()
    }

    @action
    loadStorage() {
        this.board = JSON.parse(window.localStorage.getItem("USER_BOARDS"))
    }

    @action
    saveStorage() {
        window.localStorage.setItem("USER_BOARDS", JSON.stringify(this.board))
        this.showNotify()
    }

    @action
    showNotify() {
        this.notify = true
        clearTimeout(this.timeoutControl)

        this.timeoutControl = setTimeout(() => {
            this.notify = false
        }, 3000)
    }
    
    @computed 
    get boardSize() {
        return this.board.length
    }
}

export default new BoardStore()
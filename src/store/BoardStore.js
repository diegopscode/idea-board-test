import { observable, computed, action } from "mobx"

class BoardStore {

    @observable books = []
}

export default new BoardStore()
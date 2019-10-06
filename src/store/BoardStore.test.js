import BoardStore from "./BoardStore"

describe("BoardStore", () => {
    it("create new idea", () => {
        const store = new BoardStore()
        store.add()
        expect(store.board.length).toBe(2)
        expect(store.board[0].title).toBe("First idea")
    })

    it("update idea", () => {
        const store = new BoardStore()
        let idea = store.board[0]
        idea.title = "Teste"
        store.update(idea, 0)
        expect(store.board[0].title).toBe("Teste")
    })

    it("remove idea", () => {
        const store = new BoardStore()
        store.remove(0)
        expect(store.board.length).toBe(0)
    })

    it("board localstorage", () => {
        const store = new BoardStore()
        store.saveStorage()

        let storageBoard = store.loadStorage()
        expect(storageBoard[0].title).toBe("First idea")
    })
})
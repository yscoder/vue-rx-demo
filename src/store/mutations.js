export default {
    msgList(state, data) {
        state.msgList = data
    },
    sendMsg() {

    },
    addMsg(state, data) {
        console.log(data)
        state.msgList.push(data)
    }
}

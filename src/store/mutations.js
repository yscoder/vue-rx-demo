export default {
    msgList(state, data) {
        state.msgList = data
    },
    sendMsg() {

    },
    addMsg(state, data) {
        console.log('[Vuex]: submit ', data)
        state.msgList.push(data)
    }
}

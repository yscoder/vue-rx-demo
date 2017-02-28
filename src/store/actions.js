import API from '../api'

export default {
    getMsgs(store) {
        API.getMsgs().then(data => {
            store.commit('msgList', data.list)
        })
    },
    sendMsg(store, msg) {
        store.commit('sendMsg', msg)
    }
}

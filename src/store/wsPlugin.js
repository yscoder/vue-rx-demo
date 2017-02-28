export default (socket) => {
    return store => {
        socket.addEventListener('message', e => {
            store.commit('addMsg', JSON.parse(e.data))
        })

        store.subscribe(mutation => {
            if (mutation.type === 'sendMsg') {
                console.log(mutation)
                socket.send(JSON.stringify(mutation.payload))
            }
        })
    }
}

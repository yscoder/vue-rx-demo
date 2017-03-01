export default () => {
    const socket = new WebSocket('ws://localhost:3300')

    socket.addEventListener('open', () => {
        console.log('WS已打开!')
    })

    socket.addEventListener('close', () => {
        console.log('WS关闭')
    })

    return store => {
        socket.addEventListener('message', e => {
            store.commit('addMsg', JSON.parse(e.data))
        })

        store.subscribe(mutation => {
            if (mutation.type === 'sendMsg') {
                socket.send(JSON.stringify(mutation.payload))
            }
        })
    }
}

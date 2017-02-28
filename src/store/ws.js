export default (ws) => {
    ws.addEventListener('open', () => {
        console.log('WS已打开!')
    })

    ws.addEventListener('close', () => {
        console.log('WS关闭')
    })

    return store => {
        ws.addEventListener('message', e => {
            store.commit('addMsg', JSON.parse(e.data))
        })

        store.subscribe(mutation => {
            if (mutation.type === 'sendMsg') {
                console.log(mutation)
                ws.send(JSON.stringify(mutation.payload))
            }
        })
    }
}

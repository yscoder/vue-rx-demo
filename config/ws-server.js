const WebSocket = require('faye-websocket')
const EventSource = WebSocket.EventSource
const http = require('http')

const server = http.createServer((req, res) => {
    console.log('ws running!')
})

let clients = []

server.on('upgrade', (request, socket, body) => {
    if (WebSocket.isWebSocket(request)) {
        let ws = new WebSocket(request, socket, body)

        clients.push(ws)

        ws.on('open', e => {
            console.log('[open]')
        })

        ws.on('message', e => {
            const msg = e.data
            clients.forEach(c => c.send(msg))
        })

        ws.on('close', event => {
            console.log('[close]', event.code, event.reason)
            ws = null
        })
    }
})

server.listen(3300)

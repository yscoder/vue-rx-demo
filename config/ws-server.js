const http = require('http')
const WebSocket = require('faye-websocket')
const _remove = require('lodash/remove')

const server = http.createServer((req, res) => {
    console.log('ws running!')
})

let clients = []

server.on('upgrade', (request, socket, body) => {
    if (WebSocket.isWebSocket(request)) {
        const ws = new WebSocket(request, socket, body)

        clients.push(ws)

        ws.on('open', e => {
            console.log('[open]')
        })

        ws.on('message', e => {
            const msg = e.data
            clients.forEach(client => client.send(msg))
        })

        ws.on('close', e => {
            console.log('[close]', e.code, e.reason)
            _remove(clients, client => client === ws)
        })
    }
})

server.listen(3300)

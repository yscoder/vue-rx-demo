const socket = new WebSocket('ws://localhost:3300')

socket.addEventListener('open', () => {
    console.log('WS已打开!')
})

socket.addEventListener('close', () => {
    console.log('WS关闭')
})

export default socket

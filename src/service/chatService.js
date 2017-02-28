import API from '../api'
import { Observable } from 'rxjs/Observable'
import ws from '../client'

ws.addEventListener('open', () => {
    console.log('WS已打开!')
})

ws.addEventListener('close', () => {
    console.log('WS关闭')
})

ws.addEventListener('message', e => {
    console.log(e.data)
    setItem(JSON.parse(e.data))
})

// const _CACHE = {}

const reducer = (state, payload) => {
    return state.concat(payload)
}

export const data$ = Observable.fromPromise(API.getMsgs().then(data => {
    return data.list
})).merge(reducer)

const setItem = item => {
    // data$ = data$.concat(item)
    // console.log(_CACHE.msgList$)
}

export const send = item => {
    ws.send(JSON.stringify(item))
}


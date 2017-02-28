import API from '../api'
import { Observable } from 'rxjs/Observable'
import socket from '../client'

socket.addEventListener('message', e => {
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
    socket.send(JSON.stringify(item))
}


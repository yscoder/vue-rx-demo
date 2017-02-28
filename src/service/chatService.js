import API from '../api'
import { Observable } from 'rxjs/Observable'
// import { Subject } from 'rxjs/Subject'
// import socket from '../client'

import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/dom/webSocket'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/merge'
import 'rxjs/add/observable/range'
import 'rxjs/add/operator/mergeAll'
import 'rxjs/add/operator/toArray'

let source$ = Observable.fromPromise(API.getMsgs().then(data => data.list))
let added$ = Observable.webSocket('ws://localhost:3300')
added$.subscribe(
    (msg) => {
        console.log(msg)
    },
    (err) => console.log(err),
    () => console.log('complete')
)

export const data$ = Observable.of(source$, added$).toArray()
// console.log(data$)

export const send = item => {
    added$.next(JSON.stringify(item))
}

// socket.addEventListener('message', e => {
//     console.log(e.data)
//     added$.next(JSON.parse(e.data))
// })

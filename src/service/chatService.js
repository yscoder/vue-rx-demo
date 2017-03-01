import API from '../api'
import { Observable } from 'rxjs/Observable'
// import { Subject } from 'rxjs/Subject'

import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/dom/webSocket'
import 'rxjs/add/observable/of'

const cache = {}

const added$ = Observable.webSocket('ws://localhost:3300')
added$.subscribe(
    msg => {
        console.log('[RX]: subscribe ', msg)
        cache.list.push(msg)
    },
    err => console.log(err),
    () => console.log('complete')
)

export const data$ = () => cache.list ? Observable.of(cache.list) : Observable.fromPromise(API.getMsgs().then(data => {
    cache.list = data.list
    return cache.list
}))

export const send = item => added$.next(JSON.stringify(item))

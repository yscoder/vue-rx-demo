import API from '../api'
import { Observable } from 'rxjs/Observable'
// import { Subject } from 'rxjs/Subject'
import Cache from './cache'

import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/observable/dom/webSocket'
import 'rxjs/add/observable/of'

const added$ = Observable.webSocket('ws://localhost:3300')
added$.subscribe(
    msg => {
        console.log('[RX]: subscribe ', msg)
        Cache.update('list', data => {
            data.push(msg)
            return data
        })
    },
    err => console.log(err),
    () => console.log('complete')
)

export const getData = () => Cache.has('list') ? Observable.of(Cache.get('list')) : Observable.fromPromise(API.getMsgs().then(data => {
    Cache.set('list', data.list)
    return Cache.get('list')
}))

export const send = item => added$.next(JSON.stringify(item))

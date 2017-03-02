import axios from 'axios'

const Ajax = axios.create({
    // baseURL: 'https://some-domain.com/api/',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
})

const TO_JSON = res => res.data
const ERROR_HANDLE = res => console.error('ERROR: ', res.status, res.statusText)

const HTTP = (method, args) => {
    return Ajax[method].apply(Ajax, args).then(TO_JSON, ERROR_HANDLE)
}

export const GET = (...args) => HTTP('get', args)
export const POST = (...args) => HTTP('post', args)
export const PUT = (...args) => HTTP('put', args)
export const DELETE = (...args) => HTTP('delete', args)

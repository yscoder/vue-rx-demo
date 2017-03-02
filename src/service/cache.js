const store = new Map()

const set = (k, v) => store.set(k, v)
const get = k => store.get(k)
const has = k => store.has(k)
const remove = k => store.delete(k)
const removeAll = () => store.clear()
const update = (k, cb) => {
    let newVal = cb(store.get(k))
    if(newVal) {
        store.set(k, newVal)
    }
}

export default {
    set,
    get,
    has,
    remove,
    removeAll,
    update
}

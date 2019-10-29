import {EventEmitter} from 'events'

const bus = new EventEmitter()

// console.log(bus)

// 按需导出
export {bus}
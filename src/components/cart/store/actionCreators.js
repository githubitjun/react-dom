import {ADD_GOODS} from './actionTypes'

/**
 * 创建一个一个要触发的action对象
 */
export function addAction(item){
    // 返回的就是一个action对象
    return {
        type:ADD_GOODS,
        goods:item
    }
}

export function asyncAddAction(item){
    // dispatch 是等着异步操作完毕之后，再触发action用得着
    return dispatch => {
        setTimeout(() => {
            dispatch(addAction(item))
        }, 2000)    
    }
}
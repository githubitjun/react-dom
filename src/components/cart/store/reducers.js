import {ADD_GOODS} from './actionTypes'

// 去本地加载购物车中的商品列表
const goodsList = JSON.parse(localStorage.getItem('GOODS') || '[]')

export default function(state = goodsList,action){
    // console.log(action)
    switch (action.type) {
        case ADD_GOODS:
            const AddLIST = JSON.parse(JSON.stringify(state))
            const addGoods = AddLIST.find(item => item.id === action.goods.id)
            if (addGoods) {
                addGoods.num += action.goods.num
            } else {
                AddLIST.push(action.goods)
            }
            return AddLIST

        case 'UPDATE_GOODS':
            const UpdataList = JSON.parse(JSON.stringify(state))
            const updateGoods = UpdataList.find(item => item.id === action.goods.id)
            updateGoods.num = action.goods.newNum

            return UpdataList

        case 'DELETE_GOODS':
            const DELETEList = JSON.parse(JSON.stringify(state))
            const deleteIndex = DELETEList.findIndex(item => item.id === action.id)
            DELETEList.splice(deleteIndex,1)

            return DELETEList
    
        default:
            return state
    }
}
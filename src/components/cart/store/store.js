import {createStore,applyMiddleware,compose } from 'redux'

import thunk from 'redux-thunk';

// 导入 reducers
import reducers from './reducers'

// 创建仓库并且导出
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
))


// 没有集成调试工具的    
// const store = createStore(reducers,applyMiddleware(thunk))

export default store
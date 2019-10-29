import {createStore,applyMiddleware,compose } from 'redux'

import thunk from 'redux-thunk'

// 导入reducers
import reducers from './reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
));

// const store = createStore(
//     reducers, 
//     applyMiddleware(thunk)
// )

// 导出
export default store
import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'

// 导入 counter 下面的仓库
// import store from './components/counter/store/store'

// 导入 cart-react-redux 下面的仓库
import store from './components/cart-react-redux/store/store'

// 导入根组件
import App from './App.jsx'

// 使用ReactDOM的render方法来渲染根组件
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById("root"))
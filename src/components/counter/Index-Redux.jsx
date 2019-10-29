import React, { Component } from 'react'

import store from './store/store'

export default class Index extends Component {
    constructor(){
        super()

        this.state = {
            myCount:store.getState()
        }
    }

    componentWillMount(){
        // subscribe内部使用的就是订阅者-观察模式，他会观察仓库中数据的变化，只要数据发生变化，它的回调函数就会被执行
        store.subscribe(() =>{
            this.setState({
                myCount:store.getState()
            })
        })
    }
    
    getData = () => {
        return dispatch => {
            setTimeout(() => {
                dispatch({type:'DECREMENT',num:3})
            }, 2000);
        }
    }

    minus = () => {
        // store.dispatch({type:'DECREMENT',num:2})

        store.dispatch(this.getData())
    }

    add = () => {
        store.dispatch({type:'INCREMENT',num:2})
    }

    render() {
        return (
            <div>
                仓库此刻的值是：{this.state.myCount}<br/>
                <button onClick={this.minus}>-</button>&nbsp;&nbsp;&nbsp;<button onClick={this.add}>+</button>
            </div>
        )
    }
}

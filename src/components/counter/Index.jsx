import React, { Component } from 'react'

import {connect} from 'react-redux'

class Index extends Component {
    render() {
        return (
            <div>
                仓库此刻的值是：{this.props.count}<br/>
                <button onClick={this.props.asyncMinus}>-</button>&nbsp;&nbsp;&nbsp;<button onClick={this.props.add}>+</button>
            </div>
        )
    }
}

/**
 * 把仓库中的state值映射到组件的props中
 * 
 * @param {*} state 仓库中的数据
 */
const mapStateToProps = (state) => {
    return {
        count:state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add:function(){
            dispatch({type:'INCREMENT',num:2})
        },
        asyncMinus(){
            dispatch( dis => {
                setTimeout(() => {
                    dis({type:'DECREMENT',num:3})
                }, 2000);
            } )
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Index)

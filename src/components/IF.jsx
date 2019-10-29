import React, { Component } from 'react';

// 定义两个函数式组件
function Home(){
    return <div>Home Component</div>
}

function Posts(){
    return <div>Posts Component</div>
}

class IF extends Component {
    constructor(){
        super()

        this.state = {
            componentName:'home'
        }
    }

    render() {
        // 第一种 If  当分支比较多的时候
        /** 
        if (this.state.componentName === 'home'){
            return <Home />
        } else if (this.state.componentName === 'post'){
            return <Posts />
        } else {
            return null
        }
        */
        let Component = null

        if (this.state.componentName === 'home'){
            Component = <Home />
        } else if (this.state.componentName === 'post'){
            Component = <Posts />
        }

        return <div>
            <button onClick={() => {this.setState({componentName:'home'})}}>home</button>&nbsp;&nbsp;
            <button onClick={() => {this.setState({componentName:'post'})}}>post</button>
            {/* {Component} */}

            {/* 第二种 三目运算符 */}
            {/* { this.state.componentName === 'home' ? <Home /> : <Posts />} */}

            {/* 第三种 与运算 && 可以认为是vue中的v-if */}
            { this.state.componentName === 'home' && <Home/>}
            { this.state.componentName === 'post' && <Posts/>}
        </div>
    }
}

export default IF;
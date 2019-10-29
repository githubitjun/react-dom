import React from 'react'

class StateComponent extends React.Component{
    // 如果有状态组件要想在构造器中接收父组件传递过来的值，就必须通过props这个形参
    constructor(props){
        super()

        // 相当于Vue中的data
        this.state = {
            nickname:'小胖'
        }

        this.clickMe2 = this.clickMe2.bind(this)
    }

    clickMe(){
        console.log("11111",this)

        // this.props.name = '青翼蝠王'

        this.setState({
            nickname:'大胖'
        })
    }

    clickMe2(){
        this.setState({
            nickname:'匡衡'
        })
    }

    clickMe3 = () => {
        // console.log(this)
        this.setState({
            nickname:'陈文涛'
        })
    }

    sendValueToParent = () => {
        // console.log(this)
        this.props.callback(this.state.nickname)
    }

    render(){
        // console.log(this)
        return <div>
                我是有状态组件---{this.props.name}---{this.props.age}<br/>
                我内部的数据---{this.state.nickname}<br/>
                <button onClick={this.clickMe.bind(this)}>更改值方式1</button>
                <button onClick={this.clickMe2}>更改值方式2</button>
                <button onClick={this.clickMe3}>更改值方式3</button>
                <button onClick={this.sendValueToParent}>子组件传值给父组件</button>
        </div>
    }
}

export default StateComponent
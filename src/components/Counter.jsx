import React from 'react'

export default class Counter extends React.Component{
    constructor(props){
        super()

        this.state = {
            count:props.initCount
        }
    }

    change = () => {
        this.setState({
            count:this.state.count + 1
        },() => {
            this.props.callback(this.state.count)
        })
    }

    render(){
        return <div>
            {/* 我是子组件---{this.props.initCount} */}
            我是子组件---{this.state.count}
            <button onClick={this.change}>+1</button>
        </div>
    }
}
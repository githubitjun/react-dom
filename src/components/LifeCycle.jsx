import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(){
        super()

        console.log('----constructor----')
        this.state = {
            name:'小胖'
        }
    }

    componentWillMount(){
        console.log('------componentWillMount-----')
    }

    changeName = () => {
        this.setState({
            name:'匡匡'
        })
    }

    render() {
        console.log('----render----')
        return (
            <div>
                演示生命周期---{this.state.name}
                <span id="testId">test</span>
                <button onClick={this.changeName}>更改name</button><br/>
                <span>{this.props.age}</span>
            </div>
        )
    }

    componentDidMount(){
        // console.log(document.getElementById("testId"))
        console.log('------componentDidMount-----')
    }

    /***********以下是运行阶段的生命周期钩子******************/
    componentWillReceiveProps(props){
        console.log(props)
        console.log('----componentWillReceiveProps----')
    }

    shouldComponentUpdate(){
        return true
    }

    componentWillUpdate(){
        console.log('------componentWillUpdate-----')
    }

    componentDidUpdate(){
        console.log('------componentDidUpdate-----')
    }

    /********以下是卸载阶段的生命周期钩子**************** */
    componentWillUnmount(){
        console.log('----good bye----')
    }
}

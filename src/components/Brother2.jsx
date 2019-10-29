import React from 'react'

import {bus} from '../common/bus'

export default class Brother2 extends React.Component{
    constructor(){
        super()

        this.state = {
            name:'',
            age:0
        }

        bus.on('myevent',data => {
            // console.log(data)
            // this.setState({
            //     name:data.name,
            //     age:data.age
            // })
            this.setState(data)
        })
    }

    render(){
        return <div>
            我是兄弟组件2 ---{this.state.name}---{this.state.age}
        </div>
    }
}
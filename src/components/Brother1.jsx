import React, { Component } from 'react';

import {bus} from '../common/bus'

class Brother1 extends Component {
    sendValueToBrother2 = () => {
        // console.log("22222222")
        bus.emit('myevent',{name:'小明',age:30})
    }

    render() {
        return (
            <div>
                我是兄弟组件1<br/>
                <button onClick={this.sendValueToBrother2}>传值给兄弟2</button>
            </div>
        );
    }
}

export default Brother1
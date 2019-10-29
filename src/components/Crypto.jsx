import React, { Component } from 'react'

import axios from 'axios'
import {md5} from '../common/md5'

export default class Crypto extends Component {
    login = () => {
        axios.post('http://127.0.0.1:3000/api/login',{
            username:'zhangsan',
            password:md5("112233"+"!@#ZXC()")
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.login}>发送网络请求</button>
            </div>
        )
    }
}

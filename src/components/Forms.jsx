import React, { Component } from 'react';

class Forms extends Component {
    constructor(){
        super()

        this.state = {
            username:'zhangsan',
            password:''
        }
    }

    handleChange = e => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        this.setState({
            // username:e.target.value
            // http://es6.ruanyifeng.com/#docs/object#%E5%B1%9E%E6%80%A7%E5%90%8D%E8%A1%A8%E8%BE%BE%E5%BC%8F
            [e.target.name]:e.target.value
        })
    }

    // handleChange2 = e => {
    //     this.setState({
    //         password:e.target.value
    //     })
    // }

    handleSubmit = (e) => {
        // 拿到input的值
        e.preventDefault()

        console.log(this.state)
        // console.log("1111111111",document.getElementById('usernameId').value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        用户名:
                        <input value={this.state.username} name="username" onChange={this.handleChange} type="text"/>
                    </label>
                    <br/>
                    <label htmlFor="">
                        密码:
                        <input value={this.state.password} name="password" onChange={this.handleChange} type="password"/>
                    </label>
                    <br/>
                    <input type="submit" value="登录"/>
                </form>
            </div>
        );
    }
}

export default Forms;
import React, { Component } from 'react'

export default class Refs extends Component {
    constructor(){
        super()

        this.fileRef = React.createRef()
    }

    componentDidMount(){
        console.log(this.refs.inputRef)
        this.refs.inputRef.focus()
    }

    upload = () => {
        // console.log(this.fileRef.current)
        const file = this.fileRef.current.files[0]

        console.log(file)
    }

    render() {
        return (
            <div>
                <input id="testId" ref="inputRef" type="text"/><br/>
                <input ref={this.fileRef} type="file"/><br/>
                <button onClick={this.upload}>上传文件</button>
            </div>
        )
    }
}

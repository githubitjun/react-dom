import React from 'react'

export default class Chat extends React.Component{
    connect = () => {
         // 打开一个 web socket，并且会自动连接
         const host = document.getElementById("hostId").value
         var ws = new WebSocket(host)

         this.ws = ws

         ws.onopen = function()
         {
            // Web Socket 已连接上，使用 send() 方法发送数据
            ws.send("发送数据");
         };
          
         ws.onmessage = function (evt) 
         { 
            var received_msg = evt.data;
            console.log(received_msg)
         };
          
         ws.onclose = function()
         { 
            // 关闭 websocket
            console.log('---close---')
         };
    }

    // 发送消息
    sendMsg = () => {
        const content =  document.getElementById("messageId").value
        this.ws.send(content)
    }

    render(){
        return <div>
            <p>聊天</p>
            <input id="hostId" type="text" />&nbsp;<button onClick={this.connect}>连接</button>&nbsp;<button onClick={this.connect}>关闭</button><br/><br/>
            <textarea id="messageId" rows="15" cols="50"></textarea>
            <button onClick={this.sendMsg}>发送</button>
        </div>
    }
}
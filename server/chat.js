const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8081 });

// connection 是指当客户端连接服务端的时候执行
wss.on('connection', function connection(ws) {
  console.log('server---connection')
  // ws是指某一个客户端
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    if (message.includes('吃')){
        ws.send('我吃了15块的鸡腿饭，你吃了吗？');
    } else if(message.includes('hi')){
        ws.send('你好');
    } else {
        ws.send('你说啥，我听不懂哦~');
    }
  });
 
  ws.send('welcome to WebSocket.Server');
});
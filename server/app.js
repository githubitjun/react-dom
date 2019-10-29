const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded   username=zhangsan&password=123
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json  {"username":"张三","password":123}
app.use(bodyParser.json())

app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","Content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    
    next()
})

app.post('/api/login',(req,res) => {
    console.log(req.body)

    res.json({
        status:0,
        message:'登录成功!'
    })
})

app.listen(3000)
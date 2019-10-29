import React,{useState,useEffect} from 'react'

function TestHooks() {
    const [count,setCount] = useState(10)

    const [name,setName] = useState('陈世美')

    // 初次渲染完毕和数据发生了变化之后，都会触发
    useEffect(() => {
        console.log('-----useEffect-----')
        document.title = '测试Hook'
    },[name])

    return <div>
        你点击了我:{count}次<br/>
        <button onClick={() => {setCount(count + 1)}}>+1</button><br/><br/>

        我原先叫:{name}<br/>
        <button onClick={() => {setName('宋世美')}}>到了现代改名了</button>
    </div>
}

export default TestHooks
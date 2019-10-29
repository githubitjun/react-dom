import React from 'react'

import {useState,useEffect} from 'react'

export default function Hoocks(){
    const [count,setCount] = useState(10)

    useEffect(() => {
        setTimeout(() => {
            setCount(20)
        }, 3000);
    },[])

    return <div>
        test Hoocks&nbsp;&nbsp;&nbsp;
        <span>{count}</span><br/>
        <button onClick={() => {setCount(count+1)}}>+1</button><br/>
        <button>更改name</button>
    </div>
}
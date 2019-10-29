import React from 'react'

// function NoStateComponent(props){
function NoStateComponent({name,age}){
    // console.log("NoStateComponent---",props)
    return <div>我是无状态组件---{name}---{age}</div>
}

// cjs esm
export default NoStateComponent
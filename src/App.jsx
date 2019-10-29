import React from 'react'

const styleObj = {fontSize:50+'px',color:'purple'}

// 导入
import './static/css/App.css'

// 导入子组件
import NoStateComponent from './components/NoStateComponent'
import StateComponent from './components/StateComponent'
import Brother1 from './components/Brother1'
import Brother2 from './components/Brother2'
import Counter from './components/Counter'
import Hooks from './components/Hooks'
import Crypto from './components/Crypto'
import Chat from './components/Chat'
import LifeCycle from './components/LifeCycle'
import TestHooks from './components/TestHooks'
import IF from './components/IF'
import For from './components/For'
import Forms from './components/Forms'
import Refs from './components/Refs'
import PropTyps from './components/PropsType'

// 以下是路由
// import Index from './components/router/Index'
// import Index from './components/router/nested/Index'

// 以下是Redux
// import Index from './components/counter/Index'
// import Index from './components/cart/Index'
import Index from './components/cart-react-redux/Index'

class App extends React.Component{
    constructor(){
        super()

        this.state = {
            age:18,
            isShow:true
        }
    }

    render222(){
        // 这是一个注释
        return (
            <div id="hello-world">
                {/* 注释  */}
                <span style={{fontSize:30+'px',color:'red'}}> Hello World 1</span>  <br/> 
                {/* style={} 中的 {} 是一个非字符串的标志 */}
                <span style={styleObj}> Hello World 2</span>  <br/> 
                <span className="test1">123</span>
            </div>
        )
    }

    // 实例属性
    getValue = (val) => {
        console.log('---App---getValue---',val)
    }

    render111(){
        const cat = {
            cat_name:'蓝猫',
            cat_age:30
        }
        return <div>
            <NoStateComponent name="张三丰" age={18}/><br/><br/><br/>
            <StateComponent callback={this.getValue} cat={cat} name="金毛狮王" age={36}/>
        </div>
    }

    render(){
        return <div>
            {/* <button onClick={() => {this.setState({age:30})}}>更改age的值，然后在传递</button>
            <hr/> */}
            {/* <Brother1 />
            <hr/>
            <Brother2 /> */} 
            {/* <Counter callback={this.getValue} initCount={10}/> */}
            {/* <Hooks /> */}

            {/* <Crypto /> */}
            {/* <Chat /> */}
            {/* {
                this.state.isShow ? <LifeCycle age={this.state.age}/> : null
            } */}
            {/* <TestHooks /> */}

            {/* <IF /> */}
            {/* <For /> */}

            {/* <Index/> */}

            {/* <Forms /> */}
            {/* <Refs /> */}

            {/* <PropTyps name="小胖" age={15}/> */}
            {/* <PropTyps name="小胖"/> */}
            <Index />
        </div>
    }
}

export default App
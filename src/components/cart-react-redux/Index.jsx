import React, { Component } from "react";

import './Index.css'

import {HashRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'

import GoodsList from './GoodsList'
import Cart from './Cart'
import NotFound from '../router/404'

import 'element-theme-default'

// 建立组件和仓库之间的关联关系
import {connect} from 'react-redux'

class Index extends Component {
  componentDidMount(){
    window.onbeforeunload = () => {
      localStorage.setItem('GOODS',JSON.stringify(this.props.goodsList))
    }
  }

  render() {
    return (
      <Router>
        <h2 className="title">
          黑马买买买-商城
          <p>
            <Link to="/goodslist">
              商品列表
            </Link>
            <Link to="/cart">
                购物车{this.props.count > 0 && <span>({this.props.count})</span>}
            </Link>
          </p>
        </h2>
        <div className="index-container">
          <Switch>
            <Route path="/goodslist" component={GoodsList} />
            <Route path="/cart" component={Cart} />
            <Redirect exact from='/' to="/goodslist"/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log("----Index-----")
  // 定义的一个内部函数
  const calcCount = () => {
    let totalCount = 0
    state.forEach(item => {
      totalCount += item.num
    })

    return totalCount
  } 

  return {
    count:calcCount(),
    goodsList:state
  }
}

export default connect(mapStateToProps,null)(Index)

import React, { Component } from "react";

import './Index.css'

import {HashRouter as Router,Link,Route,Switch,Redirect} from 'react-router-dom'

import GoodsList from './GoodsList'
import Cart from './Cart'
import NotFound from '../router/404'

import 'element-theme-default'

import store from './store/store'

export default class Index extends Component {
  constructor(){
    super()

    this.state = {
      count:this.calcCount()
    }
  }

  calcCount = () => {
    let totalCount = 0
    store.getState().forEach(item => {
      totalCount += item.num
    })

    return totalCount
  }

  componentDidMount(){
    store.subscribe(() => {
      this.setState({
        count:this.calcCount()
      })
    })

    window.onbeforeunload = () => {
      localStorage.setItem('GOODS',JSON.stringify(store.getState()))
    }
  }

  componentWillUnmount(){
    store.unsubscribe && store.unsubscribe()
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
                购物车{this.state.count > 0 && <span>({this.state.count})</span>}
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

import React, { Component } from 'react';

import NewsList from './NewsList'
import FoodsList from './FoodsList'
import NewsDetail from './NewsDetail'
import NotFound from './404'

import {HashRouter as Router ,Link,Route,Switch,Redirect} from 'react-router-dom'

class Index extends Component {
    render() {
        return (
            <Router>
                <Link to="/newslist">新闻列表</Link>&nbsp;
                <Link to="/foodslist">食品列表</Link>

                <hr/>
                <Switch>
                    {/* <Route exact path="/" component={NewsList}/> */}
                    <Route path="/newslist" component={NewsList}/>
                    <Route path="/foodslist" component={FoodsList}/>
                    {/* params 传参 */}
                    {/* <Route path="/newsdetail/:newsId" component={NewsDetail}/> */}
                    {/* query 传参 */}
                    <Route path="/newsdetail" component={NewsDetail}/>
                    <Redirect exact from="/" to="/newslist"/>

                     {/* 一定要放在所有规则的最后哦~ */}
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default Index;
import React, { Component } from 'react'

import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import Login from './Login'
import Layout from './Layout'
import NotFound from '../404'

export default class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/layout" component={Layout}/>
                    <Redirect exact from="/" to="/login"/>

                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

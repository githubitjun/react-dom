import React, { Component } from "react";

import { Link, Route, Switch, Redirect } from "react-router-dom";

import "./Layout.css";

import NotFound from '../404'

function Menu1() {
  return <div style={{ color: "purple" }}>我是菜单1</div>;
}

function Menu2() {
  return (
    <div style={{ color: "hotpink" }}>
      <br />
      <br />
      我是菜单2
    </div>
  );
}

class Layout extends Component {
  render() {
    return (
      <div>
        <div className="layout">
          <div className="left">
            左边菜单
            <br />
            <br />
            <Link to="/layout/menu1">菜单1</Link>
            <br />
            <br />
            <Link to="/layout/menu2">菜单2</Link>
          </div>
          <div className="right">
            <div className="content">
              <Switch>
                <Route path="/layout/menu1" component={Menu1} />
                <Route path="/layout/menu2" component={Menu2} />

                <Redirect exact from="/layout/" to="/layout/menu2" />

                <Route component={NotFound}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;

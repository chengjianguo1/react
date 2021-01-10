import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from './react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/user" component={User}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
/**
 * 路由容器的 Router
 * 路由规则/路由配置 Route
 */
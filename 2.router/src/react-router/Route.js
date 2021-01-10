import React from 'react';
import RouterContext from './RouterContext';
/**
 * 1.获取到context中的值
 * 2.匹配路由规则 里的path 是否和当前地址中的url地址是否相等
 * 如果相等，就渲染component,如果不相等，就不渲染任何东西
 */
class Route extends React.Component{
    static contextType = RouterContext
    render(){
       const {history,location} = this.context;
       const {path,component:RouteComponent} = this.props;
       const match = location.pathname === path;
       let renderElement = null;
       let routeProps = {history,location,match};
       if(match){
          renderElement = <RouteComponent {...routeProps}/>;
       }
       return renderElement;
    }
}
export default Route;
import {Route} from 'dva/router';

/**
 * 把一个普通的路由配置对象变成Route组件
 */
export function renderRoutes(routeConfig){
   return routeConfig.map(({path,component:RouteComponent,exact,routes})=>(
    <Route path={path} key={path} exact={exact} render={(routeProps)=>{
        return <RouteComponent {...routeProps} routes={routes}/>
    }}/>
   ));
}
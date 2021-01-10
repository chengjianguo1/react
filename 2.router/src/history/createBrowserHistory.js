
function createBrowserHistory(){debugger
    const globalHistory = window.history;
    const listeners = [];
    let action;
    let state;
    function go(n){
        globalHistory.go(n);
    }
    function goBack(n){
        go(-1)
    }
    function goForward(n){
        go(1)
    }
    function listen(listener){
        listeners.push(listener);
        return ()=>{
            let idx = listeners.indexOf(listener);
            listeners.splice(idx,1);
        }
    }
    function notify(newHistory){
        Object.assign(history,newHistory);
        listeners.forEach(listener=>listener(history.location));
    }
    function push(pathname,nextState){
        action='PUSH';
        if(typeof pathname === 'object'){
            state = pathname.state;
            pathname = pathname.pathname;
        }else{
            state=nextState;
        }
        //这是原生的history.pushState
        globalHistory.pushState(state,null,pathname);
        let location = {state,pathname};
        notify({action,location});
    }
    //那onpopstate是那个情况下执行？ globalHistory.go goBack goForward 点回退按钮
    //当你回退或前进的时候会执行 这个监听是浏览自带的，默认支持的
    window.onpopstate = (event)=>{debugger
        //点回退按钮的时候，退到哪是在globalHistory里维护 的。只能取回退之后最新的路径和状态
        notify({action:'POP',location:{pathname:window.location.pathname,state:globalHistory.state}});
    }
    const history = {
       action:'POP',//当前最后一个动作是什么动作 push PUSH  goBack POP
       location:{pathname:window.location.pathname,state:globalHistory.state},
       go,
       goBack,
       goForward,
       push,
       listen,
    }
    return history;
}

export default createBrowserHistory;
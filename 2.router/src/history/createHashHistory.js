/**
 * 1.state的处理 自己维护state
 * 2.历史栈的维护 自己维护一个栈
 */
function createHashHistory(){
    let action;
    let listeners = [];
    let historyStack = [];
    let state;
    function listen(listener){
        listeners.push(listener);
        return ()=>{
            //let idx = listeners.indexOf(listener);
            //listeners.splice(idx,1);// 从找到的位置删除一个
            listeners=listeners.filter(item=>item!==listener);
        }
    }
    window.addEventListener('hashchange',()=>{
        let pathname = window.location.hash.slice(1);//user
        //把新的action和pathname赋值给history.action history.location
        Object.assign(history,{action,location:{pathname}});
        listeners.forEach(listener=>listener(history.location));
    });
    function push(pathname){
        action='PUSH';
        //给hash赋值的是不需要加#，取的是带#
        window.location.hash = pathname;
    }
    function go(){

    }
    function goBack(){
        go(-1);
    }
    function goForward(){
        go(1);
    }
    //在这里我们这个history 跟window.history没有关系
    //window.history是一个html5 api.有兼容 性问题。但是hash是全兼容的
    const history = {
       action:'POP',//当前最后一个动作是什么动作 push PUSH  goBack POP
       location:{pathname:'/',state:undefined},
       go,
       goBack,
       goForward,
       push,
       listen,
    }
    window.location.hash = window.location.hash?window.location.hash.slice(1):'/';
    return history;
}

export default createHashHistory;
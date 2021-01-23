import * as effectTypes from './effectTypes';
/**
 * 执行或者说启动saga的方法
 * 我们可以会获取 仓库状态 getState，有可能向仓库派 动作 dispatch ,还有可能监听动作 
 * @param {*} saga  可以传过来的是一个生成器，也可能是一个迭代器
 */
function runSaga(env,saga){
    let {dispatch,channel} = env;
    //如果是函数，说明它是生成器，否则 就是迭代器
    let it = typeof saga === 'function'? saga():saga;//执行生成器，返回迭代器
    function next(value){
        let {value:effect,done} = it.next(value);//effect={type:TAKE,actionType:ASYNC_ADD};
        if(!done){
            //如果没有结束的话，判断effect的类型，如果是的话，说明是一个迭代器
            if(typeof effect[Symbol.iterator]==='function'){
                runSaga(env,effect);//就可以把它传给runSaga去单独执行
                next();//不会阻塞当前的saga继续next执行
            }else{
                switch(effect.type){
                    case effectTypes.TAKE://我想等待有人向仓库派发ASYNC_ADD类型的动作
                       //如果有人向仓库派发动作了,就会执行channel.put(action);
                       //它会等待动作发生，如果等不到到，就卡在这里了
                        channel.take(effect.actionType,next); 
                        break; 
                     case effectTypes.PUT://put这个effect不会阻塞当前的saga执行，派发完成后，会立刻向下执行
                        dispatch(effect.action); 
                        next();   
                        break;
                     case effectTypes.FORK:
                         runSaga(env,effect.saga);//开启一个新的子进程去运行saga
                         next();//它不会阻塞当前的saga继续执行
                         break;   
                    default:
                        break;        
                 }
            }
        }
    }
    next();
}
export default runSaga
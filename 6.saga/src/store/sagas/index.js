import {take,put,takeEvery} from '../../redux-saga/effects';
import * as types from '../action-types';
import watcher_add from './counter';
//rootSaga如何执行的，如何启动，如何运行的，在运行中是如何处理和响应接收到的指令的?
//worker saga

//根saga
//我们项目再大，我们的根rootSaga只有一个
//all的意思是同时启动多个saga，要等所有的saga 全部完成后当前的rootSaga才会完成
//类似Promise.all
function *rootSaga(){
     yield watcher_add();
}

export default rootSaga;
//rootSaga只负责用takeevery用非阻塞的方式去创建监听这样吗 
/* function *rootSaga(){
    for(let i=0;i<3;i++){
        //等待有人向仓库派发一个ASYNC_ADDd这样的命令,等到了就继续执行，等不到就卡在这里
        //take只等一次。
        //它们都是普通函数，执行后会返一个普通的指令对象
        //这个对像相当于一个普通对象的指令，指挥saga中间件做一些事情
        yield take(types.ASYNC_ADD);
        //向仓库派发一个动作，让仓库调用store.dispatch({type:types.ADD});
        //yield put({type:types.ADD});
        yield add();//产出了一个iterator
        console.log('rootSaga next');
    }
 } */
 /**
  * rootSaga 、 watcherSaga、workerSaga这里怎么对应 

  */
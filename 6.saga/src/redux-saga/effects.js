import * as effectTypes from './effectTypes';
export function take(actionType){
    //返回值是一个普通对象，我们称为指令对象
    return {type:effectTypes.TAKE,actionType};
}
export function put(action){
    return {type:effectTypes.PUT,action};
}
/**
 * 以新的子进程的方式执行saga
 * @param {*} saga 
 */
export function fork(saga){
    return {type:effectTypes.FORK,saga}
}
/**
 * 等待每一次的actionType派发，然后以单独的子进程去调用saga
 * @param {*} actionType 
 * @param {*} saga 
 */
export function takeEvery(actionType,saga){
  function * takeEveryHelper(){
      while(true){
        yield take(actionType);//等待一个新的动作类型
        yield fork(saga);//开启一个新的子进程执行saga
      }
  }
  //会开一个新的子进程执行 takeEveryHelper这个saga
  return fork(takeEveryHelper);
}




// /saga最难以理解的一部分
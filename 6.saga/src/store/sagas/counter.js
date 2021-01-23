
import {take,put,takeEvery} from '../../redux-saga/effects';
import * as types from '../action-types';

function * worker_add(){
    yield put({type:types.ADD});
}
//watcherSaga负责 监听ASYNC_ADD,监听到之后会调用worker_add来进行具体的工作
function * watcher_add(){
    yield takeEvery(types.ASYNC_ADD,worker_add);
}
export default watcher_add;
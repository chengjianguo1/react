import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
let sagaMiddleware = createSagaMiddleware();
let store = applyMiddleware(sagaMiddleware)(createStore)(rootReducer);
//启动一个saga执行
sagaMiddleware.run(rootSaga);
export default store;
/**
 * 下课后如果你不熟悉co库，马上去复习
 */
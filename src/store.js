import {createStore, applyMiddleware} from 'redux';
import rootReduce from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReduce, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
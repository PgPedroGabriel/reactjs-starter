import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootRedux from './rootRedux';
import rootSaga from './rootSaga';

const sagaMiddlware = createSagaMiddleware();
const store = createStore(rootRedux, applyMiddleware(sagaMiddlware));

sagaMiddlware.run(rootSaga);

export default store;

import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import persistReducers from './persistReducers';
import rootRedux from './rootRedux';
import rootSaga from './rootSaga';

const sagaMiddlware = createSagaMiddleware();
const store = createStore(
  persistReducers(rootRedux),
  applyMiddleware(sagaMiddlware)
);

const persistor = persistStore(store);

sagaMiddlware.run(rootSaga);

export { store, persistor };

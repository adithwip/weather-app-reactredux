import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';

import rootReducer from '../reducers/index'; // Reducer ready soon

const store = createStore(rootReducer, applyMiddleware(ReduxPromise));

export default store;
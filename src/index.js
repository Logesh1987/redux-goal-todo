import React from 'react';
import ReactDOM from 'react-dom';
import {createStore } from 'redux'
import {Provider} from 'react-redux';
import './index.css';
import ConnectedApp from './components/App';
import combineReducers from './reducers/index';
import applyMiddleware from './middleware/index';

const store = createStore(combineReducers, applyMiddleware)

ReactDOM.render(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
    , document.getElementById('app'))

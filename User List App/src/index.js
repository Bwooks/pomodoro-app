/**
 * Created by Owner on 1/4/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './stylesheets/main.css';
import App from './components/App';
import {reducers} from './reducers/index';

//create initial state
let users = [];
for(let i = 1;i<=10;i++){
  users.push({
    id:i,
    username:`John ${i}`,
    job:`Employee ${i}`
  });
}
const defaultState = {
  users:{
    list:users
    }
  };
const store = createStore(reducers,defaultState);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,document.getElementById('app'));

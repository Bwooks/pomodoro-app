import {createStore,compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

//import data (as opposed to an API that serves our data)
import comments from './data/comments';
import posts from './data/posts';

//our initial state
const defaultState = {
	posts,
	comments
};

const store = createStore(rootReducer,defaultState);

export const history = syncHistoryWithStore(browserHistory,store);

export default store;
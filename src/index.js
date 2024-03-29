import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Demo from './Demo';

// Store
import { createStore } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(myReducer);

ReactDOM.render(
    <Provider store={store}>
        <Demo />
    </Provider> , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

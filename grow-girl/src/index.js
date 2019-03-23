import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import App from './App';
import tempReducer from './reducers/tempReducer'


import { createStore } from 'redux'
import {Provider} from 'react-redux';

const store = createStore(tempReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );



ReactDOM.render(
   <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));



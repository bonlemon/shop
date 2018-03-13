// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// redux middleware
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Component
import App from './components/App.jsx';

// reducer
import reducer from './reducers'


// compose middlewares for redux devtools
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

// middleware: create log when action was dispatched
const logger = createLogger();


const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk, logger))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)
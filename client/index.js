// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// redux middleware
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

// Component
import App from './components/App';

// reducer
import reducer from './reducers'


// compose middlewares for redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// middleware: create log when action was dispatched
const logger = createLogger();


const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='' component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)
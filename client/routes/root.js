// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component
import App from './../components/App';
import ContainerPhone from './../containers/Phone';


const RootRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/phones/:id' component={(ContainerPhone)} />
            <Route exact path='/' component={App} />
        </Switch>
    </BrowserRouter>
)

export default RootRouter;
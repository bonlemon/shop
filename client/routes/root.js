// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component
import App from './../components/App';
import ContainerPhone from './../containers/Phone';
import ContainerBasket from './../containers/Basket';


const RootRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/basket' component={ContainerBasket} />
            <Route path='/phones/:id' component={ContainerPhone} />
            <Route path='/' component={App} />
        </Switch>
    </BrowserRouter>
)

export default RootRouter;
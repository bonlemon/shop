// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component
import ContainerPhones from '../containers/Phones';


const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/categories/:id' component={ContainerPhones} />
            <Route exact path='/' component={ContainerPhones} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter;
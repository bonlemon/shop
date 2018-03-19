// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Component
import ContainerPhones from '../containers/Phones';


const AppRouter = () => (
        <Switch>
            <Route path='/categories/:catId' component={ContainerPhones} />
            <Route path='/' component={ContainerPhones} />
        </Switch>
)

export default AppRouter;
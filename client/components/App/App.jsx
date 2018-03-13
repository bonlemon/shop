import React from 'react';
import { Route } from 'react-router-dom';

import { ContainerPhones } from '../containers/Phones';

import './App.scss';


class App extends React.Component {
    render() {
        return (
            <div className="view-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            Sidebar
                        </div>
                        <div className="col-md-9">
                            <Route path='/' component={ContainerPhones} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
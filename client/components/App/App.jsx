import React from 'react';

import Sidebar from '../Sidebar';

import AppRouter from '../../routes/app';

import './App.scss';


class App extends React.Component {
    render() {
        console.log('123')
        return (
            <div className="view-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            <AppRouter />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';

import './Search.scss';


export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchPhone(this.state.value)
    }
    render() {
        return (
            <div className='well blosd'>
                <h3 className='lead'>Quick shop</h3>
                <div className='input-group'>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            onChange={this.handleChange}
                            type='text'
                            className='form-control'
                        />
                    </form>
                    <span className='input-group-btn'>
                        <button onClick={this.handleSubmit} className='btn btn-default'>
                            <span className='glyphicon glyphicon-search' />
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

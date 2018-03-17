import React from 'react';
import {Link} from 'react-router-dom';

import './BasketCart.scss';


class BasketCart extends React.Component {
    render() {
        const {
            totalBasketCount,
            totalPrice
        } = this.props;

        return (
            <div className="card">
                <div className="dropdown">
                    <Link
                        to='/basket'
                        id='dLabel'
                        className='btn btn-inverse btn-block btn-lg'
                    >
                        <i className='fa fa-fa-shopping-cart' />
                        <span>{totalBasketCount} item(s) - ${totalPrice}</span>
                    </Link>
                </div>
            </div>
        )
    }
}



export default BasketCart;
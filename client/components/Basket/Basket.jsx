import React from 'react';
import { Link } from 'react-router-dom';

import './Basket.scss';


class Basket extends React.Component {

    removePhoneFromBasket

    renderContent = () => {

        const {
            totalPhones,
            totalPrice,
            removePhoneFromBasket
        } = this.props;

        return (
            <div>
                {
                    !totalPhones && <div>Your shopping cart is empty</div>
                }
                {
                    totalPhones && <div className='table-responsive'>
                        <table className='table-bordered table-striped table-condensed cf'>
                            <tbody>
                                {totalPhones.map((phone, index) => (
                                    <tr
                                        key={index}
                                        className='item-checout'
                                    >
                                        <td className='first-column-checkout'>
                                            <img
                                                className='img-thumbnail'
                                                src={phone.image}
                                                alt={phone.name}
                                            />
                                        </td>
                                        <td>{phone.name}</td>
                                        <td>${phone.price}</td>
                                        <td>{phone.count}</td>
                                        <td>
                                            <span
                                                className='delete-cart'
                                                onClick={() => removePhoneFromBasket(phone.id)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
                {
                    totalPrice &&
                    <div className='row'>
                        <div className='pull-right total-user-checkout'>
                            <b>Total:</b>
                            ${totalPrice}
                        </div>
                    </div>
                }
            </div>
        )
    }

    renderSidebar = () => (
        <div>
            Sidebar
        </div>
    )

    render() {
        return (
            <div className='view-container' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {this.renderContent()}
                        </div>
                        <div className='col-md-3 btn-user-checkout'>
                            {this.renderSidebar()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Basket;
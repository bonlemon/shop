import React from 'react';
import { Link } from 'react-router-dom';

import './Phone.scss';


class Phone extends React.Component {

    handlerAddPhoneToBasket = () => {
        const { phone, addPhoneToBasket } = this.props;

        addPhoneToBasket(phone.id)
    }

    render() {
        const {
            phone,
            shortDescription,
            handlerBuyNow,

        } = this.props;

        return  <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={phone.id}>
                    <div className='thumbnail'>
                        <img
                            className='img-thumbnail'
                            src={phone.image}
                            alt={phone.name}
                        />
                        <div className='caption'>
                            <h4 className='pull-right'>${phone.price}</h4>
                            <h4>
                                <Link to={`/phones/${phone.id}`}>
                                    {phone.name}
                                </Link>
                            </h4>
                            <p>{shortDescription}</p>
                            <p className='itemButton'>
                                <button
                                    className='btn btn-primary'
                                    onClick={this.handlerAddPhoneToBasket}
                                >
                                    Buy Now!
                                    </button>
                                <Link
                                    to={`/phones/${phone.id}`}
                                    className='btn btn-default'
                                >
                                    More info
                                    </Link>
                            </p>
                        </div>
                    </div>
                </div>
    }
}

export default Phone;
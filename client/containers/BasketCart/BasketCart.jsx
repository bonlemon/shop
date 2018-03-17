import React from 'react';
import {connect} from 'react-redux';

import BasketCart from 'components/BasketCart'

import {
    getTotalBasketCount,
    getTotalBasketPhones, 
} from '../../reducers/basket'


class ContainerBasketCart extends React.Component {

    getTotalPrice(phones) {
        return phones && phones.length ? phones.reduce((sum, phone) => sum + phone) : 0
    }

    render() {
        const {
            totalBasketCount,
            totalPhones
        } = this.props;

        return  <BasketCart
                    totalBasketCount =  {totalBasketCount}
                    totalPrice =        {this.getTotalPrice(totalPhones)}
                />
    }
}


const mapStateToProps = state => {
    return {
      totalBasketCount: getTotalBasketCount(state),
      totalPhones:      getTotalBasketPhones(state)
    }
  }

export default connect(mapStateToProps, null)(ContainerBasketCart);
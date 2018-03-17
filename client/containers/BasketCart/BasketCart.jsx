import React from 'react';
import {connect} from 'react-redux';

import BasketCart from 'components/BasketCart'



class ContainerBasketCart extends React.Component {
    render() {
        const {
            totalBasketCount,
            totalPrice
        } = this.props;

        return  <BasketCart
                    totalBasketCount// =  {totalBasketCount}
                    totalPrice// =        {totalPrice}
                />
    }
}


const mapStateToProps = state => {
    return {
      totalBasketCount: getTotalBasketCount(state),
      totalPrice: getTotalBasketPrice(state)
    }
  }

export default connect(mapStateToProps, null)(ContainerBasketCart);
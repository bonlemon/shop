import React from 'react';
import { connect } from 'react-redux';

import Basket from '../../components/Basket';

import { 
    removePhoneFromBasket
} from '../../actions';

import {
    // getBasketPhonesWithCount,
    getTotalBasketPhones, 
} from '../../reducers/basket'



class ContainerBasket extends React.Component {

    getTotalPrice(phones) {
        if (phones && phones.length){
            return  phones.map(phone=>phone.price).reduce((sum, price) =>  sum + price)
        } else {
            return 0
        }
    }

    render (){
        const {
            totalPhones,
            onRemovePhoneFromBasket
        } = this.props;

        return  <Basket
                    totalPhones={totalPhones}
                    totalPrice={this.getTotalPrice(totalPhones)}
                    removePhoneFromBasket={onRemovePhoneFromBasket}
                /> 
    }   
}

const mapStateToProps = (state, {match}) => {
    return {
        // phones:         getBasketPhonesWithCount(state),
        totalPhones:    getTotalBasketPhones(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemovePhoneFromBasket: (id) =>  dispatch(removePhoneFromBasket(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContainerBasket);
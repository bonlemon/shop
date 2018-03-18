import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Phone from '../../components/Phone';

import { 
    fetchBasket,
    // fetchCategories,
    loadMoreBasket,
    addPhoneToBasket
} from '../../actions';

import {
    getBasketPhonesWithCount,
    getTotalBasketPhones, 
} from '../../reducers/basket'



class ContainerBasket extends React.Component {

    getTotalPrice(phones) {
        return phones && phones.length ? phones.reduce((sum, phone) => sum + phone) : 0
    }

    render (){
        const {totalPhones} = this.props;

        return  <div>
                    {totalPhones.map(phone => phone)}
                    {this.getTotalPrice(totalPhones)}
                </div>

    }   
}

const mapStateToProps = (state, {match}) => {
    return {
        phones:         getBasketPhonesWithCount(state),
        totalPhones:    getTotalBasketPhones(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onFetchBasket: () =>  dispatch(fetchBasket()),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContainerBasket));
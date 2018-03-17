import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Phone from '../../components/Phone';
import Sidebar from '../../components/Sidebar';
import ContainerBasketCart from '../BasketCart';

import {
    fetchPhoneById,
    addPhoneToBasket
} from '../../actions';
import { getPhoneById } from '../../reducers/phone';



class ContainerPhone extends React.Component {

    componentWillMount() {
        const { match, onFetchPhoneById } = this.props;

        onFetchPhoneById(match.params.id);
    }

    renderContent() {
        const { phone } = this.props

        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img
                            className='img-thumbnail'
                            src={phone.image}
                            alt={phone.name}
                        />
                    </div>
                    <div className='col-md-6'>
                        {this.renderFields()}
                    </div>
                </div>
                <div className='caption-full'>
                    <h4 className='pull-right'>${phone.price}</h4>
                    <h4>{phone.name}</h4>
                    <p>{phone.description}</p>
                </div>
            </div>
        )
    }

    renderFields() {
        const {
            cpu,
            camera,
            size,
            weight,
            display,
            battery,
            memory
        } = this.props.phone;

        return [cpu,
            camera,
            size,
            weight,
            display,
            battery,
            memory].map((value, key) => <div className='column' key={key}>
                <div className='ab-details-title'>
                    <p>{key}</p>
                </div>
                <div className='ab-details-info'>
                    {value}
                </div>
            </div>
            )
    }

    renderSidebar() {
        const {
            phone,
            onAddPhoneToBasket
        } = this.props

        return (
            <div>
                <p className='lead'>Quick shop</p>
                <ContainerBasketCart />
                <div className='form-group'>
                    <h1>{phone.name}</h1>
                    <h2>${phone.price}</h2>
                </div>
                <Link to='/' className='btn btn-info btn-block'>Back to store</Link>
                <button
                    type='button'
                    className='btn btn-success btn-block'
                    onClick={() => onAddPhoneToBasket(phone.id)}
                >
                    Add to cart
                </button>
            </div>
        )
    }

    render() {
        const { phone } = this.props;

        return <div className="view-container">
            <div className="container">
                <div className="row">
                    <div className="col md-3">
                        {phone && this.renderSidebar()}
                    </div>
                    <div className="col-md-9">
                        {phone && this.renderContent()}
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        phone: getPhoneById(state, state.phonePage.get("id"))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPhoneById: (id) => dispatch(fetchPhoneById(id)),
        onAddPhoneToBasket: (id) =>  dispatch(addPhoneToBasket(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContainerPhone);
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Phone from '../../components/Phone';

import { 
    fetchPhones,
    fetchCategories,
    loadMorePhones,
    addPhoneToBasket
} from '../../actions';

import { getPhones } from '../../reducers/phone';



class ContainerPhones extends React.Component {

    componentWillMount(){
        const {
            onFetchPhones,
            // onFetchCategories,
        } = this.props;
        Promise.resolve()
            .then(() => onFetchPhones())
            // .then(() => onFetchCategories());
    }

    getShortDescription(phone){
        return `${phone.description.slice(0, 50)}...`
    }

    render (){
        const {phones, onLoadMorePhones, onAddPhoneToBasket} = this.props;

        return  <div>
                    <div className='books row'>
                        {phones && phones.map(
                            (phone, index) => <Phone
                                                key={index}
                                                phone={phone}
                                                shortDescription={this.getShortDescription(phone)}
                                                addPhoneToBasket={onAddPhoneToBasket}
                                                /> 
                        )}
                    </div>
                    <div className="row">
                        <button
                            onClick={onLoadMorePhones}
                            className="pull-right btn btn-primary"
                        >
                            Load More
                        </button>
                    </div>
                </div>

    }   
}

const mapStateToProps = (state) => {
    return {
        phones: getPhones(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPhones: () =>  dispatch(fetchPhones()),
        onFetchCategories: () =>  dispatch(fetchCategories()),
        onLoadMorePhones: () =>  dispatch(loadMorePhones()),
        onAddPhoneToBasket: (id) =>  dispatch(addPhoneToBasket(id)),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContainerPhones));
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Phone from '../../components/Phone';

import { fetchPhones, loadMorePhones } from '../../actions';

import { getPhones } from '../../reducers/phone';



class ContainerPhones extends React.Component {

    componentDidMount(){
        Promise.resolve().then(() => this.props.onFetchPhones());
    }

    getShortDescription(phone){
        return `${phone.description.slice(0, 50)}...`
    }

    render (){
        const {phones, onLoadMorePhones} = this.props;

        return  <div>
                    <div className='books row'>
                        {phones && phones.map(
                            (phone, index) => <Phone key={index} phone={phone} shortDescription={this.getShortDescription(phone)} /> 
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
        onLoadMorePhones: () =>  dispatch(loadMorePhones()),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContainerPhones));
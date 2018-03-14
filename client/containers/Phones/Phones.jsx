import React from 'react';
import { connect } from 'react-redux';

import Phone from '../../components/Phone';

import { fetchPhones } from '../../actions';

import { getPhones } from '../../reducers/phone';



class ContainerPhones extends React.Component {

    componentDidMount(){
        Promise.resolve().then(() => this.props.onFetchPhones());
    }

    getShortDescription(phone){
        return `${phone.description.slice(0, 50)}...`
    }

    render (){
        const {phones} = this.props;

        console.log({phones})

        return  <div>
                    <div className='books row'>
                        {phones && phones.map((phone,index) => <Phone key={index} phone shortDescription={this.getShortDescription(phone)} /> )}
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContainerPhones);
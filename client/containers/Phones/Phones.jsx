import React from 'react';
import { connect } from 'react-redux';

import { fetchPhones } from '../actions';

import { getNotes } from '../reducers';



class ContainerPhones extends React.Component {

    componentDidMount(){
        this.props.onFetchPhones();
    }

    render (){
        return <Phones />
    }   
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToPros = (dispatch) => {
    return {
        onFetchPhones: () =>  dispatch(fetchPhones()),
    }
}


export default connect(mapStateToProps, mapDispatchToPros)(ContainerPhones);
import React from 'react';
import { connect } from 'react-redux';

import Search from '../../components/Search';

import {
    searchPhone
} from '../../actions';

// import { getPhoneById } from '../../reducers/phone';



class ContainerSearch extends React.Component {

    render() {
        const { onSearchPhone } = this.props;

        return <Search searchPhone={onSearchPhone} />
    }
}

const mapStateToProps = (state) => {
    return {
        // phone: getPhoneById(state, state.phonePage.get("id"))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchPhone: (text) => dispatch(searchPhone(text)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContainerSearch);
import React from 'react';
import { connect } from 'react-redux';

import Phone from '../../components/Phone';

import { fetchPhones } from '../../actions';




class ContainerPhone extends React.Component {

    componentWillMount(){
        const { match, onFetchPhoneById } = this.props;

        onFetchPhoneById(match.params.id);
    }

    render (){
        return  <div>
                    Phone
                </div>

    }   
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPhoneById: () =>  dispatch(fetchPhoneById(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContainerPhone);
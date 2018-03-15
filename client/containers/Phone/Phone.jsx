import React from 'react';
import { connect } from 'react-redux';

import Phone from '../../components/Phone';

import { fetchPhoneById } from '../../actions';
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

    renderFields () {
        const {
            cpu,
            camera,
            size,
            weight,
            display,
            battery,
            memory
        } = this.props.phone;
      }

    renderSidebar() {
        return (
            <div>Sidebar</div>
        )
    }

    render() {
        const { phone } = this.props;

        return <div className="view-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {phone && this.renderContent()}
                    </div>
                    <div className="col md-3">
                        {phone && this.renderSidebar()}
                    </div>
                </div>
            </div>
        </div>

    }
}

const mapStateToProps = (state) => {
    console.log('state.phonePage.id', state.phonePage.get("id"))

    return {
        phone: getPhoneById(state, state.phonePage.get("id"))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchPhoneById: (id) => dispatch(fetchPhoneById(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContainerPhone);
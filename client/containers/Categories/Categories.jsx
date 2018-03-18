import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Categories from 'components/Categories'

import {
    getCategories,
} from '../../reducers/category';

import {
    fetchCategories
} from '../../actions';


class ContainerCategories extends React.Component {

    componentWillMount() {
        const { onFetchCategories } = this.props;
        Promise.resolve()
            .then(() => onFetchCategories());
    }

    render() {
        const {
            categories,
            match:{params}
        } = this.props;

        return <Categories
            categories={categories}
            params={params.id}
        />
    }
}


const mapStateToProps = (state) => {
    return {
        categories: getCategories(state),
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onFetchCategories: () =>  dispatch(fetchCategories()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContainerCategories));
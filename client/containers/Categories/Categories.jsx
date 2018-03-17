import React from 'react';
import {connect} from 'react-redux';

import Categories from 'components/Categories'

import {
    getCategories,
} from '../../reducers/category';


class ContainerCategories extends React.Component {

    render() {
        const {
            categories
        } = this.props;

        return  categories ? <Categories
                                    categories =  {categories}
                                /> : null
    }
}


const mapStateToProps = state => {
    return {
        categories: getCategories(state)
    }
  }

export default connect(mapStateToProps, null)(ContainerCategories);
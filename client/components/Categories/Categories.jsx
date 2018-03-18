import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './Categories.scss';


class Categories extends React.Component {

    renderAllCategory = () => {
        const { id } = this.props;
        return (
            <NavLink
                to={`/`}
                activeClassName={id ? '' : 'active'}
                className='list-group-item'
            >
                Все
            </NavLink>
        )
    }
    renderCategory = (category, index) => {
        const { id } = this.props;
        return (
            <NavLink
                to={`/categories/${category.id}`}
                activeClassName={id ? 'active' : ''}
                className='list-group-item'
                key={index}
            >
                {category.name}
            </NavLink>
        )
    }

    render() {
        const { categories } = this.props;

        return (
            <div className='well'>
                <h4>Brand</h4>
                <div className='list-group'>
                    {this.renderAllCategory()}
                    {categories && categories.IDs.map(
                        (categoryId, index) => this.renderCategory(categories.byID[index], index)
                    )}
                </div>
            </div>
        )
    }
}



export default Categories;
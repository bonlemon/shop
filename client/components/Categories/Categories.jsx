import React from 'react';
import { Link } from 'react-router-dom';

import './Categories.scss';


class Categories extends React.Component {
    renderCategory = (category, index) => {
        return (
            <Link
                to={`/categories/${category.id}`}
                className='list-group-item'
                key={index}
            >
                {category.name}
            </Link>
        )
    }

    render() {
        const {
            categories
        } = this.props;

        return (
            <div className='well'>
                <h4>Brand</h4>
                <div className='list-group'>
                    {categories.byID.map((category, index) => this.renderCategory(category, index))}
                </div>
            </div>
        )
    }
}



export default Categories;
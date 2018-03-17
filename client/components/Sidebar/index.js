import React                    from 'react';
import ContainerBasketCart      from '../../containers/BasketCart';
import ContainerCategories      from '../../containers/Categories';
import ContainerSearch          from '../../containers/Search';

class Sidebar extends React.Component {
    render() {
        return  <div> 
                    <ContainerBasketCart />
                    <ContainerCategories />
                    <ContainerSearch />
                </div>
    }
}

export default Sidebar;
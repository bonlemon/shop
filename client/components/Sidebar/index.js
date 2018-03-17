import React                    from 'react';
import ContainerBasketCart      from '../../containers/BasketCart';
import ContainerSearch          from '../../containers/Search';

class Sidebar extends React.Component {
    render() {
        return  <div> 
                    <ContainerBasketCart />
                    <ContainerSearch />
                </div>
    }
}

export default Sidebar;
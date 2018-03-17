import { Map, List } from 'immutable';

import ACTION_TYPES from '../constants';

const initialState = Map({
    IDs: List([])
})


function reducer(state = initialState, {type, payload}) {
    switch (type){

        case ACTION_TYPES.ADD_PHONE_TO_BASKET:
            return state.get('IDs').push(payload.id)

        // case ACTION_TYPES.REMOVE_PHONE_TO_BASKET:
        //     return state.set('IDs', state.get('IDs').concat(payload.phones.map(phone => phone.id)))

    }
    return state;
}

export default reducer;


export function getTotalBasketCount(state) {
    return state.basket.get('IDs').length
}
export function getTotalBasketPhones(state) {
    return state.basket.get('IDs')
            .map(id => getPhoneById(state.id))
            .reduce(sum, phone => phone.price)
}
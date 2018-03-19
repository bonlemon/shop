import { Map, List } from 'immutable';

import ACTION_TYPES from '../constants';

import { getPhoneById } from './phone';

const initialState = Map({
    IDs: List([])
})


export default function reducer(state = initialState, {type, payload}) {
    switch (type){

        case ACTION_TYPES.ADD_PHONE_TO_BASKET:
            return state.setIn(['IDs'], state.getIn(['IDs']).push(payload.id))

        case ACTION_TYPES.REMOVE_PHONE_TO_BASKET:
            return state.set('IDs', state.get('IDs').filter(id => id != payload.id))

        case ACTION_TYPES.CLEAN_BASKET:
            return initialState

        default:
            return state
    }
    return state;
}


export function getTotalBasketCount(state) {
    return state.basket.getIn(['IDs']).toJS().length
}

export function getTotalBasketPhones(state) {
    return state.basket.getIn(['IDs']).toJS()
            .map(id => getPhoneById(state, id))
}

// export function getBasketPhonesWithCount(state) {
//     console.log("state.basket.get('IDs')", state.basket.get('IDs'))
//     return getTotalBasketPhones(state).map((phone) => phone.count = state.basket.get('IDs').toJS().filter(id => id == phone.categoryId).length)
// }
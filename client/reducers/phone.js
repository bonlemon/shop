import { Map, List } from 'immutable';

import ACTION_TYPES from '../constants';

const initialState = Map({
    phones: List([])
})


function reducer(state = initialState, action) {
    switch (action.type){

        //** CREATE */
        case ACTION_TYPES.FETCH_PHONES_REQUEST: 
            return state.set('error', null)

        case ACTION_TYPES.FETCH_PHONES_SUCCESS:
            return state.set('phones', List(action.payload.phones))

        case ACTION_TYPES.FETCH_PHONES_FAILURE: 
            return state.set('error', action.error)

    }
    return state;
}

export default reducer;



// Selectors
export function getPhones(state) {
    return state.phone.get('phones') ? state.phone.get('phones').toJS() : []
};

export function getPhoneById (state, id){ 
    return getPhones(state).filter(phone => phone.id == id)
};
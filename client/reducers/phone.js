import { Map, List } from 'immutable';

import ACTION_TYPES from '../constants';

const initialState = Map({
    phones: List([])
})


export default function reducer(state = initialState, action) {
    switch (action.type){

        case ACTION_TYPES.FETCH_PHONES_REQUEST: 
            return state.set('error', null)
        case ACTION_TYPES.FETCH_PHONES_SUCCESS:
            return state.set('phones', List(action.payload.phones))
        case ACTION_TYPES.FETCH_PHONES_FAILURE: 
            return state.set('error', action.error)

        case ACTION_TYPES.LOAD_MORE_PHONES_REQUEST: 
            return state.set('error', null)
        case ACTION_TYPES.LOAD_MORE_PHONES_SUCCESS:
           return state.set('phones', List(action.payload.phones))
        case ACTION_TYPES.LOAD_MORE_PHONES_FAILURE: 
            return state.set('error', action.error)

        default:
            return state
    }
    return state;
}



function filetByName(text, phones){
    return phones.filter(phone => phone.name.includes(text))
}

// Selectors
export function getPhones(state) {
    return state.phone.get('phones') ?
        filetByName(
            state.phonesPage.get('search'),
            state.phone.get('phones')
            .toJS()
        ) : []
};

export function getPhoneById (state, id){ 
    return getPhones(state).filter(phone => phone.id == id)[0]
};

export function getRenderedPhonesLength (state,){ 
    return getPhones(state).length
};
import { Map, List } from 'immutable';

import ACTION_TYPES from '../constants';

const initialState = Map({
    IDs:    List([]),
    search: ""
})


export default function reducer(state = initialState, {type, payload}) {
    switch (type){

        case ACTION_TYPES.FETCH_PHONES_SUCCESS:
            return state.set('IDs', List(payload.phones.map(phone => phone.id)))
        case ACTION_TYPES.LOAD_MORE_PHONES_SUCCESS:
            return state.set('IDs', state.get('IDs').concat(payload.phones.map(phone => phone.id)))

        case ACTION_TYPES.SEARCH_PHONE:
            return state.set('search', payload.text)

        default:
            return state
    }
    return state;
}

import { Map, List } from 'immutable';

import ACTION_TYPES from '../constants';

const initialState = Map({
    id: null
})


export default function reducer(state = initialState, {type, payload}) {
    switch (type){

        case ACTION_TYPES.FETCH_PHONE_BY_ID_SUCCESS:
            return state.set('id', payload.phone.id)

        default:
            return state
    }
    return state;
}

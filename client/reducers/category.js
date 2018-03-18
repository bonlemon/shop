import { Map, List, fromJS } from 'immutable';

import ACTION_TYPES from '../constants';

const initialState = Map({
    byID: Map({}),
    IDs: List([]),
})


export default function reducer(state = initialState, {type, payload}) {
    switch (type){

        case ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return state.set('byID', fromJS(payload.categories))
                        .set('IDs', List(payload.categories.map(category => category.id)))

        default:
            return state
    }
    return state;
}


export const getCategories = (state) => state.category && state.category.toJS();

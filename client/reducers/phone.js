import { Map, List } from 'immutable';

import ACTION_TYPES from '../constants';

const initialState = Map({
})


function reducer(state = initialState, action) {
    switch (action.type){

        //** CREATE */
        case ACTION_TYPES.FETCH_NOTES_REQUEST: 
            return state.set('error', null)

        case ACTION_TYPES.FETCH_NOTES_SUCCESS:
            return state.set('notes', List(action.payload.notes.map(note => formatNote(note))))

        case ACTION_TYPES.FETCH_NOTES_FAILURE: 
            return state.set('error', action.error)

        //** CREATE */
        case ACTION_TYPES.CREATE_NOTE_REQUEST: 
            return state.set('error', null)

        case ACTION_TYPES.CREATE_NOTE_SUCCESS:
            return state.set('notes', state.getIn(['notes']).push(formatNote(action.payload.note)))

        case ACTION_TYPES.CREATE_NOTE_FAILURE: 
            return state.set('error', action.error)

        //** REMOVE */
        case ACTION_TYPES.REMOVE_NOTE_REQUEST: 
            return state.set('error', null)

        case ACTION_TYPES.REMOVE_NOTE_SUCCESS:

            return state.set('notes', state.getIn(['notes']).filterNot((item)=> {
                return item.id === action.payload.id
            }))
        
        case ACTION_TYPES.REMOVE_NOTE_FAILURE: 
            return state.set('error', action.error)
    }
    return state;
}

export default reducer;



// selectors
export function getNotes(state) {
    return state.getIn(["notes"]) ? state.getIn(["notes"]).toJS() : []
}
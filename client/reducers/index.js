import { Map, List } from 'immutable';

import ACTIONS from '../constants';

const initialState = Map({
    notes:      List([]),
    loading:    false,
    error:      null
})

const formatNote = (note) => {
    return {
        id: note._id,
        title: note.title,
        text: note.text,
        color: note.color || '#fff',
        createdAt: note.createdAt
    }
}

function reducer(state = initialState, action) {
    switch (action.type){

        //** CREATE */
        case ACTIONS.FETCH_NOTES_REQUEST: 
            return state.set('error', null)

        case ACTIONS.FETCH_NOTES_SUCCESS:
            return state.set('notes', List(action.payload.notes.map(note => formatNote(note))))

        case ACTIONS.FETCH_NOTES_FAILURE: 
            return state.set('error', action.error)

        //** CREATE */
        case ACTIONS.CREATE_NOTE_REQUEST: 
            return state.set('error', null)

        case ACTIONS.CREATE_NOTE_SUCCESS:
            return state.set('notes', state.getIn(['notes']).push(formatNote(action.payload.note)))

        case ACTIONS.CREATE_NOTE_FAILURE: 
            return state.set('error', action.error)

        //** REMOVE */
        case ACTIONS.REMOVE_NOTE_REQUEST: 
            return state.set('error', null)

        case ACTIONS.REMOVE_NOTE_SUCCESS:

            return state.set('notes', state.getIn(['notes']).filterNot((item)=> {
                return item.id === action.payload.id
            }))
        
        case ACTIONS.REMOVE_NOTE_FAILURE: 
            return state.set('error', action.error)
    }
    return state;
}

export default reducer;


// selectors

export function getNotes(state) {
    return state.getIn(["notes"]) ? state.getIn(["notes"]).toJS() : []
}
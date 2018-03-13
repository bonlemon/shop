// import dispatch from 'redux';
import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';
import ACTIONS from '../constants';


export function loadNotes() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.FETCH_NOTES_REQUEST
        });

        axios.get(`${apiPrefix}/notes`)
            .then(({data}) => {

                dispatch({
                    type: ACTIONS.FETCH_NOTES_SUCCESS,
                    payload: {
                        notes: data
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type:ACTIONS.FETCH_NOTES_FAILURE,
                    error: err
                })
        })
    }
};


export function createNote(note) {
    return (dispatch) => {
    
        dispatch({
            type: ACTIONS.CREATE_NOTE_REQUEST
        });

        axios.post(`${apiPrefix}/notes`, note )
            .then(({data}) => {
                dispatch({
                    type:ACTIONS.CREATE_NOTE_SUCCESS,
                    payload: {
                        note: data
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type:ACTIONS.CREATE_NOTE_FAILURE,
                    error: err
                })
            })
    }
};


export function deleteNote(noteId) {
    return (dispatch) => {
    
        dispatch({
            type: ACTIONS.REMOVE_NOTE_REQUEST
        });

        axios.delete(`${apiPrefix}/notes/${noteId}`)
            .then(({data}) => {
                dispatch({
                    type:ACTIONS.REMOVE_NOTE_SUCCESS,
                    payload: {
                        id: data.id
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type:ACTIONS.REMOVE_NOTE_FAILURE,
                    error: err
                })
            })
    }
};
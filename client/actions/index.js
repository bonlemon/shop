import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';
import ACTION_TYPES from '../constants';

// https://habrahabr.ru/company/ruvds/blog/326074/

export function fetchPhones() {
    return (dispatch) => {
        dispatch({
            type: ACTION_TYPES.FETCH_NOTES_REQUEST
        });

        axios.get(`${apiPrefix}/notes`)
            .then(({data}) => {

                dispatch({
                    type: ACTION_TYPES.FETCH_NOTES_SUCCESS,
                    payload: {
                        notes: data
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type:ACTION_TYPES.FETCH_NOTES_FAILURE,
                    error: err
                })
        })
    }
};

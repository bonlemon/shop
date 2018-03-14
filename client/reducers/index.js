// Libs
import {combineReducers} from 'redux';
import { Map, List } from 'immutable';

// reducers
import phone from './phone';
import phonesPage from './phonesPage';

export default combineReducers({
    phone,
    phonesPage
});
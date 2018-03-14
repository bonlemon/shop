// Libs
import {combineReducers} from 'redux';

// reducers
import phone from './phone';
import phonePage from './phonePage';
import phonesPage from './phonesPage';

export default combineReducers({
    phone,
    phonePage,
    phonesPage
});
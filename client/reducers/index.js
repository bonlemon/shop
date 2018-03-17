// Libs
import {combineReducers} from 'redux';

// Reducers
import basket       from './basket';
import phone        from './phone';
import phonePage    from './phonePage';
import phonesPage   from './phonesPage';

export default combineReducers({
    basket,
    phone,
    phonePage,
    phonesPage,
});
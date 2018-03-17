// Libs
import {combineReducers} from 'redux';

// Reducers
import basket       from './basket';
import category     from './category';
import phone        from './phone';
import phonePage    from './phonePage';
import phonesPage   from './phonesPage';

export default combineReducers({
    basket,
    category,
    phone,
    phonePage,
    phonesPage,
});
import { combineReducers } from 'redux';
import { createReducer } from '../redux.helpers';

const movieModalReducer = createReducer({ isOpen: false }, {

});

const movieBrowserReducer = combineReducers({
    movieModal: movieModalReducer
});

export default movieBrowserReducer;
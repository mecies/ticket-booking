import { createAsyncActionCreator } from '../common/redux.helpers';
import * as movieService from './movieBrowser.service';

export const keys = {
    'GET_TOP_MOVIES': 'GET_TOP_MOVIES',
    'SEARCH_MOVIES': 'SEARCH_MOVIES',
    'GET_MOVIE_DETAILS': 'GET_MOVIE_DETAILS',
};

export const getCurrentMovies = (page) => createAsyncActionCreator(
    // actionType
    keys.GET_TOP_MOVIES,
    // requestFn
    movieService.getCurrentMovies,
    // requestParams
    { page }
);

export const searchMovies = (query, page) => createAsyncActionCreator(
    keys.SEARCH_MOVIES,
    movieService.searchMovies,
    { query, page }
);

export const getMovieDetails = (movieId) => createAsyncActionCreator(
    keys.GET_MOVIE_DETAILS,
    movieService.getMovieDetails,
    { movieId }
);
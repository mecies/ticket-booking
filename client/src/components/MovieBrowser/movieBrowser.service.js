const MOVIE_DB_API_KEY = "e9985df55c19434e44f29e4b86308c5e";
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';

const createMovieDbUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
    if (queryParams) {
        Object.keys(queryParams)
            .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
    }
    return baseUrl;
}

export const getTopMovies = async ({ page }) => {
    const fullUrl = createMovieDbUrl('/movie/top_rated', {
        page
    });
    return fetch(fullUrl);
}

export const searchMovies = async ({ page, query }) => {
    const fullUrl = createMovieDbUrl('/search/movie', {
        page,
        query
    });
    return fetch(fullUrl);
}

export const getMovieDetails = async ({ movieId }) => {
    const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
    return fetch(fullUrl);
}
import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core'
import { AppBar } from 'material-ui';
import * as movieActions from './movieBrowser.actions';
import * as movieHelpers from './movieBrowser.helpers';
import MovieList from './movieList.component';


class MovieBrowser extends React.Component {

    componentDidMount() {
        this.props.getCurrentMovies(1);
    }

    render() {
        const { topMovies } = this.props;
        const movies = movieHelpers.getMoviesList(topMovies.response);

        return <div>
            <AppBar title="MovieApp" />
            <div className="Typo">
              <h1>Wybierz film, który Cię interesuje</h1>
              <p>Wybranie filmu przeniesie Cię do panelu rezerwacji seansu</p>
            </div>
            <Grid container direction="row"
                justify="space-around"
                alignItems="center">
              <Grid item xs={3}>
                <MovieList movies={movies} isLoading={topMovies.isLoading} />
              </Grid>
            </Grid>
          </div>;
    }
}

export default connect(
    (state) => ({
        topMovies: state.movieBrowser.topMovies
    }),
    { ...movieActions }
)(MovieBrowser);
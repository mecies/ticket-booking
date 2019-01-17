import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { AppBar } from 'material-ui';
import * as movieActions from './movieBrowser.actions';
import * as movieHelpers from './movieBrowser.helpers';
import MovieList from './movieList.component';

class MovieBrowser extends React.Component {

    componentDidMount() {
        this.props.getTopMovies(1);
    }

    render() {
        const { topMovies } = this.props;
        const movies = movieHelpers.getMoviesList(topMovies.response);

        return (
            <div>
                <AppBar title='Movie Browser' />
                <Grid>
                    <Row>
                        <p>Search will go here</p>
                    </Row>
                    <Row>
                        <MovieList movies={movies} isLoading={topMovies.isLoading} />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        topMovies: state.movieBrowser.topMovies
    }),
    { ...movieActions }
)(MovieBrowser);
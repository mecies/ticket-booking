import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './movieCard.component';

const styles = {
    movieColumn: {
        marginBottom: 20
    }
}
const MovieListComponent = ({ movies }) => {
    const movieColumns = movies ? movies.map(movie => (
        <Col style={styles.movieColumn} key={movie.id}>
            <MovieCard movie={movie} />
        </Col>
    )) : null;

    return (
        <Row>
            {movieColumns}
        </Row>
    );
}

export default MovieListComponent;
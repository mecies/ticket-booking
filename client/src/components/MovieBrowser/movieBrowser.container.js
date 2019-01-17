import React from 'react';
import { AppBar } from 'material-ui';
import { Grid, Row } from 'react-bootstrap'

class MovieBrowser extends React.Component {
    render() {
        return (
            <div>
                <AppBar title='MovieApp' />
                <h1>Wybierz film, który Cię interesuje</h1>
                <p>Wybranie filmu przeniesie Cię do panelu rezerwacji seansu</p>
                <Grid>
                    <Row>
                        <p>Search will go here</p>
                    </Row>
                    <Row>
                        <p>Movie list will go here</p>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default MovieBrowser;
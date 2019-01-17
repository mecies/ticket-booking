import React from 'react';
import { Card, CardTitle, CardMedia } from 'material-ui';

const styles = {
    cardTitle: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    cardMedia: {
        maxHeight: 394,
        overflow: 'hidden'
    },
    card: {
        cursor: 'pointer',
        height: 400,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%'
    }
};

class MovieCardComponent extends React.Component {
    constructor(props) {
        super(props);
        // Track if the mouse hovering over the movie card
        this.state = {
            isMouseOver: false
        };
    }

    render() {
        const { movie, openMovieModal } = this.props;
        // The subtitle won't render if it's null
        const subtitle = this.state.isMouseOver ? movie.overview : null;

        return (
            <Card
                style={styles.card}
                onMouseOver={() => this.setState({ isMouseOver: true })}
                onMouseLeave={() => this.setState({ isMouseOver: false })}
            >
                <CardMedia
                    style={styles.cardMedia}
                    overlay={
                        <CardTitle
                            title={movie.title}
                            subtitle={subtitle}
                        />
                    }
                >
                    <img style={styles.bgImage} src={movie.poster_path} />
                </CardMedia>
            </Card>
        );
    }
}

export default MovieCardComponent;
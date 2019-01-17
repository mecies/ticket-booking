import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const classes = {
    cardMedia: {
        height: 140
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
        
        this.state = {
            isMouseOver: false
        };
    }

    render() {
        const { movie } = this.props;

        return <Card className={classes.card} onMouseOver={() => this.setState(
                { isMouseOver: true }
              )} onMouseLeave={() => this.setState({
                isMouseOver: false
              })}>
            <CardActionArea>
              <CardMedia className={classes.media} />
              <img style={classes.bgImage} src={movie.poster_path} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.title}
                </Typography>
                <Typography className={classes.paragraph} component="p">
                    { movie.release_date }
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="medium" color="primary">
                REZERWUJ
              </Button>
            </CardActions>
          </Card>;
    }
}

export default connect(
    () => ({}),
)(MovieCardComponent);
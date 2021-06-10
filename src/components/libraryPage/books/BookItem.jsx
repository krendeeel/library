import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});





export const MediaCard = (props) =>  {
  const classes = useStyles();
  const history = useHistory()

  const a = () => {
    history.push({
      pathname: '/info',
      search: `?name=${props.name}`
    })
  }

  return (
    <Card className={classes.root} style={{ width: 150, height: 170}} onClick={a}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          style={{ width: 150, height: 170}}
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" >
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
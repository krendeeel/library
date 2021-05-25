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





export const MediaCard = () =>  {
  const classes = useStyles();
  const history = useHistory()

  const a = () => {
    history.push({
      pathname: '/info',
      search: '?x=er&&er+hjdtgfjsh'
    })
  }

  return (
    <Card className={classes.root} style={{ width: 150, height: 170}} onClick={a}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          style={{ width: 150, height: 100}}
          image='https://cv7.litres.ru/pub/c/elektronnaya-kniga/cover_250/65068372-anatoliy-drozdov-pistol-i-shpaga.jpg'
          title="Наводка"
        />
        <CardContent className='qwe'>
          <Typography variant="body2" color="textSecondary" component="p" className='qwer'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
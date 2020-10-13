import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Stats
        </Typography>
        <div id="stats">
          <p>
            {props.stats[0].stat.name}
                  -----
                  {props.stats[0].base_stat}
          </p>
          <p>
            {props.stats[1].stat.name}
                  -----
                  {props.stats[1].base_stat}
          </p>
          <p>
            {props.stats[2].stat.name}
                  -----
                  {props.stats[2].base_stat}
          </p>
          <p>
            {props.stats[3].stat.name}
                  -----
                  {props.stats[3].base_stat}
          </p>
          <p>
            {props.stats[4].stat.name}
                  -----
                  {props.stats[4].base_stat}
          </p>
          <p>
            {props.stats[5].stat.name}
                  -----
                  {props.stats[5].base_stat}
          </p>
        </div>
      </CardContent >
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card >
  );
}
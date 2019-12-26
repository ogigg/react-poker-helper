import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  card: {
      // fontWeight: 'bold',
      // fontSize: "100px",
      height: "15em",
      width: "11em",
      margin: '10px',
  },
  suit: {
    color: theme => theme.color,
    fontSize: '3em',
    margin: "-0.2em",
  },
  bigSuit: {
    fontSize: "11em",
    margin: "-0.5em",
  },
  cardNumber: {
    fontWeight: "bold",
    fontSize: "3em",
  },

}));

function Header(){
  return (
    <div className="header container">
    Aplikacja wspomagająca grę w pokera
    <Button variant="contained" >Zasady</Button>
    </div>
  );
}

function CardSuit(props){
  const classes = useStyles(props);
  if(props.suit === "diamond"){
    return(
      <div className={`${props.size == 'big'? classes.bigSuit : "" } ${classes.suit}`}>
        &#9830;
      </div>
    )
  }
  if(props.suit === "spade"){
    return(
      <div className={`${props.size == 'big'? classes.bigSuit : "" } ${classes.suit}`}>
        &#9824;
      </div>
    )
  }
  if(props.suit === "heart"){
    return(
      <div className={`${props.size == 'big'? classes.bigSuit : "" } ${classes.suit}`}>
          &#9829;
      </div>
    )
  }
  if(props.suit === "club"){
    return(
      <div className={`${props.size == 'big'? classes.bigSuit : "" } ${classes.suit}`}>
          &#9827;
      </div>
    )
  }
}

function BaseCard(props) {
  const classes = useStyles(props);
  return(
    <div className={classes.card}>
    <Card >
      <CardContent >
        <Grid container direction = "column" alignContent='flex-start'>
          <Grid item className={classes.cardNumber}>
            {props.number}
          </Grid>
          <CardSuit suit={props.suit} color={props.color}></CardSuit>
        </Grid>
        <Grid container  direction="column" alignItems="center">
          <CardSuit suit = {props.suit} size="big" color = {props.color} ></CardSuit>
        </Grid>
        <Grid container direction = "column" alignContent='flex-end'>
          <CardSuit suit={props.suit} color={props.color}></CardSuit>
          <Grid item className={classes.cardNumber}>
            {props.number}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Grid container alignContent = "center" direction='row'>
        <BaseCard color="red" number="6" suit = "club"></BaseCard>
        <BaseCard color="black" number="J" suit = "diamond"></BaseCard>
        <BaseCard color="red" number="A" suit = "spade"></BaseCard>
        <BaseCard color="red" number="1" suit = "heart"></BaseCard>
      </Grid>
    </div>
  );
}

export default App;

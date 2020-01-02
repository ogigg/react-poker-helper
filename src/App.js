import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RulesPage from './Rules'


const useStyles = makeStyles(theme => ({
  card: {
      '-webkit-user-select': 'none', 
      '-moz-user-select': 'none',  
      '-ms-user-select': 'none',   
      'user-select': 'none',
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
// function RulesPage(){
//   console.log("TEST");
//   return (
      
//       <div>heelo test</div>
//   );
//   }
function Header(props){
  let button;
  if(props.page == "rules"){
    button = 
    <Button component={Link} to="/rules" variant="contained">
      Zasady gry
    </Button>
  }
  else{
    button = 
    <Button component={Link} to="/home" variant="contained">
      Powrót
    </Button>
  }

  return (
    <div className="header container">
    Aplikacja wspomagająca grę w pokera
    {button}
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

function HomePage(){
  return (
    <Grid container alignContent = "center" direction='row'>
    <BaseCard color="red" number="6" suit = "club"></BaseCard>
    <BaseCard color="black" number="J" suit = "diamond"></BaseCard>
    <BaseCard color="red" number="A" suit = "spade"></BaseCard>
    <BaseCard color="red" number="1" suit = "heart"></BaseCard>
  </Grid>
  );
}
 
function App() {
  const [page, setPage] = useState(
    "rules"
  );
  return (
    <Router>
    <div className="App">
      <Header page = {page}/>
      <Switch>
      <Route path="/rules" render={props => ( setPage("home"),
                    <RulesPage />
                )} >
        </Route>
      <Route path="/" render={props => ( setPage("rules"),
                    <HomePage />
                )} >
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;

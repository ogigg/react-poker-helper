import React, { useState, useRef } from 'react';
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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

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
  cardPlaceHolder: {
    height: "15vw",
    width: "10vw",
    borderStyle: "dashed",
  },
  addNewCardBtnChildren: {
    flex: '1',
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

function Header(props){
  let button;
  if(props.page === "rules"){
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
  else if(props.suit === "spade"){
    return(
      <div className={`${props.size === 'big'? classes.bigSuit : "" } ${classes.suit}`}>
        &#9824;
      </div>
    )
  }
  else if(props.suit === "heart"){
    return(
      <div className={`${props.size === 'big'? classes.bigSuit : "" } ${classes.suit}`}>
        &#9829;
      </div>
    )
  }
  else if(props.suit === "club"){
    return(
      <div className={`${props.size === 'big'? classes.bigSuit : "" } ${classes.suit}`}>
        &#9827;
      </div>
    )
  }
  else { //return blank
    return(
      <div className={`${props.size === 'big'? classes.bigSuit : "" } ${classes.suit}`}>
        &nbsp;
      </div>
    )
  }
}

function AddNewCardBtn(props){
  const {cardNumber: [cardNumber, setCardNumber]} = {
    cardNumber: useState(0),
    ...(props.state || {})};
  const {suit: [suit, setSuit]} = {
    suit: useState(0),
    ...(props.state || {})};
  const {isCardCreated: [isCardCreated, setIsCardCreated]} = {
    isCardCreated: useState(0),
    ...(props.state || {})};  


  const classes = useStyles();


  const onAddCardClick = e => {
    e.preventDefault();
    console.log("onAddCardClick");
    setIsCardCreated(true);
  }
  const handleCardNumberChange = event =>{
    setCardNumber(event.target.value); 
  }
  const handleCardSuitChange = event =>{
    setSuit(event.target.value);
  }
  const MenuItemsNumbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'].map((number) =>
    <MenuItem value={number}>{number}</MenuItem>
  );
  const MenuItemsSuits = ['diamond','heart','spade','ace'].map((suit) =>
    <MenuItem value={suit}>{suit}</MenuItem>
  );
  return(
    // <div >
    <div className={classes.addNewCardBtnChildren }>
    <Grid container direction = "column" justify="center" alignItems="stretch" >
      <div >
    <InputLabel id="number-id">Figura:</InputLabel>
      <Select
        labelId="number-id"
        id="number-id"
        value={cardNumber}
        onChange={handleCardNumberChange}>
          {MenuItemsNumbers}
      </Select>
      </div>
      <div >
    <InputLabel id="suit-id">Kolor:</InputLabel>
      <Select
        labelId="suit-id"
        id="suit-id"
        value={suit.suit}
        onChange={handleCardSuitChange}>
          {MenuItemsSuits}
      </Select>
      </div>
      <div >
        <Button variant="contained" color = "primary" onClick = {onAddCardClick} >Dodaj Kartę</Button>
      </div>
    </Grid>
    </div>
  );
}


function CardPlaceHolder(props){
  const classes = useStyles();
  return(
    <Grid item>
    <div className={classes.cardPlaceHolder}>
      {props.component}
    </div>
    </Grid>
  );
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

let cardsArray = []; //TODO change this ugly thing
function HomePage(){
  const classes = useStyles();
  const [suit, setSuit] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [isCardCreated, setIsCardCreated] = useState('');
  const state = {
    suit : [suit, setSuit],
    cardNumber: [cardNumber, setCardNumber],
    isCardCreated: [isCardCreated, setIsCardCreated],
  }
  if(isCardCreated){
   cardsArray.push(<BaseCard color="red" number={cardNumber} suit = {suit}></BaseCard>);
    setIsCardCreated(false);
    console.log("Zmieniono!");
    console.log(cardsArray);
  }

  return (
    <div>
      <h2>Karty na stole: {suit} i {cardNumber} oraz {isCardCreated} {cardsArray}</h2>
      {/* <AddNewCardBtn></AddNewCardBtn> */}
        <Grid container spacing={1}>
          <Grid container item xs = {8} spacing={1}>
            <CardPlaceHolder/>
            <CardPlaceHolder/>
            <CardPlaceHolder/>
            <CardPlaceHolder/>
            
            <CardPlaceHolder/>
          </Grid>


          <Grid container item xs = {4} alignItems="center" justify="flex-end">
            <CardPlaceHolder component={
              <AddNewCardBtn 
                state = {state}
              />
            }/>
          </Grid>

          <h2>Karty w ręku:</h2>
          <Grid container item spacing={1}>
            <CardPlaceHolder/>
            <CardPlaceHolder/>
          </Grid>
        </Grid>

      {/* <Grid container>
        <CardPlaceHolder/>
        <CardPlaceHolder/>
        <CardPlaceHolder/>
        <CardPlaceHolder/>
        <CardPlaceHolder/>
      </Grid> */}
    {/* <Grid container alignContent = "center" direction='row'>
      <BaseCard color="red" number="6" suit = "club"></BaseCard>
      <BaseCard color="black" number="J" suit = "diamond"></BaseCard>
      <BaseCard color="red" number="A" suit = "spade"></BaseCard>
      <BaseCard color="red" number="1" suit = "heart"></BaseCard>
    </Grid> */}
  </div>
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

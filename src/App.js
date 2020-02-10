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
import { useDrag } from 'react-dnd'
import  { ItemTypes }  from './ItemTypes'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { useDrop } from 'react-dnd'
import { BaseCard } from './card'
import { useStyles } from './styles'

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
  const MenuItemsSuits = ['diamond','heart','spade','club'].map((suit) =>
    <MenuItem value={suit}>{suit}</MenuItem>
  );
  return(
    // <div >
    <div className={classes.addNewCardBtnChildren }>
    <Grid container direction = "row" justify="flex-end" alignItems="center" >
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


const  CardPlaceHolder = (props) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: () => ({ name: props.id }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = canDrop && isOver
  let backgroundColor = 'white'
  if (isActive) {
    backgroundColor = 'green'
  } else if (canDrop) {
    backgroundColor = 'gray'
  }
  //
  const classes = useStyles();
  return(
    <Grid item ref={drop} style={{ backgroundColor }}>
    <div className={classes.cardPlaceHolder}>
      {props.component}
      {/* {lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
      )} */}
    </div>
    </Grid>
  );
}


//var cardsDeckArray = [{id: 0, card: <div></div>},{id: 1, card: <div></div>},{id: 2, card: <div></div>},{id: 3, card: <div></div>},{id: 4, card: <div></div>}]; 
var cardsDeckArray = [<div></div>,<div></div>,<div></div>,<div></div>,<div></div>,<div></div>,<div></div>]; 
var cardsHandArray = []; //TODO change this ugly thing
var cardCreated ;
function HomePage(){
  const classes = useStyles();
  const [suit, setSuit] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [isCardCreated, setIsCardCreated] = useState('');
  const [placeholderId, setPlaceholderId] = useState('');
  const [sourceId, setSourceId] = useState('');
  const state = {
    suit : [suit, setSuit],
    cardNumber: [cardNumber, setCardNumber],
    isCardCreated: [isCardCreated, setIsCardCreated],
    placeholderId: [placeholderId, setPlaceholderId],
    sourceId: [sourceId, setSourceId],
  }

  
  if(isCardCreated){
    console.log("Upuszczono na : " + placeholderId)
    if(placeholderId == ''){
      cardCreated = <BaseCard color="red" number={cardNumber} suit = {suit} state = {state} sourceId = {-1}></BaseCard>;
      console.log(cardCreated)
    }
    else{
      console.log("Upuszczono na : " + placeholderId)
      console.log("Upuszczono z : " + sourceId)
      cardsDeckArray[placeholderId] = <BaseCard color="red" number={cardNumber} suit = {suit} state = {state} sourceId = {placeholderId}></BaseCard>;
      
      cardCreated = <div></div>;
      if(sourceId != -1){
        cardsDeckArray[sourceId] = <div></div>;
      }
      setPlaceholderId('');
    }
    
    setIsCardCreated(false);
    console.log("Zmieniono!");
    console.log(cardsDeckArray);
  }

  return (
    <div>
      <DndProvider backend={Backend}>
      <Grid container>
        <h2>Karty na stole: </h2>
        <AddNewCardBtn state = {state}/>
      </Grid>
      
      {/* <AddNewCardBtn></AddNewCardBtn> */}
        <Grid container spacing={1}>
          <Grid container item xs = {8} spacing={1}>
            <CardPlaceHolder id ="0" component={cardsDeckArray[0]}/>
            <CardPlaceHolder id ="1" component={cardsDeckArray[1]}/>
            <CardPlaceHolder id ="2" component={cardsDeckArray[2]}/>
            <CardPlaceHolder id ="3" component={cardsDeckArray[3]}/>
            <CardPlaceHolder id ="4" component={cardsDeckArray[4]}/>
          </Grid>


          <Grid container item xs = {4} alignItems="center" justify="flex-end">
            <CardPlaceHolder component={
              
              <div>{cardCreated}</div> 
              //
              
              }
            />
            
          </Grid>

          <h2>Karty w ręku:</h2>
          <Grid container item spacing={1}>
            <CardPlaceHolder id ="5" component={cardsDeckArray[5]}/>
            <CardPlaceHolder id ="6" component={cardsDeckArray[6]}/>
            <Grid container item xs = {9} alignItems="center" justify="flex-end">
            <CardPlaceHolder component={
              <div>Twoj wynik to:</div> 
              }
            />
          </Grid>
          </Grid>

          
        </Grid>
    </DndProvider>
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

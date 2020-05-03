import React, { useState, useEffect ,setState, useRef } from 'react';
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
import { RulesPage } from './Rules'
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
import { Result } from './PokerLogic'
import Fab from '@material-ui/core/Fab';
// import AddIcon from '/material-ui-icons';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import AddNewCardTooltip from './AddCardDialog';

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
  let backgroundColor = 'transparent'
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


var cardsDeckArray = [
  {id: 0, number: '', suit: '', card: <div></div>},
  {id: 1, number: '', suit: '', card: <div></div>},
  {id: 2, number: '', suit: '', card: <div></div>},
  {id: 3, number: '', suit: '', card: <div></div>},
  {id: 4, number: '', suit: '', card: <div></div>},
  {id: 5, number: '', suit: '', card: <div></div>},
  {id: 6, number: '', suit: '', card: <div></div>}]; 
// var cardsDeckArray = [<div></div>,<div></div>,<div></div>,<div></div>,<div></div>,<div></div>,<div></div>]; 
var cardsHandArray = []; //TODO change this ugly thing
var cardCreated ;


function HomePage(){
  const classes = useStyles();
  const [suit, setSuit] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [isCardCreated, setIsCardCreated] = useState('');
  const [placeholderId, setPlaceholderId] = useState('');
  const [sourceId, setSourceId] = useState('');
  const [cardAttr, setCardAttr] = useState({
     number: 5, 
     suit: 'heart' , 
     source: '', 
     isNowCreated : false, 
     destination: ''
    });
  const state = {
    cardAttr: [cardAttr, setCardAttr],
  }
  if(cardAttr.isNowCreated){
    // console.log("Upuszczono na : " + cardAttr.destination)
    setCardAttr({...cardAttr, isNowCreated: false});
    if(cardAttr.destination == -1){
      cardCreated = <BaseCard color="red" number={cardAttr.number} suit = {cardAttr.suit} state = {state} sourceId = {-1}></BaseCard>;
      // console.log(cardCreated)
    }
    else{
      // console.log("Upuszczono na : " + cardAttr.destination)
      // console.log("Upuszczono z : " + cardAttr.source)
      cardsDeckArray[cardAttr.destination].suit = cardAttr.suit;
      cardsDeckArray[cardAttr.destination].number = cardAttr.number;
      cardsDeckArray[cardAttr.destination].card = 
      <BaseCard color="red" 
        number={cardAttr.number} 
        suit = {cardAttr.suit} 
        state = {state} 
        sourceId = {cardAttr.destination}
      ></BaseCard>;
      // console.log(cardsDeckArray[cardAttr.destination])
      cardCreated = <div></div>;
      if(cardAttr.source != -1 && cardAttr.source != cardAttr.destination ){
        cardsDeckArray[cardAttr.source].card = <div></div>;
        cardsDeckArray[cardAttr.source].number = '';
        cardsDeckArray[cardAttr.source].suit = '';
      }
      setPlaceholderId('');
    }
    
    setIsCardCreated(false);
    // console.log("Zmieniono!");
    // console.log(cardsDeckArray);
  }
  // useEffect([cardAttr]);
  return (
    <React.Fragment>
      <DndProvider backend={Backend}>
      <Grid container>
        <h2 className = "h2-text">Karty na stole: </h2>
      </Grid>
      {/* {cardAttr.number}/{cardAttr.suit}/{cardAttr.source}/{cardAttr.destination}/     */}
      <Grid container spacing={1}>
        <Grid container item xs = {8} spacing={1} >
          <CardPlaceHolder id ="0" component={cardsDeckArray[0].card}/>
          <CardPlaceHolder id ="1" component={cardsDeckArray[1].card}/>
          <CardPlaceHolder id ="2" component={cardsDeckArray[2].card}/>
          <CardPlaceHolder id ="3" component={cardsDeckArray[3].card}/>
          <CardPlaceHolder id ="4" component={cardsDeckArray[4].card}/>
        </Grid>
        <Grid container item xs = {4} spacing={1} alignItems="center" justify="flex-end">
          <CardPlaceHolder className = "card-back" id ="-1" component={
            <div>{cardCreated}</div> 
            }
          />
        </Grid>
      </Grid>
      <Grid>
        <Grid container>
          <h2 className = "h2-text" >Karty w ręku:</h2>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item spacing={1} xs = {4}>
            <CardPlaceHolder id ="5" component={cardsDeckArray[5].card}/>
            <CardPlaceHolder id ="6" component={cardsDeckArray[6].card}/>
            
          </Grid>

          <Grid container item xs = {4} alignItems="flex-end" justify="center">
            
            <AddNewCardTooltip state = {state}/>
          </Grid>


          <Grid container item xs = {4} alignItems="stretch" justify="flex-end">
              <Result deckArray = {cardsDeckArray}></Result>
          </Grid>
          
          
        </Grid>
      </Grid>

    </DndProvider>
  </React.Fragment>
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

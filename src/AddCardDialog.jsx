import React, { useState, useEffect ,setState, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import { cardValues, cardSuits } from './msc/Cards'

import { useStyles } from './styles'
import { withStyles } from '@material-ui/styles'
import { StylesProvider } from '@material-ui/styles'
import Card from '@material-ui/core/Card';



function SimpleDialog(props) {
  const classes = useStyles(props);
  const { onClose, selectedValue, open } = props;
  const [ selectedSuit, setSelectedSuit ] = React.useState({key: 'diamond', label : 'Karo', sign : <div>&diams;</div>, color: 'red'});
  const [ selectedNumber, setSelectedNumber ] = React.useState(0);
//   const [selectedValue, setSelectedValue] = React.useState();
  const handleClose = () => {
    onClose(null);
  };

  const handleListItemClick = value => {
    onClose({number: selectedNumber,
      suit: selectedSuit.key});
  };

  const setSuit = value => {
    console.log(value)
    setSelectedSuit(value);
    console.log(selectedSuit)
  }
  const setNumber = value => {
    console.log(value)
    setSelectedNumber(value);
    
    
  }
  useEffect(() => {
    if(selectedNumber){ //Don't change if component rendered for the first time
      handleListItemClick()
      console.log(selectedNumber)
    }
    }, [selectedNumber]);



  const randomCard = () =>{
    setSelectedNumber(cardValues[~~(Math.random() * cardValues.length)]);
    setSelectedSuit(cardSuits[~~(Math.random() * cardSuits.length)]);
    console.log(cardSuits[~~(Math.random() * cardValues.length)]);
    console.log(cardValues[~~(Math.random() * cardValues.length)])
  }
  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };



  return (
    <StylesProvider injectFirst>
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
    <DialogTitle id="simple-dialog-title">Dodaj nową kartę</DialogTitle>

    <List style={flexContainer}>
    {cardSuits.map(suit => (
          <ListItem button onClick={() => setSuit(suit)} key={suit}>
            <ListItemAvatar>
              <Avatar  className={`${classes.avatar} 
              ${suit.color === 'red'? classes.redColor : classes.blackColor } `}
              >
                {suit.sign}
              </Avatar>
              
            </ListItemAvatar>
            {suit.label}
          </ListItem>
        ))}
    </List>

      <List className={`${classes.cardsList}`} >
        {cardValues.map(cardNumber => (
          <Card>
          <ListItem button onClick={() => setNumber(cardNumber)} key={cardNumber}>
            <ListItemAvatar>
              <div  className={`${selectedSuit.color === 'red'? classes.redColor : classes.blackColor } `}>
                {selectedSuit.sign}
              </div>
            </ListItemAvatar>
            <ListItemText primary={cardNumber} />
          </ListItem>
          </Card>
        ))}
        <Card>
          <ListItem button onClick = {randomCard} key={"A"}>
            <ListItemText primary={"Losowa karta"}  />
          </ListItem>
          </Card>
      </List>
    </Dialog>
    </StylesProvider>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function AddNewCardTooltip(props) {
  const {cardAttr: [cardAttr, setCardAttr]} = {
    cardAttr: useState(0),
    ...(props.state || {})
  };
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    if(value != null){
      setCardAttr({...cardAttr,
        number: value.number,
        suit: value.suit,
        source: -1, 
        destination: -1, 
        isNowCreated: true});
      }
  };

  return (
    <div>
    <Tooltip title="Dodaj nową kartę" TransitionComponent={Zoom}
            aria-label="add" placement="left-end" onClick={handleClickOpen}>
        <Fab color="primary" className={classes.fab}>
        <AddIcon />
        </Fab>
    </Tooltip>
    <SimpleDialog  open={open} onClose={handleClose} />
    </div>
  );
}
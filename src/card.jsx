import React, { useState, setState, useRef } from 'react';
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
import { useStyles } from './styles'

export const BaseCard = (props) => {
    const {cardAttr: [cardAttr, setCardAttr]} = {
      cardAttr: useState(0),
      ...(props.state || {})
    }; 

  
    const [{ isDragging }, drag] = useDrag({
      item: {cardAttr ,type: ItemTypes.CARD },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult()
        
        if (item && dropResult) {
          // console.log("Upuszczono!");
          // console.log(cardAttr);
          // console.log(item);
          // console.log(item.cardAttr.source);
          setCardAttr({
            ...cardAttr, 
            isNowCreated: true,
            destination: dropResult.name,
            source: props.sourceId,
          });

          const { number,suit,source,isNowCreated,destination} = cardAttr;
            // setCardNumber(props.number); 
            // setSuit(props.suit);
            // setPlaceholderId(dropResult.name);
            // setIsCardCreated(true);
            // setSourceId(props.sourceId);
            //alert(`You dropped ${item.number} into ${dropResult.name}!`)
        }
      },
      collect: monitor => ({
        isDragging: !!monitor.isDragging(),
      }),
    })
    const opacity = isDragging ? 0.1 : 1
    const classes = useStyles(props);
    var color = 'red';
    if(props.suit == "hearth" || props.suit == "diamond"){
      color = 'red';
    }
    if(props.suit == "spade" || props.suit == "club"){
      color = 'black';
    }
  
  
    return(
      <div className={classes.card} ref={drag}>
      <Card style={{ opacity }} >
        <CardContent >
          <Grid container direction = "column" alignContent='flex-start'>
            <Grid item className={classes.cardNumber}>
              {props.number}
            </Grid>
            <CardSuit suit={props.suit} color={color}></CardSuit>
          </Grid>
          <Grid container  direction="column" alignItems="center">
            <CardSuit suit = {props.suit} size="big" color = {color} ></CardSuit>
          </Grid>
          <Grid container direction = "column" alignContent='flex-end'>
            <CardSuit suit={props.suit} color={color}></CardSuit>
            <Grid item className={classes.cardNumber}>
              {props.number}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
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
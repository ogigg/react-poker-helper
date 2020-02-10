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



export const useStyles = makeStyles(theme => ({
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
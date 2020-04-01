import React, { useState, useEffect ,setState, useRef } from 'react';


const alSameSuit = (cards) => {
    let suit = cards[0].suit; 
    cards.forEach(card => {
        if(card.suit != suit){
            return false;
        }
    });
    return true;
}


const threeOfAKind = (cards) => {
    let totalNumberOfTriples = 0;
    ['2','3','4','5','6','7','8','9','10','J','Q','K','A'].map((number) =>{
        let numberOfTriples = 0;
        cards.forEach(card => {   
            if(card.number == number){
                numberOfTriples ++;
            }
            
        })
        if(numberOfTriples>=3){
            totalNumberOfTriples = totalNumberOfTriples + Math.floor(numberOfTriples/3);
        }
        // if(numberOfPairs>=3){
        //     return true;
        // }
    })
    if(totalNumberOfTriples == 0) {
        return <div></div>
    }
    else{
        return(<p> Liczba trójek: {totalNumberOfTriples}</p>);
    }
}

const howManyPairs = (cards) => {
    let totalNumberOfPairs = 0;
    ['2','3','4','5','6','7','8','9','10','J','Q','K','A'].map((number) =>{
        let numberOfPairs = 0;
        cards.forEach(card => {   
            if(card.number == number){
                numberOfPairs ++;
            }
        })
        totalNumberOfPairs = totalNumberOfPairs + Math.floor(numberOfPairs/2);
    })

    if(totalNumberOfPairs == 0) {
        return <div></div>
    }
    else{
        return(<p> Liczba par: {totalNumberOfPairs}</p>);
    }
}

const getNextNumber = (number) => {
    let numbers = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let nextIndex = numbers.indexOf(number);
    if(nextIndex == -1){ //number not in array
        return null;
    }
    nextIndex++;
    
    if(nextIndex< numbers.length){
        return numbers[nextIndex];
    }
    else return null;
    
}

const straight = (cards) => { //5 cards in a row
    let isStraight = false;
    let cardsInRow = 0;
    let previousNumber = '';
    cards.forEach(card => { 
        console.log("Numerek : "+ card.number)

        if(cardsInRow == 0){
            previousNumber = card.number;
            cardsInRow++;
        }  
        else{
            if(card.number == getNextNumber(previousNumber)){
                cardsInRow ++;
                previousNumber = card.number;
            }
            else{
                cardsInRow = 0;
                previousNumber = '';
            }
        }
        
        console.log("Numerek : "+ card.number)
        console.log("Poprzedni : "+ previousNumber)
        console.log("Z rzedu : "+ cardsInRow)
        
    })
    return(<p> Strit: {cardsInRow}</p>);

}
export const Result = (props) =>{
    let a = ''
    getNextNumber('3');
    // if(isThreeOfAKind){
    //     a = 'three'
    // }
    let deckArray = props.deckArray;
    // let handArray = props.handArray;
    return(<div>{howManyPairs(deckArray)} {threeOfAKind(deckArray)}  {straight(deckArray)}</div>);

    
}
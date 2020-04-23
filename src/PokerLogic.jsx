import React, { useState, useEffect ,setState, useRef } from 'react';
import { useStyles } from './styles'

const alSameSuit = (cards) => {
    let suit = cards[0].suit; 
    cards.forEach(card => {
        if(card.suit != suit){
            return false;
        }
    });
    return true;
}


const getTriples = (cards) => {
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
    return totalNumberOfTriples;
}

const threeOfAKind = (cards) => {
    let totalNumberOfTriples = getTriples(cards);
    if(totalNumberOfTriples == 0) {
        return <div></div>
    }
    else{
        return(<p> Liczba trójek: {totalNumberOfTriples}</p>);
    }
}

const getPairs = (cards) => {
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
    return totalNumberOfPairs
   
}

const pairs = (cards) => {
    let totalNumberOfPairs = getPairs(cards);
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

const straightFlush = (cards) => {
    let isStraight = false;
    let cardsInRow = 0;
    let previousNumber = '';
    let sortedCards = sortCards(cards);
    let cardsWithStraight = [];
    console.log(sortedCards);
    let diamonds = 0;
    let spades = 0;
    let hearts = 0;
    let clubs = 0;
    if(!isStraight){
        for (let card of sortedCards) {
            if(cardsInRow == 0){
                previousNumber = card.number;
                cardsInRow++;
                cardsWithStraight.push(card.number);
                if(card.suit == 'spade')
                    spades++
                if(card.suit == 'diamond')
                    diamonds++
                if(card.suit == 'heart')
                    hearts++
                if(card.suit == 'club')
                    clubs++
            }  
            else{
                if(getCardRank(card.number) == getCardRank(previousNumber)+1){
                    cardsInRow ++;
                    previousNumber = card.number;
                    cardsWithStraight.push(card.number);
                    if(card.suit == 'spade')
                        spades++
                    if(card.suit == 'diamond')
                        diamonds++
                    if(card.suit == 'heart')
                        hearts++
                    if(card.suit == 'club')
                        clubs++
                }
                else{
                    //check if currently checked card in the same as previous one 
                    //for example 6 7 7 8 9 10 

                    if(getCardRank(card.number) == getCardRank(previousNumber)){
                        previousNumber = card.number;
                       
                    }
                    else{
                        cardsInRow = 0;
                        previousNumber = '';
                        cardsWithStraight = [];
                    }
                    
                }
            }
            if(cardsInRow == 5){
                isStraight=true;
                break;
                
            }
            
            
        }
    }


    if(isStraight && (spades >=5 || diamonds >=5 || hearts >=5 || clubs >=5 ))
        return(<p> Poker: ({cardsWithStraight.map(c=> {return (c + ", ");})})</p>);
        
    else
        return(<div></div>);
}

const fullHouse = (cards) => { //One pair and three of a kind
    console.log(`pary : ${getPairs(cards)} ${getTriples(cards)}`)
    console.log()
    if(cards.filter(c => c.suit != "").length >=5 && getPairs(cards) >= 1 && getTriples(cards) >= 1)
        return(<p> Full </p>);
    else
        return(<div></div>);
}

const fourOfKind = (cards) =>{
    let totalNumberOfFours = 0;
    ['2','3','4','5','6','7','8','9','10','J','Q','K','A'].map((number) =>{
        let numberOfFours = 0;
        cards.forEach(card => {   
            if(card.number == number){
                numberOfFours ++;
            }
            
        })
        if(numberOfFours>=4){
            totalNumberOfFours = totalNumberOfFours + Math.floor(numberOfFours/4);
        }

    })
    if(totalNumberOfFours == 0) {
        return <div></div>
    }
    else{
        return(<p>Kareta</p>);
    }


}

const flush = (cards) => { //5 cards with the same color
    let diamonds = 0;
    let spades = 0;
    let hearts = 0;
    let clubs = 0;
    cards.map(card => {
        if(card.suit == 'spade')
            spades++
        if(card.suit == 'diamond')
            diamonds++
        if(card.suit == 'heart')
            hearts++
        if(card.suit == 'club')
            clubs++
    })
    if(spades >=5)
        return(<p> Kolor - Pik</p>);
    if(diamonds >=5)
        return(<p> Kolor - Karo</p>);
    if(hearts >=5)
        return(<p> Kolor - Kier</p>);
    if(clubs >=5)
        return(<p> Kolor - Trefl</p>);
    else
        return(<div></div>);

}

const straight = (cards) => { //5 cards in a row
    let isStraight = false;
    let cardsInRow = 0;
    let previousNumber = '';
    let sortedCards = sortCards(cards);
    let cardsWithStraight = [];
    console.log(sortedCards);
    //check if ace is in cards and check for ace-straight (A 2 3 4 5) or (10 J Q K A)
    if(sortedCards.some(o=>o.number == 'A'))
        if( sortedCards.some(o=>o.number == '2') && 
            sortedCards.some(o=>o.number == '3') &&
            sortedCards.some(o=>o.number == '4') && 
            sortedCards.some(o=>o.number == '5')){
                isStraight=true;
                cardsWithStraight=['A','2','3','4','5'];
        }
        
    if(!isStraight){
        for (let card of sortedCards) {
            if(cardsInRow == 0){
                previousNumber = card.number;
                cardsInRow++;
                cardsWithStraight.push(card.number);
            }  
            else{
                if(getCardRank(card.number) == getCardRank(previousNumber)+1){
                    cardsInRow ++;
                    previousNumber = card.number;
                    cardsWithStraight.push(card.number);
                }
                else{
                    //check if currently checked card in the same as previous one 
                    //for example 6 7 7 8 9 10 
                    if(getCardRank(card.number) == getCardRank(previousNumber)){
                        previousNumber = card.number;
                    }
                    else{
                        cardsInRow = 0;
                        previousNumber = '';
                        cardsWithStraight = [];
                    }
                    
                }
            }
            if(cardsInRow == 5){
                isStraight=true;
                break;
                
            }
            
            
        }
    }   
    if(isStraight)
        return(<p> Strit: ({cardsWithStraight.map(c=> {return (c + ", ");})})</p>);
        
    else
        return(<div></div>);

}

const getCardRank = (card) => {
    const cardRank = parseInt(card);
    if(isNaN(cardRank)){
        if(card == '')
            return 15;
        if(card == 'J')
            return 11;
        if(card == 'Q')
            return 12;
        if(card == 'K')
            return 13;
        if(card == 'A')
            return 14;
    }
    else 
        return cardRank
    
}

const sortCards = (cards) => {
    //sorting cards ascending by number
    const tempCards = [...cards]
    return tempCards.sort(function(a, b){return getCardRank(a.number)-getCardRank(b.number)}) 
}





export const Result = (props) =>{
    let deckArray = props.deckArray;
    const classes = useStyles();

    return(<div className = {classes.result}>
        {pairs(deckArray)} 
        {threeOfAKind(deckArray)}  
        {straight(deckArray)} 
        {flush(deckArray)}
        {fullHouse(deckArray)}
        {fourOfKind(deckArray)}
        {straightFlush(deckArray)}
        </div>);
}
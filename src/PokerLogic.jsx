const alSameSuit = (cards) => {
    let suit = cards[0].suit; 
    cards.forEach(card => {
        if(card.suit != suit){
            return false;
        }
    });
    return true;
}


export const Result = (props) =>{

    let deckArray = props.deckArray;
    let handArray = props.handArray;

    
}
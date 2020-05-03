import React, { useState, useEffect ,setState, useRef } from 'react';
export const cardValues = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

export const cardSuits = [
    {key: 'diamond', label : 'Karo', sign : <div>&diams;</div>, color: 'red'},
    {key: 'heart', label : 'Kier', sign : <div>&#9829;</div>, color: 'red'},
    {key: 'spade', label : 'Pik', sign : <div>&#9824;</div>, color: 'black'},
    {key: 'club', label : 'Trefl', sign : <div>&#9827;</div>, color: 'black'}]

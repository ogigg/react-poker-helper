import React from 'react';

export const RulesPage = () => {
    return (
        <div>
            <h1>Zasady gry w pokera</h1>
                <p>Poker to jedna z najpopularniejszych gier karcianych, nie tylko w naszym kraju, ale na całym świecie. Jedni grają amatorsko, jedynie dla przyjemności, inni rywalizują w turniejach, gdzie stawką są naprawdę duże pieniądze. Gra w pokera wciąga i sprawia, że czasem trudno wręcz odejść od stołu i powiedzieć: pas!</p>
            <h2>Układy kart w pokerze</h2>
                <p><b>Para</b> – dwie karty o takiej samej wartości. W przypadku kilku takich układów na stole, wygrywa gracz, którego para składa się z silniejszych kart.</p>
                <p><b>Dwie pary</b> – w przypadku kilku układów na stole, reguły pokerowe wskazują, że wygrywa gracz posiadający najwyższą parę.</p>
                <p><b>Trójka</b> – układ złożony z trzech kart o tej samej wartości.</p>
                <p><b>Strit</b> – sekwens kart w różnych kolorach, np. od 3 do 7 lub od 10 do Asa. Jeśli w poker przez Internet kilku graczy posiada strita, decyduje układ z najwyższą kartą.</p>
                <p><b>Kolor</b> – układ pięciu kart w tym samym kolorze karcianym (pik, trefl, karo, kier). Analogiczna sytuacja co wyżej, w przypadku kilku takich układów decyduje wyższa karta.</p>
                <p><b>Full</b> – bardzo mocny układ, który pozwala na odważne licytowanie w poker na kasę. Składa się z trójki i jednej pary. Jeśli kilku graczy uzyska ten układ, najpierw decyduje najwyższa trójka, a potem para.</p>
                <p><b>Kareta</b> – cztery karty o jednakowej wartości. W poker online układ ten jest bardzo rzadki i zwykle pozwala na bardzo wysoką licytację.</p>   
                <p><b>Poker</b> – najsilniejszy układ w poker zasady gry. To sekwens kart w tym samym kolorze. Innymi słowy, połączenie strita i koloru. Istnieje również poker królewski złożony od 10 do asa.</p>
        </div>
    );
    }
(this["webpackJsonppoker-helper"]=this["webpackJsonppoker-helper"]||[]).push([[0],{52:function(e,a,t){},79:function(e,a,t){e.exports=t(90)},84:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),i=t.n(c),l=(t(84),t(23)),o=t(15),u=t(126),s=(t(52),t(125)),m=t(32),d=t(27);function b(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Zasady gry w pokera"),r.a.createElement("p",null,"Poker to jedna z najpopularniejszych gier karcianych, nie tylko w naszym kraju, ale na ca\u0142ym \u015bwiecie. Jedni graj\u0105 amatorsko, jedynie dla przyjemno\u015bci, inni rywalizuj\u0105 w turniejach, gdzie stawk\u0105 s\u0105 naprawd\u0119 du\u017ce pieni\u0105dze. Gra w pokera wci\u0105ga i sprawia, \u017ce czasem trudno wr\u0119cz odej\u015b\u0107 od sto\u0142u i powiedzie\u0107: pas!"),r.a.createElement("h2",null,"Uk\u0142ady kart w pokerze"),r.a.createElement("p",null,r.a.createElement("b",null,"Para")," \u2013 dwie karty o takiej samej warto\u015bci. W przypadku kilku takich uk\u0142ad\xf3w na stole, wygrywa gracz, kt\xf3rego para sk\u0142ada si\u0119 z silniejszych kart."),r.a.createElement("p",null,r.a.createElement("b",null,"Dwie pary")," \u2013 w przypadku kilku uk\u0142ad\xf3w na stole, regu\u0142y pokerowe wskazuj\u0105, \u017ce wygrywa gracz posiadaj\u0105cy najwy\u017csz\u0105 par\u0119."),r.a.createElement("p",null,r.a.createElement("b",null,"Tr\xf3jka")," \u2013 uk\u0142ad z\u0142o\u017cony z trzech kart o tej samej warto\u015bci."),r.a.createElement("p",null,r.a.createElement("b",null,"Strit")," \u2013 sekwens kart w r\xf3\u017cnych kolorach, np. od 3 do 7 lub od 10 do Asa. Je\u015bli w poker przez Internet kilku graczy posiada strita, decyduje uk\u0142ad z najwy\u017csz\u0105 kart\u0105."),r.a.createElement("p",null,r.a.createElement("b",null,"Kolor")," \u2013 uk\u0142ad pi\u0119ciu kart w tym samym kolorze karcianym (pik, trefl, karo, kier). Analogiczna sytuacja co wy\u017cej, w przypadku kilku takich uk\u0142ad\xf3w decyduje wy\u017csza karta."),r.a.createElement("p",null,r.a.createElement("b",null,"Full")," \u2013 bardzo mocny uk\u0142ad, kt\xf3ry pozwala na odwa\u017cne licytowanie w poker na kas\u0119. Sk\u0142ada si\u0119 z tr\xf3jki i jednej pary. Je\u015bli kilku graczy uzyska ten uk\u0142ad, najpierw decyduje najwy\u017csza tr\xf3jka, a potem para."),r.a.createElement("p",null,r.a.createElement("b",null,"Kareta")," \u2013 cztery karty o jednakowej warto\u015bci. W poker online uk\u0142ad ten jest bardzo rzadki i zwykle pozwala na bardzo wysok\u0105 licytacj\u0119."),r.a.createElement("p",null,r.a.createElement("b",null,"Poker")," \u2013 najsilniejszy uk\u0142ad w poker zasady gry. To sekwens kart w tym samym kolorze. Innymi s\u0142owy, po\u0142\u0105czenie strita i koloru. Istnieje r\xf3wnie\u017c poker kr\xf3lewski z\u0142o\u017cony od 10 do asa."))}var p=t(128),E=t(131),k=t(132),w="card",v=t(45),j=t(127),y=t(130),f=t(122),g=t(124),z=t(129),h=t(119),O=Object(h.a)((function(e){return{card:{"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",height:"15vw",width:"10vw"},cardPlaceHolder:{height:"15vw",width:"10vw",borderStyle:"dashed"},addNewCardBtnChildren:{flex:"1"},suit:{color:function(e){return e.color},fontSize:"1vw",margin:"-0.1vw"},bigSuit:{fontSize:"5vw",margin:"-0.5vw"},cardNumber:{fontWeight:"bold",fontSize:"2vw"}}})),N=function(e){var a=Object(l.a)({cardAttr:Object(n.useState)(0)},e.state||{}),t=Object(o.a)(a.cardAttr,2),c=t[0],i=t[1],u=Object(z.a)({item:{cardAttr:c,type:w},end:function(a,t){var n=t.getDropResult();if(a&&n){i(Object(l.a)({},c,{isNowCreated:!0,destination:n.name,source:e.sourceId}));c.number,c.suit,c.source,c.isNowCreated,c.destination}},collect:function(e){return{isDragging:!!e.isDragging()}}}),m=Object(o.a)(u,2),d=m[0].isDragging,b=m[1],p=d?.1:1,E=O(e),k="red";return"hearth"!=e.suit&&"diamond"!=e.suit||(k="red"),"spade"!=e.suit&&"club"!=e.suit||(k="black"),r.a.createElement("div",{className:E.card,ref:b},r.a.createElement(f.a,{style:{opacity:p}},r.a.createElement(g.a,null,r.a.createElement(s.a,{container:!0,direction:"column",alignContent:"flex-start"},r.a.createElement(s.a,{item:!0,className:E.cardNumber},e.number),r.a.createElement(S,{suit:e.suit,color:k})),r.a.createElement(s.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(S,{suit:e.suit,size:"big",color:k})),r.a.createElement(s.a,{container:!0,direction:"column",alignContent:"flex-end"},r.a.createElement(S,{suit:e.suit,color:k}),r.a.createElement(s.a,{item:!0,className:E.cardNumber},e.number)))))};function S(e){var a=O(e);return"diamond"===e.suit?r.a.createElement("div",{className:"".concat("big"==e.size?a.bigSuit:""," ").concat(a.suit)},"\u2666"):"spade"===e.suit?r.a.createElement("div",{className:"".concat("big"===e.size?a.bigSuit:""," ").concat(a.suit)},"\u2660"):"heart"===e.suit?r.a.createElement("div",{className:"".concat("big"===e.size?a.bigSuit:""," ").concat(a.suit)},"\u2665"):"club"===e.suit?r.a.createElement("div",{className:"".concat("big"===e.size?a.bigSuit:""," ").concat(a.suit)},"\u2663"):r.a.createElement("div",{className:"".concat("big"===e.size?a.bigSuit:""," ").concat(a.suit)},"\xa0")}var A=t(72),K=t(70),C=function(e){var a=parseInt(e);return isNaN(a)?""==e?15:"J"==e?11:"Q"==e?12:"K"==e?13:"A"==e?14:void 0:a},I=function(e){return Object(A.a)(e).sort((function(e,a){return C(e.number)-C(a.number)}))},x=function(e){!function(e){var a=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],t=a.indexOf(e);-1==t||++t<a.length&&a[t]}("3");var a=e.deckArray;return r.a.createElement("div",null,function(e){var a=0;return["2","3","4","5","6","7","8","9","10","J","Q","K","A"].map((function(t){var n=0;e.forEach((function(e){e.number==t&&n++})),a+=Math.floor(n/2)})),0==a?r.a.createElement("div",null):r.a.createElement("p",null," Liczba par: ",a)}(a)," ",function(e){var a=0;return["2","3","4","5","6","7","8","9","10","J","Q","K","A"].map((function(t){var n=0;e.forEach((function(e){e.number==t&&n++})),n>=3&&(a+=Math.floor(n/3))})),0==a?r.a.createElement("div",null):r.a.createElement("p",null," Liczba tr\xf3jek: ",a)}(a),"  ",function(e){var a=!1,t=0,n="",c=I(e),i=[];if(console.log(c),c.some((function(e){return"A"==e.number}))&&c.some((function(e){return"2"==e.number}))&&c.some((function(e){return"3"==e.number}))&&c.some((function(e){return"4"==e.number}))&&c.some((function(e){return"5"==e.number}))&&(a=!0,i=["A","2","3","4","5"]),!a){var l,o=Object(K.a)(c);try{for(o.s();!(l=o.n()).done;){var u=l.value;if(0==t?(n=u.number,t++,i.push(u.number)):C(u.number)==C(n)+1?(t++,n=u.number,i.push(u.number)):(t=0,n="",i=[]),5==t){a=!0;break}}}catch(s){o.e(s)}finally{o.f()}}return a?r.a.createElement("p",null," Strit: (",i.map((function(e){return e+", "})),")"):r.a.createElement("div",null)}(a)," ",function(e){var a=0,t=0,n=0,c=0;return e.map((function(e){"spade"==e.suit&&t++,"diamond"==e.suit&&a++,"heart"==e.suit&&n++,"club"==e.suit&&c++})),t>=5?r.a.createElement("p",null," Kolor - Pik"):a>=5?r.a.createElement("p",null," Kolor - Karo"):n>=5?r.a.createElement("p",null," Kolor - Kier"):c>=5?r.a.createElement("p",null," Kolor - Trefl"):r.a.createElement("div",null)}(a))};function D(e){var a;return a="rules"===e.page?r.a.createElement(u.a,{component:m.b,to:"/rules",variant:"contained"},"Zasady gry"):r.a.createElement(u.a,{component:m.b,to:"/home",variant:"contained"},"Powr\xf3t"),r.a.createElement("div",{className:"header container"},"Aplikacja wspomagaj\u0105ca gr\u0119 w pokera",a)}function J(e){var a=Object(l.a)({cardAttr:Object(n.useState)(0)},e.state||{}),t=Object(o.a)(a.cardAttr,2),c=t[0],i=t[1],m=O(),d=["2","3","4","5","6","7","8","9","10","J","Q","K","A"].map((function(e){return r.a.createElement(E.a,{value:e},e)})),b=["diamond","heart","spade","club"].map((function(e){return r.a.createElement(E.a,{value:e},e)}));return r.a.createElement("div",{className:m.addNewCardBtnChildren},r.a.createElement(s.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center"},r.a.createElement("div",null,r.a.createElement(k.a,{id:"number-id"},"Figura:"),r.a.createElement(p.a,{labelId:"number-id",id:"number-id",value:c.number,onChange:function(e){i(Object(l.a)({},c,{number:e.target.value}))}},d)),r.a.createElement("div",null,r.a.createElement(k.a,{id:"suit-id"},"Kolor:"),r.a.createElement(p.a,{labelId:"suit-id",id:"suit-id",value:c.suit,onChange:function(e){i(Object(l.a)({},c,{suit:e.target.value}))}},b)),r.a.createElement("div",null,r.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),i(Object(l.a)({},c,{source:-1,destination:-1,isNowCreated:!0}))}},"Dodaj Kart\u0119"))))}var P,Q=function(e){var a=Object(y.a)({accept:w,drop:function(){return{name:e.id}},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),t=Object(o.a)(a,2),n=t[0],c=n.canDrop,i=n.isOver,l=t[1],u="white";c&&i?u="green":c&&(u="gray");var m=O();return r.a.createElement(s.a,{item:!0,ref:l,style:{backgroundColor:u}},r.a.createElement("div",{className:m.cardPlaceHolder},e.component))},W=[{id:0,number:"",suit:"",card:r.a.createElement("div",null)},{id:1,number:"",suit:"",card:r.a.createElement("div",null)},{id:2,number:"",suit:"",card:r.a.createElement("div",null)},{id:3,number:"",suit:"",card:r.a.createElement("div",null)},{id:4,number:"",suit:"",card:r.a.createElement("div",null)},{id:5,number:"",suit:"",card:r.a.createElement("div",null)},{id:6,number:"",suit:"",card:r.a.createElement("div",null)}];function B(){O();var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=(a[0],a[1],Object(n.useState)("")),c=Object(o.a)(t,2),i=(c[0],c[1],Object(n.useState)("")),u=Object(o.a)(i,2),m=(u[0],u[1]),d=Object(n.useState)(""),b=Object(o.a)(d,2),p=(b[0],b[1]),E=Object(n.useState)(""),k=Object(o.a)(E,2),w=(k[0],k[1],Object(n.useState)({number:5,suit:"heart",source:"",isNowCreated:!1,destination:""})),y=Object(o.a)(w,2),f=y[0],g=y[1],z={cardAttr:[f,g]};return f.isNowCreated&&(g(Object(l.a)({},f,{isNowCreated:!1})),-1==f.destination?P=r.a.createElement(N,{color:"red",number:f.number,suit:f.suit,state:z,sourceId:-1}):(W[f.destination].suit=f.suit,W[f.destination].number=f.number,W[f.destination].card=r.a.createElement(N,{color:"red",number:f.number,suit:f.suit,state:z,sourceId:f.destination}),P=r.a.createElement("div",null),-1!=f.source&&f.source!=f.destination&&(W[f.source].card=r.a.createElement("div",null),W[f.source].number="",W[f.source].suit=""),p("")),m(!1)),r.a.createElement("div",null,r.a.createElement(j.a,{backend:v.a},r.a.createElement(s.a,{container:!0},r.a.createElement("h2",null,"Karty na stole: "),r.a.createElement(J,{state:z})),r.a.createElement(s.a,{container:!0,spacing:1},r.a.createElement(s.a,{container:!0,item:!0,xs:8,spacing:1},r.a.createElement(Q,{id:"0",component:W[0].card}),r.a.createElement(Q,{id:"1",component:W[1].card}),r.a.createElement(Q,{id:"2",component:W[2].card}),r.a.createElement(Q,{id:"3",component:W[3].card}),r.a.createElement(Q,{id:"4",component:W[4].card})),r.a.createElement(s.a,{container:!0,item:!0,xs:4,alignItems:"center",justify:"flex-end"},r.a.createElement(Q,{id:"-1",component:r.a.createElement("div",null,P)}))),r.a.createElement(s.a,null,r.a.createElement(s.a,{container:!0},r.a.createElement("h2",null,"Karty w r\u0119ku:")),r.a.createElement(s.a,{container:!0,spacing:1},r.a.createElement(s.a,{container:!0,item:!0,spacing:1,xs:8},r.a.createElement(Q,{id:"5",component:W[5].card}),r.a.createElement(Q,{id:"6",component:W[6].card})),r.a.createElement(s.a,{container:!0,item:!0,xs:4,alignItems:"center",justify:"flex-end"},r.a.createElement(x,{deckArray:W}))))))}var T=function(){var e=Object(n.useState)("rules"),a=Object(o.a)(e,2),t=a[0],c=a[1];return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(D,{page:t}),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/rules",render:function(e){return c("home"),r.a.createElement(b,null)}}),r.a.createElement(d.a,{path:"/",render:function(e){return c("rules"),r.a.createElement(B,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[79,1,2]]]);
//# sourceMappingURL=main.17ca4611.chunk.js.map
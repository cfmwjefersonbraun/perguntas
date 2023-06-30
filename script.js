var things = ['Como pode melhorar?', 'O que mais \u00e9 poss\u00edvel?', 'Que m\u00e1gica posso criar aqui?', 'Quais as infinitas possibilidades?', 'Universo, mostre-me algo m\u00e1gico', 'Quem \u00e9 voc\u00ea hoje e que gloriosas aventuras viver\u00e1?', 'O que est\u00e1 dispon\u00edvel hoje que n\u00e3o estava antes?', 'De que diferente ponto de vista voc\u00ea pode ver isso?', 'Qual \u00e9 a possibilidade n\u00e3o vista?', 'O que se requer para ter total facilidade e clareza com isso?', 'Se voc\u00ea estiver sendo voc\u00ea, o que voc\u00ea escolhe?'];
var thing = things[Math.floor(Math.random()*things.length)];
document.getElementById("perg").innerHTML = thing;
document.getElementById("body").className = thing;

function refreshPage(){
    window.location.reload();
} 
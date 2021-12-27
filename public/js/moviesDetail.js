/*------- Práctico: Manipulando elementos con JavaScript -------*/ 

let h1 = document.querySelector('h1');
let article = document.querySelector('article');
let body = document.body;

h1.style.color = 'white';
h1.style.backgroundColor = 'teal';

article.classList.add('transparente');

body.style.backgroundColor = 'gray';
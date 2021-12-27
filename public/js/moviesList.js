/*------- Práctico: Manipulando elementos con JavaScript -------*/ 

let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let li = document.querySelectorAll('a')

let dark = confirm('¿Desea modo oscuro?')

/*if(dark){
    body.style.backgroundColor = '#7f7f7f';
    body.classList.add('fondoMoviesList')
}*/

if(dark){
    body.style.backgroundColor = '#7f7f7f';
    body.classList.add('fondoMoviesList');
    for (let i = 0; i < li.length; i++) {
        li[i].style.color = '#fff'        
    }
}

h1.innerText = 'LISTADO DE PELÍCULAS';
h1.style.color = 'white';
h1.style.backgroundColor = 'teal';
h1.style.padding = '20px'

/*------- Práctico: Agregando interacción con eventos -------*/

let logo = document.querySelector('figure');

logo.addEventListener('mouseover', ()=>{
    body.style.backgroundColor = '#7f7f7f';
    h1.style.color = '#fff';
    body.classList.add('fondoMoviesList');
    for (let i = 0; i < li.length; i++) {
        li[i].style.color = '#fff'        
    }
})
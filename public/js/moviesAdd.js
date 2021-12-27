/*------- Práctico: Manipulando elementos con JavaScript -------*/ 

let h1 = document.querySelector('h1');
let article = document.querySelector('article');
let section = document.querySelector('section');

h1.innerText = 'AGREGAR PELÍCULAS';
h1.classList.add('titulo');

article.classList.add('fondoTransparente');

section.classList.add('fondoCRUD');

/*------- Práctico: Agregando interacción con eventos -------*/

h1.style.padding = '5px 0';

h1.addEventListener('mouseover', () => {
    h1.style.color = '#fff';
    h1.style.backgroundColor = 'teal';
})
 
let input = document.querySelector('#title');

input.addEventListener('keypress', () => {
    var estadoSecreto = 0;

    let mensaje = 'secreto';
    let separacion = "";

    let mensajeArray = mensaje.split(separacion);

    let inputlength = input.value.length;

    for (let i = 0; i < inputlength ; i++) {
        if(input.value[i] === mensajeArray[i]){
            estadoSecreto++;
        }else{
            estadoSecreto = 0;
        }
    }

    setTimeout(() => {
        estadoSecreto === 6 &&  alert('SECRETO MAGICO')
    }, 200);
    
})
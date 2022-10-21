/*
EX: Dando função apenas para uma tecla. 
function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/

// ------------------------------------------------------

// ESSA FORMA ABAIXO É UTILIZANDO O WHILE
// function tocaSom(idElementoAudio) {
//     document.querySelector(idElementoAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;
// while(contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     const idAudio = `#som_${instrumento}`;

//     // console.log(idAudio);

//     tecla.onclick = function() {
//         tocaSom(idAudio);
//     };

//     contador++;

//     // console.log(contador);
// }

// ------------------------------------------------------

function tocaSom(seletorAudio) {
    document.querySelector(seletorAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    // quando perta a tecla
    tecla.onkeydown = function(evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');       
        }
    }
    // quando solta a tecla
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}

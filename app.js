/* Variables------------------------------------------------------------------------ */

const btnMenu = document.querySelector('#btnMenu')
const btnCarrusel = document.querySelector('#btnCarrusel')
const flotanteMenu = document.querySelector('.flotanteMenu')
const carrusel = document.querySelector('.cajaCarrusel')
const menuBtns = document.querySelectorAll('.menu_item')
let position = 1



/* Funciones------------------------------------------------------------------------ */

const mostrarMenu = () => {
    flotanteMenu.classList.toggle('flotanteMenu--on')
}
const esconderMenu = () => {
    flotanteMenu.classList.toggle('flotanteMenu--on')
}
const activarSobreMi = () => {
    let operacion = position * -33.3
    carrusel.style.transform = 'translateX('+operacion+'%)'
    if(position == 2){
        position = 0
    }else{
        position++
    }
}

/* Eventos--------------------------------------------------------------------------- */

btnMenu.addEventListener('click', mostrarMenu)
btnCarrusel.addEventListener('click', activarSobreMi)

/* Recorrer arreglos */
menuBtns.forEach( botones => {
    botones.addEventListener('click', esconderMenu)
})





// toppingNuevo.onclick = function() {
//     mostrarClick('Queso Extra'); // Aquí pase el texto como argumento queso extra 
// };

// toppingNuevo.onclick = function() {
//     mostrarClick(toppingNuevo.innerText);
// };


//agregar eventListener

const aceituna = document.getElementById('aceituna')

function mostrarClick() {
    console.log(aceituna.innerText)
}

aceituna.addEventListener('click', mostrarClick)

// console.log(aceituna)
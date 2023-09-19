//innerText significa texto interno representara el texto interno

//textContent presenta el texto con sus espacios o tabulaciones
// console.log(listOfToppings.textContent)

//innerHTML significa la etiqueta contodo y su textos.
// console.log(listOfToppings.innerHTML)

//Crear elemento nuevo en el html desde javascript co el metodo createElement
const listaDeToppings = document.getElementById('lista-toppings');


const toppingNuevo = document.createElement('li');
const toppingNuevo2 = document.createElement('li');
console.log(toppingNuevo)
toppingNuevo.classList.add("toppings", "fondo-marron" )
toppingNuevo.innerText = "Queso Extra"
toppingNuevo2.classList.add("toppings", "fondo-naranja" )
toppingNuevo2.innerText = "Repollos"
//Especificar donde se agregara el nuevo elemento con el metodo ==> append()
listaDeToppings.append(toppingNuevo)
listaDeToppings.append(toppingNuevo2)

//Remover elemento con el metodo ==> remove()
toppingNuevo2.remove()



//recorrer el dom 
console.log('ParentElement')
console.log(listaDeToppings.parentElement)
console.log('children')
console.log(listaDeToppings.children)


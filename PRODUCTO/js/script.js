console.log("hola")
console.log(document)
console.log(document.links)
console.log(document.querySelector("a").getAttribute("href"))
console.log(document.getElementsByTagName("h1"))  

const $ELEMENTO = document.querySelector("a")
console.log($ELEMENTO.hasAttribute("href"))

$ELEMENTO.style.backgroundColor="green"


console.log(getComputedStyle(document.documentElement).getPropertyValue("--color-secundario"))
document.documentElement.style.setProperty("--color-secundario", "333")
document.documentElement.style.setProperty("--color-primario", "fff")
console.log($ELEMENTO.hasAttribute("href"))

document.querySelector("a").setAttribute("href", "#inicio")
console.log(document.querySelector("a").getAttribute("href"))

console.log(document.querySelector("h1").className)

console.log(document.querySelector("h1").classList.contains("titulo"))

 function boton(){
    const $DIV = document.getElementById("add-to-cart")
    $DIV.getElementsByTagName("h3").textContent = "Cambio color"
    $DIV.classList.toggle("fondo-oscuro")
 }

//const $BOTON = document.getElementById("boton")
//$BOTON.onclick = boton


function cambiarColor() {
    var elemento = document.getElementById("miElemento"); 
    var colores = ["red", "blue", "green", "yellow", "purple", "orange"];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    
    elemento.style.backgroundColor = colorAleatorio;
  }
  
  var numero = 1; 

function aumentarNumero() {
  numero++;
  mostrarNumero();
}

function disminuirNumero() {
  numero--;
  mostrarNumero();
}

function mostrarNumero() {
  var elementoNumero = document.getElementById("numeros");
  elementoNumero.textContent = numero;
}
let caja = document.getElementById("micaja")
const boton2 =document.getElementById("boton2")
const boton3 =document.getElementById("boton3")


let micaja2 = document.getElementById("micaja2")
const boton4 =document.getElementById("boton4")

function Agregar(){
    caja.classList.add("highlight");
}

function Eliminar(){
    caja.classList.remove("highlight");
}

function Cambiar(){
    caja.classList.toggle("highlight");
}

function Ocultar(){
    caja.style.display = "none";
}


boton2.addEventListener("click", Eliminar)
boton3.addEventListener("click", function(){
    caja.classList.toggle("highlight")
})


var nombre = "jorge"
var nombre = "carlos"

let estudiantes = ["jorge", "carlos", "pedro", "juan", "maria"]

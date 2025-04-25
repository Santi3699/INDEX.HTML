const inp_tarea = document.getElementById("tarea")
const boton_guardar = document.getElementById("guardar")
const lista_tareas = document.getElementById("tareas")
const inp_fecha = document.getElementById("fecha")
let lista_de_tareas = []

function cargar_tareas(){
    lista_de_tareas = JSON.parse(localStorage.getItem("tareas"));
    for(elemento of lista_de_tareas){
        let tarea = elemento.tarea
        let fecha = elemento.fecha
        let nuevo_div = document.createElement("div")
        nuevo_div.textContent = tarea + " | " + fecha
        lista_tareas.appendChild(nuevo_div)
    }

}

function guardar_tarea() {
    let tarea = inp_tarea.value
    let fecha = inp_fecha.value
    let objeto_tarea = {"tarea":tarea, "fecha":fecha}
    lista_de_tareas.push(objeto_tarea)
    localStorage.setItem('tareas', JSON.stringify(lista_de_tareas));{}
    let nuevo_div = document.createElement("div")
    nuevo_div.textContent = tarea + " | " + fecha
    lista_tareas.appendChild(nuevo_div)
}

boton_guardar.addEventListener("click", guardar_tarea)

// Guardar un dato
//localStorage.setItem('nombre', 'Juan');

// Recuperar un dato
//let nombre = localStorage.getItem('nombre');
//console.log(nombre); // Muestra "Juan"

// Convertir a JSON para almacenar objetos
//let usuario = {nombre: "Juan", edad: 30};
//localStorage.setItem('usuario', JSON.stringify(usuario));

//let usuarioRecuperado = JSON.parse(localStorage.getItem('usuario'));
//console.log(usuarioRecuperado.nombre)

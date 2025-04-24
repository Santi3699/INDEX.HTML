// Ejemplo de bucle for
//let total = 0
//for (let i = 0; i < 10; i++) {
   // console.log('Iteración número: ' + i);
   // total += i
//}

//console.log("la suma de los 100 numeros es:", total)

// Ejemplo de bucle while
//let contador = 0;
//while (contador < 500) {
    //console.log('Contador: ' + contador);
    //contador++;
//}

// Ejemplo de bucle do...while
//let contador = 0;
//do {
    //console.log('Contador: ' + contador);
    //contador++;
//} while (contador < 100);

// Ejemplo de bucle for...of
//let numeros = [10, 20, 30];
//for (let numero of numeros) {
    //console.log('Número: ' + numero);
//}

// Ejemplo de JavaScript Asincrónico con setTimeout
//console.log("Inicio");
//setTimeout(() => {
    //console.log("Tarea Asincrónica");
//}, 2000);
//console.log("Fin");

const tabla = document.getElementById("tabla")
// Ejemplo de async/await
async function fetchData() {
    let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await respuesta.json();
    for(let valor of data) {
    console.log(data)
        console.log(valor["title"])
        const tablerow = document.createElement("tr")
        const tabletitle = document.createElement("td")
        const tablebody = document.createElement("td")
        tabletitle.textContent = valor.title
        tablebody.textContent = valor.body
        tablerow.appendChild (tabletitle)
        tablerow.appendChild (tablebody)
        tabla.appendChild (tablerow)

    }
}

fetchData();

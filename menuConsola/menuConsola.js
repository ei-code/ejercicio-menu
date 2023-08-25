// Platos principales y acompañamientos
const platosPrincipales = [
  { nombre: "Plato Principal 1", precio: 10},
  { nombre: "Plato Principal 2", precio: 10},
  { nombre: "Plato Principal 3", precio: 10}
];
const acompañamientos = [
  { nombre: "Acompañamiento 1", precio: 3},
  { nombre: "Acompañamiento 2", precio: 3},
  { nombre: "Acompañamiento 3", precio: 3},
  { nombre: "Acompañamiento 4", precio: 3}
];
// Función para mostrar el menú
function mostrarMenu() {
    console.log("Menú Bottega Diner");
    console.log("Un plato principal y dos acompañamientos de su elección.");

    console.log("Platos Principales:");
    platosPrincipales.forEach((plato, index) => {
        console.log(`${index + 1}. ${plato.nombre} - Precio: ${plato.precio} euros`);
    });
    console.log("Acompañamientos:");
    acompañamientos.forEach((acomp, index) => {
        console.log(`${index + 1}. ${acomp.nombre} - Precio: ${acomp.precio} euros`);
    });
};
mostrarMenu();

// Comentarios
const comentarios = [
    "¡Excelente elección!",
    "¡¡¡Delicioso plato, te encantará!!!",
    "Una opción genial ;)",
    "¡Muy recomendado, no te arrepentirás!"
];

// Función para seleccionar un comentario aleatorio
function obtenerComentarioAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * comentarios.length);
    // Devolver el comentario aleatorio
        return comentarios[indiceAleatorio];
}

//Solicitar elección del plato principal
let seleccionPlato;
let precioTotal = 0;
seleccionPlato = prompt("Seleccione un plato:\n1. Plato Principal 1\n2. Plato Principal 2\n3. Plato Principal 3");
switch (seleccionPlato) {
  case "1":
    precioTotal += platosPrincipales[0].precio;
    break;
  case "2":
    precioTotal += platosPrincipales[1].precio;
    break;
  case "3":
    precioTotal += platosPrincipales[2].precio;
    break;
  default:
    console.log("Selección inválida");
}
console.log("Precio total: " + precioTotal);
  
// Obtener un comentario aleatorio y precio
alert(obtenerComentarioAleatorio() + " Su precio es: " + precioTotal + " euros");

// Solicitar al usuario que elija un acompañamiento
let seleccionAcompañamiento;
seleccionAcompañamiento = prompt("Seleccione su primer Acompañamiento:\n1. Acompañamiento 1\n2. Acompañamiento 2\n3. Acompañamiento 3\n4. Acompañamiento 4");
switch (seleccionAcompañamiento) {
  case "1":
    precioTotal += acompañamientos[0].precio;
    break;
  case "2":
    precioTotal += acompañamientos[1].precio;
    break;
  case "3":
    precioTotal += acompañamientos[2].precio;
    break;
  case "4":
    precioTotal += acompañamientos[3].precio;
    break;
  default:
    console.log("Selección inválida");
}
//Comentario aleatorio y precio del primer acompañamiento
alert(obtenerComentarioAleatorio() + " " + "Su precio es: 3 euros");
console.log("Precio total: " + precioTotal);
//Solicitar segundo acompañamiento
seleccionAcompañamiento = prompt("Seleccione su segundo Acompañamiento:\n1. Acompañamiento 1\n2. Acompañamiento 2\n3. Acompañamiento 3\n4. Acompañamiento 4");
//comentario aleatorio y precio del segundo acompañamiento
alert(obtenerComentarioAleatorio() + " Su precio es: 3 euros");
console.log("Precio total: " + (precioTotal + 3));

//Dar precio último
alert(`El precio total de su selección es: ${platosPrincipales[0].precio + 2 * acompañamientos[0].precio} euros`);
console.log(`El precio total de su selección es: ${platosPrincipales[0].precio + 2 * acompañamientos[0].precio} euros`);





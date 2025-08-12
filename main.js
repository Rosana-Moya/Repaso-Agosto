"use strict";

console.log("Ready");

// MAYOR O MENOR DE EDAD:

const inputAge = document.querySelector(".input-age");
// Busca en el HTML el <input> con la clase input-age y lo guarda en la variable input.
// Así podemos usar esa variable para leer lo que el usuario escribió
const button = document.querySelector(".button-age");
//Busca el botón con la clase button-age y lo guarda en la variable button.
const mensaje = document.querySelector(".age-mens"); // seleccionamos el <p>

button.addEventListener("click", function () {
    //Le decimos al botón: "Cuando alguien haga clic sobre ti, ejecuta esta función".
  const edad = parseInt(inputAge.value);
//   Lee lo que el usuario escribió en el input (input.value) y lo convierte a número entero con parseInt().
// Guarda ese número en la variable edad.

  if (isNaN(edad)) {
    // Comprueba si lo ingresado no es un número válido (por ejemplo, si está vacío o tiene letras).
    // isNaN significa "Is Not A Number" = "¿No es un número?"
    mensaje.textContent = "Ingresa un número válido";
    //Si no es un número válido, muestra ese mensaje en el párrafo.
    mensaje.style.color = "orange";
    //Cambia el color del mensaje a naranja.
    return; //Detiene la función para que no siga ejecutando las siguientes condiciones.
  }

  if (edad >= 18 && edad <= 120) {  //Si la edad es 18 o más, entonces:
    mensaje.textContent = "Eres mayor de edad";   //Muestra el mensaje correspondiente.
    mensaje.style.color = "green"; //Y lo muestra en verde.
  } else if (edad >= 0 && edad < 18) {     //Si la edad no es mayor o igual a 18 (es decir, es menor), entonces:
    mensaje.textContent = "Eres menor de edad";   //Muestra el mensaje de "menor de edad".
    mensaje.style.color = "red";  //En color rojo.
  } else {
    mensaje.textContent = "Edad no válida";   //Muestra el mensaje de "menor de edad".
    mensaje.style.color = "red";  //En color rojo.
  }
});   //Cierra la función que se ejecuta al hacer clic en el botón.

//Cada vez que el usuario hace clic o enfoca el input para escribir otra vez, se borra el mensaje del párrafo:
inputAge.addEventListener("focus", function () {
  mensaje.textContent = "";
});

//SWITCH:

const inputWeek = document.querySelector(".input-week");
const buttonWeek = document.querySelector(".button-week");
const mensajeWeek = document.querySelector(".week-mens");

// Añadimos un "escuchador de eventos" al botón
inputWeek.addEventListener("input", function () {
  mensajeWeek.textContent = "";
});

// Cuando se haga clic, se ejecuta la función
buttonWeek.addEventListener("click", function () {

  //Obtenemos el valor del <select> y lo pasamos a minúsculas por seguridad
  const dia = inputWeek.value.toLowerCase();
  // Evaluamos el valor usando la estructura switch
  switch (dia) {

//case es una parte del bloque switch que define una condición específica.
//Cuando usas switch, estás comparando un valor contra varios case.

    case "lunes":
      mensajeWeek.textContent = "No es el día, es el capitalismo.";
      mensajeWeek.style.color = "red"
      break; // Salimos del switch después de este caso

    case "martes":
      mensajeWeek.textContent = "Lunes segunda parte.";
      mensajeWeek.style.color = "red"
      break;

    case "miércoles":
      mensajeWeek.textContent = "Buena tía.";
      mensajeWeek.style.color = "black"
      break;

    case "jueves":
      mensajeWeek.textContent = "Siempre en medio, como tú.";
      mensajeWeek.style.color = "black"
      break;

    case "viernes":
      mensajeWeek.textContent = "Por fín.";
      mensajeWeek.style.color = "green"
      break;

    case "sábado":
      mensajeWeek.textContent = "Siento si hoy curras.";
      mensajeWeek.style.color = "green"
      break;

    case "domingo":
      mensajeWeek.textContent = "Hoy no compres.";
      mensajeWeek.style.color = "red"
      break;

    default:
      // Si no se seleccionó ningún valor (por ejemplo, si está vacío)
      mensajeWeek.textContent = "Por favor, elige un día de la lista.";
  }
});

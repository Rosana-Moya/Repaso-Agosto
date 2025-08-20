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

// FUNCIONES
//3 FOTOS DINOS
 const photos = { 
   'indominus': [
    'https://pm1.aminoapps.com/7949/2a81c23a22e3cdc0e91bc317483f5f01cab2a58dr1-734-391v2_hq.jpg',
   'https://www.shutterstock.com/shutterstock/photos/2289953095/display_1500/stock-photo-indominus-rex-isolated-yellow-background-2289953095.jpg',
   'https://scontent.fvlc1-2.fna.fbcdn.net/v/t39.30808-6/482246130_1382986739721483_620699147502441382_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=OkxoYYJdfHsQ7kNvwFTLdqb&_nc_oc=AdnXI6OHUs70eRPT_rnz0YTZoRcvTuyPtoZueBAyNaAHKA7avAylAh5M3zV2jWWyNmg&_nc_zt=23&_nc_ht=scontent.fvlc1-2.fna&_nc_gid=ARgvJMBw4UiCrb4hKndu7A&oh=00_AfU0Q1DWqcHi69hD4RF3VVMm9J3NsVJeLtnNvTF9EGRGVg&oe=68AA3152'
 ],

 'indoraptor': [
   'https://pm1.aminoapps.com/6926/377f8c20125be2184f6d5f7360b0582e1926c76ar1-459-203v2_hq.jpg',
   'https://i.pinimg.com/1200x/28/8c/40/288c407e6017dacbd3ad0d5874ac6e49.jpg',
   'https://preview.redd.it/the-indoraptor-is-the-saddest-hybrid-v0-i8889vdnoqyd1.jpg?width=640&crop=smart&auto=webp&s=3e3869ead31ff6e88cfc4528e2281dcd60215e84'
 ],

 'blue' : [
   'https://i.pinimg.com/1200x/91/59/a5/9159a5171d069c56ea2b022460508876.jpg',
   'https://images3.alphacoders.com/122/thumb-1920-1225600.jpg',
   'https://darksidetoy.com/images/virtuemart/product/x_p1slmcjw2-08_d%20(2).jpg'
 ]
 };

// // SECCIÓN DE QUERY-SELECTORS (elementos que usamos de la página)

//  const dinoSelect = document.querySelector('.js_dino');
//  const imgElements = document.querySelectorAll('.js_photo');

// // // SECCIÓN DE FUNCIONES

//  const photosOfDinoSelected = photos[dinoSelected];
// // //Calcula el número mínimo entre:
// // //Las fotos disponibles para ese dinosaurio.
// // //La cantidad de elementos de imagen (<img>) en la página.
// // //Así se asegura de no acceder a posiciones que no existen ni en el arreglo de fotos ni en el DOM:
//  const numPhotos = Math.min(photosOfDinoSelected.length, imgElements.length);

// // //Bucle que recorre cada imagen hasta numPhotos:
//  for (let i=0; i<numPhotos; i++) {
//    imgElements[i].setAttribute('src',photosOfDinoSelected[i]);
// // //Cambia el atributo alt (texto alternativo) para mejorar la accesibilidad y el SEO.
// // //Se usa una cadena de texto dinámica con template strings:
//   imgElements[i].setAttribute('alt', `Foto número ${i} de ${dino}`);
//  };

// // // SECCIÓN DE FUNCIONES DE EVENTOS
// // //Define una función flecha que se ejecutará cuando el usuario cambie la selección del <select> de dinosaurios:
//    const handleInputSelectDino = (ev) => {
// //   //Obtiene el valor del <select> actual, es decir, el dinosaurio elegido por el usuario:
//    const dinoSelected = dinoSelect.value;
// // //Llama a una función (que no está en el código que mostraste) para mostrar las nuevas fotos del dinosaurio seleccionado:
//    renderDinoPhotos(dinoSelected);
//  }

// // // SECCIÓN DE EVENTOS
// // //Añade un listener al <select> (dinoSelect) para escuchar cuando el usuario cambia la opción seleccionada.
// // //Cuando eso pasa, se llama a la función handleInputSelectDino:
//    dinoSelect.addEventListener('input', handleInputSelectDino);
// //falta botón?

//CHAT GPT:
// Query-selectors
const dinoSelect = document.querySelector('.js_dino');
const photoContainer = document.querySelector('.js_photoContainer');

// Función actualizada para renderizar imágenes dinámicamente
const renderDinoPhotos = (dinoSelected) => {
  // Limpia el contenedor antes de agregar nuevas imágenes
  photoContainer.innerHTML = '';

  if (dinoSelected === 'default') {
    const img = document.createElement('img');
    img.setAttribute('src', 'https://thumbs.dreamstime.com/b/ninguna-conexi%C3%B3n-internet-error-off-line-p%C3%A1gina-web-que-no-carga-dinosaurio-negro-119559692.jpg');
    img.setAttribute('alt', 'Esperando selección');
    photoContainer.appendChild(img);
    return;
  }

  const photosOfDinoSelected = photos[dinoSelected];
  if (!photosOfDinoSelected) return;

  // Crea un <img> por cada URL del dinosaurio
  photosOfDinoSelected.forEach((url, index) => {
    const img = document.createElement('img');
    img.setAttribute('src', url);
    img.setAttribute('alt', `Foto número ${index + 1} del dinosaurio ${dinoSelected}`);
    img.style.margin = '5px'; // Opcional, para visual
    photoContainer.appendChild(img);
  });
};

// Evento al cambiar el select
dinoSelect.addEventListener('input', (ev) => {
  renderDinoPhotos(ev.target.value);
});

// Mostrar imagen por defecto al cargar la página
renderDinoPhotos('default');


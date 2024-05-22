// Función para limpiar todos los campos de entrada del formulario
function limpiarCampos() {
  document.getElementById("nombre").value = "";  // Establecer el valor del campo de texto "nombre" en cadenavacía
  document.getElementById("categoria").selectedIndex = 0; // Establecer el índice seleccionado del elemento select "categoria" en 0
  document.getElementById("imagen").selectedIndex = 0; // Establecer el índice seleccionado del elemento select "imagen" en 0
  document.getElementById("imagenSeleccionada").innerHTML = ""; // Establecer el contenido del div "imagenSeleccionada" en cadena vacía
  document.getElementById("codigo").value = ""; // Establecer el valor del campo de texto "codigo" en cadena vacía
  document.getElementById("precio").value = ""; // Establecer el valor del campo de texto "precio" en cadena vacía
  document.getElementById("motor").selectedIndex = 0; // Establecer el índice seleccionado del elemento select "motor" en 0
  document.getElementById("empuje").selectedIndex = 0; // Establecer el índice seleccionado del elemento select "empuje" en 0
  document.getElementById("cuantosTS").value = ""; // Establecer el valor del campo de texto "cuantosTS" en cadena vacía
  alert("Campos limpios."); // Mostrar una alerta informativa
}

// Almacenar referencias a los elementos HTML "select" con id "imagen" y "div" con id "imagenSeleccionada"
const selectImagen = document.getElementById("imagen"); // Guarda la referencia del elemento "select" con id "imagen"
const imagenSeleccionadaDiv = document.getElementById("imagenSeleccionada"); // Guarda la referencia del elemento "div" con id "imagenSeleccionada"

// para mostrar la imagen seleccionada en div imagenSeleccionada
selectImagen.addEventListener("change", function () { // Agregar un evento "change" al elemento "select" con id "imagen"
  const imagenSeleccionada = this.value; // Obtener el valor del elemento "select" seleccionado

  imagenSeleccionadaDiv.innerHTML = `<img src="${imagenSeleccionada}" alt="Imagen seleccionada">`; // Actualizar el contenido HTML del elemento "div" con id "imagenSeleccionada"
});

function redireccionamientoAI() {
  window.location.assign("indicaciones.html"); // Redirige al usuario a la página "indicaciones.html"
}
function volverPprincipal() {
  window.location.assign("index.html"); // Redirige al usuario a la página "index.html"
}
function navegarproductos() {
  window.location.assign("productos.html"); // Redirige al usuario a la página "productos.html"
}
function iraproductos() {
  console.log("me fui");
  const contenedor = document.getElementById("enlacepro");
  contenedor.innerHTML = '<a href="./productos.html">rty</a>';
  console.log("sali?");
}
function irabuscar() {
  window.location.assign("filtro.html"); // Redirige al usuario a la página "filtro.html"
}

//FUNCIONES PARA LA VALIDACION DEL FORMULARIO

//para validar el nombre del producto
function validarNombre(nombre) {
  // Verificar si el nombre solo contiene letras, números y espacios, y tiene entre 1 y 20 caracteres
  if (!/^[a-zA-Z0-9\s]{1,20}$/.test(nombre)) {

    return false; // Si el nombre no cumple con la expresión regular, retorna falso
  }
  return true; // Si el nombre cumple con la expresión regular, retorna verdadero
}

// para validar la categoria del producto
function validarCategoria(categoria) {
  return categoria !== "";// Verificar si se ha seleccionado una opción válida (no está vacío)
}

//para validar que el producto tenga imagen
function validarImagenSeleccionada(imagen) {
  return imagen !== "";// Verificar si se ha seleccionado una imagen válida (no está vacío)
}

// para validar el codigo del producto
function validarCodigo(codigo) {
  if (codigo.length < 8) { // Verificar longitud mínima del código (al menos 8 caracteres)
    return false; // Si el código tiene menos de 8 caracteres, retorna falso
  }
  // Inicializar variables para verificar que el código contenga al menos una minúscula y una mayúscula
  let tieneMinuscula = false;
  let tieneMayuscula = false;
  for (let i = 0; i < codigo.length; i++) { // Iterar a través de cada carácter en el código

    // Verificar si el carácter actual es una letra minúscula
    if (codigo[i] >= "a" && codigo[i] <= "z") {
      tieneMinuscula = true;
    }
    // Verificar si el carácter actual es una letra mayúscula
    if (codigo[i] >= "A" && codigo[i] <= "Z") {
      tieneMayuscula = true;
    }
  }
  // Si no tiene al menos una minúscula o una mayúscula, retorna falso
  if (!tieneMinuscula || !tieneMayuscula) {
    return false;
  }

  // Inicializar contador para verificar que el código contenga al menos 2 números
  let contadorNumeros = 0;

  // Iterar a través de cada carácter en el código
  for (let j = 0; j < codigo.length; j++) {
    // Verificar si el carácter actual es un número
    if (!isNaN(parseInt(codigo[j]))) {
      contadorNumeros++;
    }
  }
  // Si el número de dígitos es menor que 2, retorna falso
  if (contadorNumeros < 2) {
    return false;
  }

  // Si pasa todas las validaciones, retorna verdadero
  return true;
}

// para validar si el input precio tiene algun caracter
function validarPrecio(precio) {
  return precio.trim() !== ""; // Verificar si el campo de precio no está vacío o no solo contiene espacios en blanco
}

// para validar que tenga algun elemento seleccionado
function validarTipoMotor(tipoMotor) {
  return tipoMotor !== ""; // Verificar si se ha seleccionado un tipo de motor (no está vacío)
}

// para validar que tenga algun elemento seleccionado
function validarEntradaAire(entradaAire) {
  return entradaAire !== ""; // Verificar si se ha seleccionado una entrada de aire (no está vacío)
}

// para validar que el imput de cantidadTurbos tenga un contadorNumeros
function validarCantidadTurbos(cantidadTurbos) {
  return cantidadTurbos.trim() !== ""; // Verificar si se ha ingresado un número válido (no está vacío y no solo contiene espacios en blanco)
}

// esta funcion valida todas las entradas del los inputs
function validarInputs() {
  const nombreInput = document.getElementById("nombre").value; // Obtener el valor del input con id "nombre"
  const categoriaInput = document.getElementById("categoria").value; // Obtener el valor del input con id "categoria"
  const imagenInput = document.getElementById("imagen").value; // Obtener el valor del input con id "imagen"
  const codigoInput = document.getElementById("codigo").value; // Obtener el valor del input con id "codigo"
  const precioInput = document.getElementById("precio").value; // Obtener el valor del input con id "precio"
  const tipoMotorInput = document.getElementById("motor").value; // Obtener el valor del input con id "motor"
  const entradaAireInput = document.getElementById("empuje").value; // Obtener el valor del input con id "empuje"
  const cantidadTurbosInput = document.getElementById("cuantosTS").value; // Obtener el valor del input con id "cuantosTS"

  // Validar el nombre
  if (!validarNombre(nombreInput)) {
    alert("Por favor, ingresa un nombre válido."); // Mostrar alerta si el nombre no es válido
    redireccionamientoAI(); // Llamar a la función de redireccionamiento
    return; // Salir de la función
  }

  // Validar la categoría
  if (!validarCategoria(categoriaInput)) {
    alert("Por favor, selecciona una categoría."); // Mostrar alerta si la categoría no es válida
    redireccionamientoAI(); // Llamar a la función de redireccionamiento
    return; // Salir de la función
  }

  if (!validarImagenSeleccionada(imagenInput)) {
    alert("Por favor, selecciona una imagen."); // Mostrar alerta si la imagen no es válida
    redireccionamientoAI(); // Llamar a la función de redireccionamiento
    return; // Salir de la función
  }

  if (!validarCodigo(codigoInput)) {
    alert("Por favor, ingresa un codigo valido."); // Mostrar alerta si el código no es válido
    redireccionamientoAI(); // Llamar a la función de redireccionamiento
    return; // Salir de la función
  }

  if (!validarPrecio(precioInput)) {
    alert("Por favor, ingresa un precio válido."); // Mostrar alerta si el precio no es válido
    redireccionamientoAI(); // Llamar a la función de redireccionamiento
    return; // Salir de la función
  }

  if (!validarTipoMotor(tipoMotorInput)) {
    alert("Por favor, selecciona un tipo de motor."); // Mostrar alerta si el tipo de motor no es válido
    redireccionamientoAI(); // Llamar a la función de redireccionamiento
    return; // Salir de la función
  }

  if (!validarEntradaAire(entradaAireInput)) {
    alert("Por favor, selecciona una entrada de aire."); // Mostrar alerta si la entrada de aire no es válida
    redireccionamientoAI(); // Llamar a la función de redireccionamiento
    return; // Salir de la función
  }

  if (!validarCantidadTurbos(cantidadTurbosInput)) {
    alert(
      "Por favor, ingresa una cantidad válida de turbos o supercargadores.",
    ); // Mostrar alerta si la cantidad de turbos no es válida
    redireccionamientoAI(); // Llamar a la función de redireccionamiento
    return; // Salir de la función
  }

  // Si todas las validaciones pasan, mostrar mensaje de éxito
  alert("El registro se ha completado exitosamente.");
  // Redireccionar a la página de productos
  iraproductos();
}

function validarConBoton() {
  validarInputs();
}

// Seteo para pesos
const campoPrecio = document.getElementById("precio"); // Obtener el elemento con id "precio"

// Agregar un evento de entrada al campo de precio
campoPrecio.addEventListener("input", function () {
  let valor = this.value.trim(); // Obtener el valor y eliminar espacios en blanco al principio y al final

  // Eliminar todos los caracteres que no sean dígitos
  valor = valor.replace(/\D/g, "");

  // Agregar un punto cada tres dígitos
  valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  this.value = formatearPrecio(valor); // Formatear el valor y actualizar el campo de entrada
});

function formatearPrecio(valor) {
  // Si el valor está vacío, devolver un string vacío
  if (!valor) {
    return "";
  }

  // Formatear el valor con el signo de pesos y los puntos de mil separadores
  return "$" + valor;
}

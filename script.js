function limpiarCampos() {
  document.getElementById("nombre").value = "";
  document.getElementById("categoria").selectedIndex = 0;
  document.getElementById("imagen").selectedIndex = 0;
  document.getElementById("imagenSeleccionada").innerHTML = "";
  document.getElementById("codigo").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("motor").selectedIndex = 0;
  document.getElementById("empuje").selectedIndex = 0;
  document.getElementById("cuantos turbos o supercargadores").value = "";
  alert("Campos limpios.");
}

// Array de imágenes que estan en el selector del label imagenes
const imagenes = [
  {
    url: "https://autosdeprimera.com/wp-content/uploads/2022/10/audi-r8-v10-gt-rwd-a.jpg",
    nombre: "Imagen 1",
  },
  {
    url: "https://autosdeprimera.com/wp-content/uploads/2023/02/ford-mustang-dark-horse-a.jpg",
    nombre: "Imagen 2",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg",
    nombre: "Imagen 3",
  },
  {
    url: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_7d13e0578a1847c69e562ccc58c24de8.jpg",
    nombre: "Imagen 4",
  },
  {
    url: "https://www.elcarrocolombiano.com/wp-content/uploads/2021/04/Diseno-sin-titulo-4-4.jpg",
    nombre: "Imagen 5",
  },
  {
    url: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_bb5451ef5d2b435983d22c6b23f333ed.webp",
    nombre: "Imagen 6",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod/images/the-fast-and-the-furious-toyota-supra-subasta-1624180933.jpg?crop=1.00xw:0.892xh;0,0.0372xh&resize=2048:*",
    nombre: "Imagen 7",
  },
  {
    url: "https://www.elcarrocolombiano.com/wp-content/uploads/2020/10/20201023-BMW-M4-COMPETITION-KITH-AA-01-750x518.jpg",
    nombre: "Imagen 8",
  },
  {
    url: "https://www.wardsauto.com/sites/wardsauto.com/files/uploads/2012/09/01mclarenp1paris2012.jpg",
    nombre: "Imagen 9",
  },
  {
    url: "https://arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/MJ6K3V5RVVC6HDDGE3LCEJWCEM.jpg",
    nombre: "Imagen 10",
  },
];

// Obtener el elemento select de imágenes
const selectImagen = document.getElementById("imagen");
const imagenSeleccionadaDiv = document.getElementById("imagenSeleccionada");

// recorre sobre el array de imágenes y agregar opciones al select
imagenes.forEach((imagen, index) => {
  const option = document.createElement("option");
  option.value = imagen.url;
  option.text = imagen.nombre;
  selectImagen.appendChild(option);
});

// para mostrar la imagen seleccionada en div imagenSeleccionada
selectImagen.addEventListener("change", function () {
  const imagenSeleccionada = this.value;

  imagenSeleccionadaDiv.innerHTML = `<img src="${imagenSeleccionada}" alt="Imagen seleccionada">`;
});

// para redireccionar a la vista de indicaciones en caso de que los campos esten mal
function redireccionamientoAI() {
  const root = window.location.pathname;
  const ruta = root.split("/");
  ruta.pop();
  const url = ruta.join("/") + "/indicaciones.html";
  window.location.replace(url);
}

//FUNCIONES PARA LA VALIDACION DEL FORMULARIO

//para validar el nombre del producto
function validarNombre(nombre) {
  // Verificar si solo contiene letras
  if (!/^[a-zA-Z\s]+$/.test(nombre)) {
    return false;
  }
  return true;
}

// para validar la categoria del producto
function validarCategoria(categoria) {
  // Verificar si se ha seleccionado una opción válida
  return categoria !== "";
}

//para validar que el producto tenga imagen
function validarImagenSeleccionada(imagen) {
  // Verificar si se ha seleccionado una imagen válida
  return imagen !== "";
}

// para validar el codigo del producto
function validarCodigo(codigo) {
  // Verificar longitud mínima
  if (codigo.length < 8) {
    return false;
  }
  // Verificar al menos una minúscula y una mayúscula
  let tieneMinuscula = false;
  let tieneMayuscula = false;
  for (let i = 0; i < codigo.length; i++) {
    if (codigo[i] >= "a" && codigo[i] <= "z") {
      tieneMinuscula = true;
    }
    if (codigo[i] >= "A" && codigo[i] <= "Z") {
      tieneMayuscula = true;
    }
  }
  if (!tieneMinuscula || !tieneMayuscula) {
    return false;
  }
  // Verificar al menos 2 números
  let contadorNumeros = 0;
  for (let j = 0; j < codigo.length; j++) {
    if (!isNaN(parseInt(codigo[j]))) {
      contadorNumeros++;
    }
  }
  if (contadorNumeros < 2) {
    return false;
  }

  // Si pasa todas las validaciones, devuelve verdadero
  return true;
}

// para validar si el input precio tiene algun caracter
function validarPrecio(precio) {
  // Verificar si el campo de precio está vacío o solo contiene espacios en blanco
  return precio.trim() !== "";
}

// para validar que tenga algun elemento seleccionado
function validarTipoMotor(tipoMotor) {
  // Verificar si se ha seleccionado un tipo de motor
  return tipoMotor !== "";
}

// para validar que tenga algun elemento seleccionado
function validarEntradaAire(entradaAire) {
  // Verificar si se ha seleccionado una entrada de aire
  return entradaAire !== "";
}

// para validar que el imput de cantidadTurbos tenga un contadorNumeros
function validarCantidadTurbos(cantidadTurbos) {
  // Verificar si se ha ingresado un número válido
  return cantidadTurbos.trim() !== "";
}

// esta funcion valida todas las entradas del los inputs
function validarInputs() {
  const nombreInput = document.getElementById("nombre").value;
  const categoriaInput = document.getElementById("categoria").value;
  const imagenInput = document.getElementById("imagen").value;
  const codigoInput = document.getElementById("codigo").value;
  const precioInput = document.getElementById("precio").value;
  const tipoMotorInput = document.getElementById("motor").value;
  const entradaAireInput = document.getElementById("empuje").value;
  const cantidadTurbosInput = document.getElementById(
    "cuantos turbos o supercargadores",
  ).value;

  if (!validarNombre(nombreInput)) {
    alert("Por favor, ingresa un nombre válido.");
    redireccionamientoAI();
    return;
  }

  if (!validarCategoria(categoriaInput)) {
    alert("Por favor, selecciona una categoría.");
    redireccionamientoAI();
    return;
  }

  if (!validarImagenSeleccionada(imagenInput)) {
    alert("Por favor, selecciona una imagen.");
    redireccionamientoAI();
    return;
  }

  if (!validarCodigo(codigoInput)) {
    // Si el código es
    alert("Por favor, ingresa un codigo valido.");
    redireccionamientoAI();
    return;
  }

  if (!validarPrecio(precioInput)) {
    alert("Por favor, ingresa un precio válido.");
    redireccionamientoAI();
    return;
  }

  if (!validarTipoMotor(tipoMotorInput)) {
    alert("Por favor, selecciona un tipo de motor.");
    redireccionamientoAI();
    return;
  }

  if (!validarEntradaAire(entradaAireInput)) {
    alert("Por favor, selecciona una entrada de aire.");
    redireccionamientoAI();
    return;
  }

  if (!validarCantidadTurbos(cantidadTurbosInput)) {
    alert(
      "Por favor, ingresa una cantidad válida de turbos o supercargadores.",
    );
    redireccionamientoAI();
    return;
  }
  // Si el registro es válido
  alert("El registro se ha completado exitosamente.");
  iraproductos();
}

function validarConBoton() {
  validarInputs();
}

function volverPprincipal() {
  window.location.assign("index.html");
}
function iraproductos() {
  window.location.assign("productos.html");
}

// Seteo para pesos
const campoPrecio = document.getElementById("precio");

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
/////////////////////////

function limpiarCampos() {
  document.getElementById("registroForm").reset();
  document.getElementById("imagenSeleccionada").innerHTML = "";
}

// Array de imágenes
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

// para mostrar la imagen seleccionada
selectImagen.addEventListener("change", function () {
  const imagenSeleccionada = this.value;

  imagenSeleccionadaDiv.innerHTML = `<img src="${imagenSeleccionada}" alt="Imagen seleccionada">`;
});

function irAindicaciones() {
  redirecView();
}

function redirecView() {
  const root = window.location.pathname;
  const ruta = root.split("/");
  ruta.pop();
  const url = ruta.join("/") + "/indicaciones.html";
  window.location.replace(url);
}

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

function validarInput() {
  const codigoInput = document.getElementById("codigo").value;

  if (validarCodigo(codigoInput)) {
    // Si el código es
    alert("Todos los campos estan correctos.");
  } else {
    // Si el código no es válido
    alert("Algun campo esta incorrecto o falta por llenar.");
    redirecView();
  }
}

function validarConBoton() {
  validarInput();
}

function volverPprincipal() {
  window.location.assign("index.html");
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

  // Formatear el valor con el signo de dólar y los puntos de mil separadores
  return "$" + valor;
}

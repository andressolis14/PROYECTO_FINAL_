let productos2 = []; // Array que almacena los productos

const body = document.getElementById("body");

window.addEventListener("load", function () {
  console.log("cargo pagina");
  productos2 = obtenerDatos("misDatos");
  console.log(productos2);
  
});

function obtenerDatos(key) {
  if (localStorage.getItem(key) == "undefined") {
    return "No hay datos almacenados.";
  }
  const dataString = localStorage.getItem(key);
  return JSON.parse(dataString);
}



let productosFiltrados = []; // Array que almacena los productos filtrados
let paginaActualF = 1; // Número de página actual
const productosPorPaginaF = 10;  // Número de productos por página

function aplicarFiltros() { // Función que aplica los filtros a los productos
  const filtro1 = document.getElementById('filtro1').value; // Obtiene el valor del filtro 1
  const filtro2 = document.getElementById('filtro2').value; // Obtiene el valor del filtro 2
  const filtro3 = document.getElementById('filtro3').value;  // Obtiene el valor del filtro 3

  productosFiltrados = productos2.filter(producto => { // Filtra los productos según los filtros aplicados
    return (filtro1 === '' || producto.tipo_motor === filtro1) &&
      (filtro2 === '' || producto.categoria === filtro2) &&
      (filtro3 === '' || producto.entrada_aire === filtro3);
  });

  paginaActualF = 1;  // Reiniciar a la primera página
  mostrarPagina(paginaActualF); // Muestra la página actual
}

function esperar(tiempo) { // La función toma un parámetro 'tiempo' que representa la cantidad de tiempo a esperar en milisegundos
  return new Promise((resolve, reject) => { // Retorna una nueva promesa que toma dos argumentos: 'resolve' para la resolución exitosa y 'reject' para el manejo de errores
    if (tiempo <= 0) {  // Verifica si el tiempo especificado es menor o igual a cero, lo que indica un tiempo de espera inválido
      reject("Tiempo de espera inválido"); // Rechaza la promesa con un mensaje indicando que el tiempo de espera es inválido
    } else { // Si el tiempo es válido
      setTimeout(resolve, tiempo); // Utiliza la función setTimeout para resolver la promesa después del tiempo especificado
    }
  });
}

function mostrarPagina(pagina) {  // Función que muestra la página actual
  const tablaResultados = document.getElementById('tablaResultados').getElementsByTagName('tbody')[0]; // Obtiene la tabla de resultados
  tablaResultados.innerHTML = ''; // Borra los resultados anteriores

  document.getElementById('cargando').style.display = 'block';  // Muestra el mensaje de "Cargando (gif)"

  esperar(2000).then(() => { // Espera 2 segundos antes de mostrar los resultados
    document.getElementById('cargando').style.display = 'none'; // Oculta el mensaje de "Cargando (gif)"

    const inicio = (pagina - 1) * productosPorPaginaF;  // Calcula el índice de inicio de la página actual
    const fin = inicio + productosPorPaginaF;  // Calcula el índice de fin de la página actual
    const productosPagina = productosFiltrados.slice(inicio, fin); // Obtiene los productos de la página actual

    productosPagina.forEach(producto => { // Recorre los productos de la página actual
      const fila = tablaResultados.insertRow(); // Crea una fila en la tabla de resultados

      const celdaNombre = fila.insertCell(0);  // Crea una celda para el nombre del producto
      const celdaImagen = fila.insertCell(1); // Crea una celda para la imagen del producto
      const celdaCategoria = fila.insertCell(2);  // Crea una celda para la categoría del producto
      const celdaPrecio = fila.insertCell(3); // Crea una celda para el precio del producto
      const celdaTipoMotor = fila.insertCell(4); // Crea una celda para el tipo de motor del producto
      const celdaEntradaAire = fila.insertCell(5); // Crea una celda para la entrada de aire del producto

      celdaNombre.innerText = producto.nombre; // Asigna el nombre del producto a la celda
      const img = document.createElement('img'); // Crea una imagen para la celda de imagen
      img.src = producto.imagen; // Asigna la imagen del producto a la imagen
      img.alt = producto.nombre;  // Asigna el nombre del producto como texto alternativo
      img.style.width = '100px'; // Establece el ancho de la imagen
      celdaImagen.appendChild(img); // Agrega la imagen a la celda de imagen
      celdaCategoria.innerText = producto.categoria; // Asigna la categoría del producto a la celda
      celdaPrecio.innerText = producto.precio; // Asigna el precio del producto a la celda
      celdaTipoMotor.innerText = producto.tipo_motor; // Asigna el tipo de motor del producto a la celda
      celdaEntradaAire.innerText = producto.entrada_aire; // Asigna la entrada de aire del producto a la celda
    });

    actualizarPaginacion(); // Actualiza la paginación
  }).catch(error => {
    console.error('Error al esperar:', error);
  });
}

function actualizarPaginacion() {  // Función que actualiza la paginación
  document.getElementById('paginaActualF').innerText = paginaActualF; // Actualiza el número de página actual
  document.getElementById('btnPaginaAnteriorF').disabled = paginaActualF === 1; // Habilita o deshabilita el botón de página anterior
  document.getElementById('btnPaginaSiguienteF').disabled = paginaActualF * productosPorPaginaF >= productosFiltrados.length; // Habilita o deshabilita el botón de página siguiente
}

function irPaginaAnteriorF() {  // Función que va a la página anterior
  if (paginaActualF > 1) {
    paginaActualF--;  // Decrementa el número de página actual
    mostrarPagina(paginaActualF); // Muestra la página actual
  }
}

function irPaginaSiguienteF() { // Función que va a la página siguiente
  if (paginaActualF * productosPorPaginaF < productosFiltrados.length) {
    paginaActualF++;  // Incrementa el número de página actual
    mostrarPagina(paginaActualF); // Muestra la página actual
  }
}


function limpiarFiltros() {
  document.getElementById('filtro1').value = ''; // Restablece el valor del filtro 1
  document.getElementById('filtro2').value = ''; // Restablece el valor del filtro 2
  document.getElementById('filtro3').value = ''; // Restablece el valor del filtro 3
  document.getElementById('tablaResultados').getElementsByTagName('tbody')[0].innerHTML = ''; // Borra los resultados de la tabla
  productosFiltrados = []; // Borra los productos filtrados
  paginaActualF = 1;  // Reinicia la página actual
  actualizarPaginacion();  // Actualiza la paginación
}





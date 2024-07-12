let productos2=[]

const body = document.getElementById("body")
window.addEventListener("load", function(){
  console.log("cargo pagina")
  productos2 = obtenerDatos("misDatos")
  console.log(productos2)
  mostrarProductos();
})

function obtenerDatos(key) {
    if (localStorage.getItem(key) == "undefined") {
      return "No hay datos almacenados."
    }
    const dataString = localStorage.getItem(key);
    return JSON.parse(dataString)
  }

// Definimos el número de productos que queremos mostrar por página

const productosPorPagina = 15; // Define el número de productos que se mostrarán por página

// Inicializamos la página actual en 1

let paginaActual = 1; // Define la página actual

// Obtenemos referencias al contenedor de productos y los botones de navegación 

const productosContainer = document.getElementById("contproduc"); // Obtiene una referencia al elemento "contproduc" en el HTML
const btnPaginaAnterior = document.getElementById("btnPaginaAnterior"); // Obtiene una referencia al elemento "btnPaginaAnterior" en el HTML
const btnPaginaSiguiente = document.getElementById("btnPaginaSiguiente"); // Obtiene una referencia al elemento "btnPaginaSiguiente" en el HTML
const paginaActualElement = document.getElementById("paginaActual"); // Obtiene una referencia al elemento "paginaActual" en el HTML


// Función para mostrar los productos en la página actual
function mostrarProductos() {
  // Calcular el índice inicial y final de los productos a mostrar en esta página
  const indiceInicio = (paginaActual - 1) * productosPorPagina; // Calcula el índice inicial de los productos a mostrar en la página actual
  const indiceFin = paginaActual * productosPorPagina; // Calcula el índice final de los productos a mostrar en la página actual

  // Limpiar el contenedor antes de agregar los nuevos productos
  productosContainer.innerHTML = ""; // Borra el contenido del elemento "contproduc" en el HTML

  // Iterar sobre los productos y crear una tarjeta para cada uno
  for (let i = indiceInicio; i < indiceFin && i < productos2.length; i++) {
    const producto = productos2[i]; // Obtiene el producto en la posición "i" del array de productos
    const tarjetaProducto = document.createElement("div"); // Crea un nuevo elemento "div"
    tarjetaProducto.classList.add("tarjeta-producto"); // Agrega la class "tarjeta-producto" al elemento "div"
    // Agregar el contenido de la tarjeta con los atributos del producto
    tarjetaProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p><strong>Categoría:</strong> ${producto.categoria}</p>
            <p><strong>Código:</strong> ${producto.codigo}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <p><strong>Tipo de motor:</strong> ${producto.tipo_motor}</p>
            <p><strong>Entrada de aire:</strong> ${producto.entrada_aire}</p>
            <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
        `;
    // Agregar la tarjeta al contenedor de productos
    productosContainer.appendChild(tarjetaProducto); // Agrega el elemento "div" al elemento "contproduc" en el HTML
  }

  // Actualizar el número de página actual en el HTML
  paginaActualElement.textContent = paginaActual; // Establece el texto del elemento paginaActualElement al valor de la variable paginaActual

  // Habilitar o deshabilitar los botones de navegación según corresponda
  btnPaginaAnterior.disabled = paginaActual === 1; // Deshabilita el botón de página anterior si la página actual es 1
  btnPaginaSiguiente.disabled = indiceFin >= productos2.length; // Deshabilita el botón de página siguiente si el índice final es mayor o igual que la longitud del array de productos
}

// Función para ir a la página anterior
function irPaginaAnterior() {
  if (paginaActual > 1) { // Verifica si la página actual es mayor que 1
    paginaActual--; // Verifica si la página actual es mayor que 1
    mostrarProductos(); // Actualizar la visualización de productos
  }
}

// Función para ir a la página siguiente
function irPaginaSiguiente() {
  if (paginaActual < Math.ceil(productos2.length / productosPorPagina)) { // Verifica si la página actual es menor que el número total de páginas
    paginaActual++; // Incrementa el valor de la página actual
    mostrarProductos(); // Actualizar la visualización de productos
  }
}


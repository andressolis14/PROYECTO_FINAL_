
let productosFiltrados = []; // Array que almacena los productos filtrados
let paginaActualF = 1; // Número de página actual
const productosPorPaginaF = 10;  // Número de productos por página

function aplicarFiltros() {
  const filtro1 = document.getElementById('filtro1').value;
  const filtro2 = document.getElementById('filtro2').value;
  const filtro3 = document.getElementById('filtro3').value;

  productosFiltrados = productos.filter(producto => {
    return (filtro1 === '' || producto.tipo_motor === filtro1) &&
      (filtro2 === '' || producto.categoria === filtro2) &&
      (filtro3 === '' || producto.entrada_aire === filtro3);
  });

  paginaActualF = 1;  // Reiniciar a la primera página
  mostrarPagina(paginaActualF);
}

function mostrarPagina(pagina) {
  const tablaResultados = document.getElementById('tablaResultados').getElementsByTagName('tbody')[0];
  tablaResultados.innerHTML = '';

  document.getElementById('cargando').style.display = 'block';

  setTimeout(() => {
    document.getElementById('cargando').style.display = 'none';

    const inicio = (pagina - 1) * productosPorPaginaF;
    const fin = inicio + productosPorPaginaF;
    const productosPagina = productosFiltrados.slice(inicio, fin);

    productosPagina.forEach(producto => {
      const fila = tablaResultados.insertRow();

      const celdaNombre = fila.insertCell(0);
      const celdaImagen = fila.insertCell(1);
      const celdaCategoria = fila.insertCell(2);
      const celdaPrecio = fila.insertCell(3);
      const celdaTipoMotor = fila.insertCell(4);
      const celdaEntradaAire = fila.insertCell(5);

      celdaNombre.innerText = producto.nombre;
      const img = document.createElement('img');
      img.src = producto.imagen;
      img.alt = producto.nombre;
      img.style.width = '100px';
      celdaImagen.appendChild(img);
      celdaCategoria.innerText = producto.categoria;
      celdaPrecio.innerText = producto.precio;
      celdaTipoMotor.innerText = producto.tipo_motor;
      celdaEntradaAire.innerText = producto.entrada_aire;
    });

    actualizarPaginacion();
  }, 2000);
}

function actualizarPaginacion() {
  document.getElementById('paginaActualF').innerText = paginaActualF;
  document.getElementById('btnPaginaAnteriorF').disabled = paginaActualF === 1;
  document.getElementById('btnPaginaSiguienteF').disabled = paginaActualF * productosPorPaginaF >= productosFiltrados.length;
}

function irPaginaAnteriorF() {
  if (paginaActualF > 1) {
    paginaActualF--;
    mostrarPagina(paginaActualF);
  }
}

function irPaginaSiguienteF() {
  if (paginaActualF * productosPorPaginaF < productosFiltrados.length) {
    paginaActualF++;
    mostrarPagina(paginaActualF);
  }
}

function limpiarFiltros() {
  document.getElementById('filtro1').value = '';
  document.getElementById('filtro2').value = '';
  document.getElementById('filtro3').value = '';
  document.getElementById('tablaResultados').getElementsByTagName('tbody')[0].innerHTML = '';
  productosFiltrados = [];
  paginaActualF = 1;
  actualizarPaginacion();
}



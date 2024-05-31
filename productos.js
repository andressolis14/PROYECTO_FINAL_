const productos = [
  {
    id: 1,
    nombre: "Rolls Royce Ghost",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Rolls-Royce-Ghost-768x438.png",
    codigo: "aB3cD4e5",
    precio: "$315.000.000",
    tipo_motor: "v8",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 2,
    nombre: "Ferrari SF90 Stradale",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Ferrari-SF90-Stradale-768x384.png",
    codigo: "fG6hI7j8",
    precio: "$625.000.000",
    tipo_motor: "v12",
    entrada_aire: "turbo",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "McLaren P1",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/McLaren-P1-768x512.png",
    codigo: "kL9mN0oP",
    precio: "$500.000.000",
    tipo_motor: "v8",
    entrada_aire: "supercargador",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Zenvo ST1",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Zenvo-ST1-768x407.png",
    codigo: "qR1sT2u3",
    precio: "$200.000.000",
    tipo_motor: "v12",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 5,
    nombre: "Aston Martin Valhalla",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Aston-Martin-Valhalla-768x387.png",
    codigo: "vW4xY5zA",
    precio: "$400.000.000",
    tipo_motor: "v6",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 6,
    nombre: "Ferrari LaFerrari",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Ferrari-LaFerrari-Aperta-768x490.png",
    codigo: "bC6dE7fG",
    precio: "$140.000.000 ",
    tipo_motor: "v10",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 7,
    nombre: "Aston Martin One-77",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Aston-Martin-One-77-768x422.png",
    codigo: "hI8jK9lM",
    precio: "$240.000.000",
    tipo_motor: "v12",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 8,
    nombre: "Zenvo TS1 GT",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Zenvo-TS1-GT-768x576.png",
    codigo: "nO0pQ1rS",
    precio: "$300.000.000",
    tipo_motor: "v10",
    entrada_aire: "supercargador",
    cantidad: 2,
  },
  {
    id: 9,
    nombre: "Rimac C_Two",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Rimac-C_Two-768x448.png",
    codigo: "tU2vW3xY",
    precio: "$380.000.000",
    tipo_motor: "v8",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 10,
    nombre: "Koenigsegg One:1",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Koenigsegg-One-1-768x431.png",
    codigo: "zA4bC5dE",
    precio: "$200.000.000",
    tipo_motor: "v12",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 11,
    nombre: "Lamborghini Sesto Elemento",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Lamborghini-Sesto-Elemento-768x480.png",
    codigo: "fG6hI7j8",
    precio: "$400.000.000",
    tipo_motor: "v6",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 12,
    nombre: " Ferrari LaFerrari Aperta",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Ferrari-LaFerrari-Aperta-1-768x490.png",
    codigo: "kL9mN0oP",
    precio: "$500.000.000",
    tipo_motor: "v10",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 13,
    nombre: "McLaren Speedtail",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/McLaren-Speedtail-768x507.png",
    codigo: "qR1sT2u3",
    precio: "$500.000.000",
    tipo_motor: "v12",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 14,
    nombre: "Aston Martin Vulcan",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Aston-Martin-Vulcan-768x461.png",
    codigo: "vW4xY5zA",
    precio: "$300.000.000",
    tipo_motor: "v8",
    entrada_aire: "supercargador",
    cantidad: 2,
  },
  {
    id: 15,
    nombre: "Ferrari F60 América",
    categoria: "Deportivo",
    imagen: "https://minict.com/web/product/big/201803/3844_shop1_628876.jpg",
    codigo: "bC6dE7fG",
    precio: "$100.000.000",
    tipo_motor: "v6",
    entrada_aire: "supercargador",
    cantidad: 2,
  },
  {
    id: 16,
    nombre: "Lamborghini Countach LPI 800-4",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Lamborghini-Countach-LPI-800-4-768x393.png",
    codigo: "hI8jK9lM",
    precio: "$450.000.000",
    tipo_motor: "v6",
    entrada_aire: "supercargador",
    cantidad: 2,
  },
  {
    id: 17,
    nombre: "Pagani Huayra BC",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Pagani-Huayra-BC-768x384.png",
    codigo: "nO0pQ1rS",
    precio: "$240.000.000",
    tipo_motor: "v12",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 18,
    nombre: "Ferrari LaFerrari FXX-K",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Ferrari-LaFerrari-FXX-K-768x402.png",
    codigo: "tU2vW3xY",
    precio: "$460.000.000",
    tipo_motor: "v12",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 19,
    nombre: "Mercedes AMG One",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Mercedes-AMG-One-768x342.png",
    codigo: "zA4bC5dE",
    precio: "$300.000.000",
    tipo_motor: "v6",
    entrada_aire: "supercargador",
    cantidad: 2,
  },
  {
    id: 20,
    nombre: "Bugatti Chiron",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Bugatti-Chiron-768x437.png",
    codigo: "fG6hI7j8",
    precio: "$500.000.000",
    tipo_motor: "v8",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 21,
    nombre: "Aston Martin Valkyrie",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Aston-Martin-Valkyrie-768x384.png",
    codigo: "kL9mN0oP",
    precio: "$500.000.000 ",
    tipo_motor: "v6",
    entrada_aire: "supercargador",
    cantidad: 1,
  },
  {
    id: 22,
    nombre: "Koenigsegg Jesko",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Koenigsegg-Jesko-768x404.png",
    codigo: "qR1sT2u3",
    precio: "$400.000.000",
    tipo_motor: "v12",
    entrada_aire: "turbo",
    cantidad: 1,
  },
  {
    id: 23,
    nombre: "Ferrari Pininfarina Sergio",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Ferrari-Pininfarina-Sergio-768x300.png",
    codigo: "vW4xY5zA",
    precio: "$400.000.000",
    tipo_motor: "v8",
    entrada_aire: "supercargador",
    cantidad: 2,
  },
  {
    id: 24,
    nombre: "Bugatti Veyron by Mansory Vivere",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Limited-Edition-Bugatti-Veyron-by-Mansory-Vivere-768x393.png",
    codigo: "bC6dE7fG",
    precio: "$300.000.000",
    tipo_motor: "v12",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 25,
    nombre: "W Motors Lykan Hypersport",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/W-Motors-Lykan-Hypersport-768x421.png",
    codigo: "hI8jK9lM",
    precio: "$400.000.000",
    tipo_motor: "v12",
    entrada_aire: "turbo",
    cantidad: 3,
  },
  {
    id: 26,
    nombre: "McLaren P1 LM",
    categoria: "Deportivo",
    imagen:
      "https://www.6speedonline.com/wp-content/uploads/2015/04/2017-mclaren-p1-lm-4_1600x0w.jpg",
    codigo: "nO0pQ1rS",
    precio: "$600.000.000",
    tipo_motor: "v10",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 27,
    nombre: "Bugatti Chiron Pur Sport",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Bugatti-Chiron-Pur-Sport-768x485.png",
    codigo: "tU2vW3xY",
    precio: "$500.000.000",
    tipo_motor: "v8",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 28,
    nombre: "Lamborghini Sian",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Lamborghini-Sian-768x386.png",
    codigo: "zA4bC5dE",
    precio: "$700.000.000",
    tipo_motor: "v12",
    entrada_aire: "supercargador",
    cantidad: 1,
  },
  {
    id: 29,
    nombre: "Bugatti Chiron Super Sport 300+",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Bugatti-Chiron-Super-Sport-300-768x432.png",
    codigo: "fG6hI7j8",
    precio: "$600.000.000",
    tipo_motor: "v10",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 30,
    nombre: "Lamborghini veneno",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Lamborghini-Veneno-768x435.png",
    codigo: "kL9mN0oP",
    precio: "$400.000.000",
    tipo_motor: "v12",
    entrada_aire: "supercargador",
    cantidad: 2,
  },
  {
    id: 31,
    nombre: "Bugatti Bólido",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Bugatti-Bolide-768x368.png",
    codigo: "qR1sT2u3",
    precio: "$450.000.000",
    tipo_motor: "v6",
    entrada_aire: "turbo",
    cantidad: 1,
  },
  {
    id: 32,
    nombre: "Koenigsegg CCXR Trevita",
    categoria: "Descapotable",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Koenigsegg-CCXR-Trevita-768x399.png",
    codigo: "vW4xY5zA",
    precio: "$640.000.000",
    tipo_motor: "v8",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 33,
    nombre: "Pagani Huyara Imola",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Pagani-Huyara-Imola-768x393.png",
    codigo: "bC6dE7fG",
    precio: "$270.000.000",
    tipo_motor: "v8",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 34,
    nombre: " Bugatti Divo",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Bugatti-Divo-768x423.png",
    codigo: "hI8jK9lM",
    precio: "$650.000.000",
    tipo_motor: "v12",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 35,
    nombre: "Maybach Exelero",
    categoria: "Suv",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Maybach-Exelero-768x435.png",
    codigo: "nO0pQ1rS",
    precio: "$647.000.000",
    tipo_motor: "v10",
    entrada_aire: "supercargador",
    cantidad: 2,
  },
  {
    id: 36,
    nombre: "Bugatti Centodieci",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Bugatti-Centodieci-768x466.png",
    codigo: "tU2vW3xY",
    precio: "$340.000.000",
    tipo_motor: "v10",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 37,
    nombre: "Bugatti La Voiture Noir",
    categoria: "Deportivo",
    imagen:
      "https://thumbs.dreamstime.com/b/bugatti-la-voiture-noire-sobre-el-fondo-blanco-206469241.jpg",
    codigo: "zA4bC5dE",
    precio: "$430.000.000",
    tipo_motor: "v6",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 38,
    nombre: "Rolls Royce Sweptail",
    categoria: "Suv",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Rolls-Royce-Sweptail-768x401.png",
    codigo: "fG6hI7j8",
    precio: "$560.000.000",
    tipo_motor: "v6",
    entrada_aire: "supercargador",
    cantidad: 1,
  },
  {
    id: 39,
    nombre: "Pagani Zonda HP Barchetta",
    categoria: "Descapotable",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/Pagani-Zonda-HP-Barchetta-768x465.png",
    codigo: "kL9mN0oP",
    precio: "$234.000.000",
    tipo_motor: "v8",
    entrada_aire: "supercargador",
    cantidad: 1,
  },
  {
    id: 40,
    nombre: "Ferrari 250 LM",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/1964-Ferrari-250-LM-768x444.png",
    codigo: "qR1sT2u3",
    precio: "$345.000.000",
    tipo_motor: "v6",
    entrada_aire: "supercargador",
    cantidad: 1,
  },
  {
    id: 41,
    nombre: "McLaren F1 LM",
    categoria: "Deportivo",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/1994-McLaren-F1-LM-768x390.png",
    codigo: "vW4xY5zA",
    precio: "$305.000.000",
    tipo_motor: "v6",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 42,
    nombre: "Jaguar D-Type",
    categoria: "Descapotable",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/1955-Jaguar-D-Type-768x480.png",
    codigo: "bC6dE7fG",
    precio: "$453.000.000",
    tipo_motor: "v6",
    entrada_aire: "supercargador",
    cantidad: 1,
  },
  {
    id: 43,
    nombre: "Duesenberg SSJ",
    categoria: "Descapotable",
    imagen:
      "https://1000marcas.net/wp-content/uploads/2021/11/1935-Duesenberg-SSJ-768x465.png",
    codigo: "hI8jK9lM",
    precio: "$340.000.000",
    tipo_motor: "v8",
    entrada_aire: "supercargador",
    cantidad: 1,
  },
  {
    id: 44,
    nombre: "Porsche 911 GT3",
    categoria: "Deportivo",
    imagen:
      "https://img.freepik.com/fotos-premium/precioso-coche-porsche-911-gt3-rs_1032608-2.jpg",
    codigo: "nO0pQ1rS",
    precio: "$400.000.000",
    tipo_motor: "v8",
    entrada_aire: "turbor",
    cantidad: 1,
  },
  {
    id: 45,
    nombre: "Audi RS Q3",
    categoria: "Todoterreno",
    imagen:
      "https://hips.hearstapps.com/hmg-prod/images/12c773df-2020-audi-rs-q3-1-1569482796.jpg?crop=0.791xw:0.668xh;0,0.244xh&resize=980:*",
    codigo: "tU2vW3xY",
    precio: "$300.000.000",
    tipo_motor: "v6",
    entrada_aire: "turbo",
    cantidad: 1,
  },
  {
    id: 46,
    nombre: "BMW X4 M",
    categoria: "Suv",
    imagen:
      "https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/BMW-X4-M-02.jpg?crop=1xw:1xh;center,top&resize=980:*",
    codigo: "zA4bC5dE",
    precio: "$560.000.000",
    tipo_motor: "v10",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 47,
    nombre: "Cupra Formentor",
    categoria: "Suv",
    imagen:
      "https://hips.hearstapps.com/hmg-prod/images/cupra-formentor-vz5-12-hq-1613991166.jpg?crop=0.813xw:0.822xh;0.187xw,0.178xh&resize=980:*",
    codigo: "fG6hI7j8",
    precio: "$400.000.000",
    tipo_motor: "v6",
    entrada_aire: "turbo",
    cantidad: 1,
  },
  {
    id: 48,
    nombre: "Ford Mustang Mach-E GT",
    categoria: "Todoterreno",
    imagen:
      "https://hips.hearstapps.com/hmg-prod/images/ford-mustang-mach-e-gt-2021-5-1648123186.jpg?crop=1xw:1xh;center,top&resize=980:*",
    codigo: "kL9mN0oP",
    precio: "$390.000.000",
    tipo_motor: "v8",
    entrada_aire: "supercargador",
    cantidad: 2,
  },
  {
    id: 49,
    nombre: "Lamborghini Urus",
    categoria: "Suv",
    imagen:
      "https://hips.hearstapps.com/hmg-prod/images/506623-1586957936.jpg?crop=0.651xw:0.487xh;0,0.513xh&resize=980:*",
    codigo: "qR1sT2u3",
    precio: "$400.000.000",
    tipo_motor: "v8",
    entrada_aire: "turbo",
    cantidad: 2,
  },
  {
    id: 50,
    nombre: "Porsche Cayenne Turbo GT",
    categoria: "Todoterreno",
    imagen:
      "https://hips.hearstapps.com/hmg-prod/images/239551-5040x3362-6464ac4ed28be.jpg?crop=1.00xw:0.845xh;0,0.0751xh&resize=980:*",
    codigo: "vW4xY5zA",
    precio: "$500.000.000",
    tipo_motor: "v12",
    entrada_aire: "turbo",
    cantidad: 2,
  },
];


console.log("productos");
console.log(productos);

// FUNCION PARA AGREGAR PRODUCTOS
// definir la función para agregar el producto
function agregarProducto() {
  console.log("entro a la funcion");
  console.log(productos);
  const nombre = document.getElementById("nombre").value; // Obtiene el valor del campo de texto "nombre"
  const categoria = document.getElementById("categoria").value; // Obtiene el valor del campo de texto "categoria"
  const imagen = document.getElementById("imagen").value; // Obtiene el valor del campo de texto "imagen"
  const codigo = document.getElementById("codigo").value; // Obtiene el valor del campo de texto "codigo"
  const precio = document.getElementById("precio").value; // Obtiene el valor del campo de texto "precio"
  const motor = document.getElementById("motor").value; // Obtiene el valor del campo de texto "motor"
  const empuje = document.getElementById("empuje").value; // Obtiene el valor del campo de texto "empuje"
  const cantidadTurbos = document.getElementById("cuantosTS").value; // Obtiene el valor del campo de texto "cuantosTS"

  // crear un objeto con los datos del producto
  const nuevoProducto = {
    nombre: nombre, // Asigna el valor del campo de texto "nombre" al atributo "nombre" del objeto
    categoria: categoria, // Asigna el valor del campo de texto "categoria" al atributo "categoria" del objeto
    imagen: imagen, // Asigna el valor del campo de texto "imagen" al atributo "imagen" del objeto
    codigo: codigo, // Asigna el valor del campo de texto "codigo" al atributo "codigo" del objeto
    precio: precio, // Asigna el valor del campo de texto "precio" al atributo "precio" del objeto
    motor: motor, // Asigna el valor del campo de texto "motor" al atributo "motor" del objeto
    empuje: empuje, // Asigna el valor del campo de texto "empuje" al atributo "empuje" del objeto
    cantidad: cantidadTurbos, // Asigna el valor del campo de texto "cuantosTS" al atributo "cantidad" del objeto
  };

  console.log(nuevoProducto);
  // Agregar el nuevo producto al array de productos
  productos.push(nuevoProducto); // Agrega el objeto "nuevoProducto" al array de productos
  console.log(productos);
  guardarDatos("misDatos",productos);
}

function guardarDatos(key, data) {
  const dataString = JSON.stringify(data)
  localStorage.setItem(key, dataString);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



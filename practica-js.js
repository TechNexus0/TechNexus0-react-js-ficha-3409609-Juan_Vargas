// Reto 1

function calcularTotal(precio, cantidad) {
 const total = precio * cantidad;
 return total;
}
const resultado = calcularTotal(50000, 3);
console.log(resultado);

function Suma(a,b){
    const resultado = a + b 
    return resultado
}
function Resta(a,b){
    const resultado = a - b 
    return resultado
}
function Multiplicar(a,b){
    const resultado = a * b 
    return resultado
}
function Dividir(a,b){
    const resultado = a / b 
    return resultado
}
function CalcularPromedio(nota1, nota2, nota3){
    const promedio = (nota1 + nota2 + nota3) / 3
    return promedio
}
console.log(Suma(2, 3))
console.log(Resta(5, 3))
console.log(Multiplicar(4,5))
console.log(Dividir(10,2))
console.log(CalcularPromedio(4,3,4))


// Reto 2

const cuadrado = numero => numero * numero;
const EsMayorEdad = edad => edad >= 18;
const NombreCompleto = (nombre, apellido) => {
    console.log("Tu nombre completo es: " + nombre + " " + apellido);
}
console.log(cuadrado(3))
console.log(EsMayorEdad(19))
console.log(NombreCompleto("Juan", "Vargas"))

// Reto 3
const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000,categoria: 'Periféricos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000,categoria: 'Periféricos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000,categoria: 'Periféricos', stock: 3 },
  { id: 4, nombre: 'Televisor', precio: 1000000,categoria: 'Pantallas', stock: 5 },
  { id: 5, nombre: 'Nevera', precio: 2500000,categoria: 'Electrodomésticos', stock: 7 },
  { id: 6, nombre: 'Lavadora', precio: 1500000,categoria: 'Electrodomésticos', stock: 3 },
  { id: 7, nombre: 'Licuadora', precio: 200000,categoria: 'Electrodomésticos', stock: 2 },
  { id: 8, nombre: 'Altavoces', precio: 21000,categoria: 'Periféricos', stock: 0 },
  { id: 9, nombre: 'Cable HDMI', precio: 100000,categoria: 'Accesorios', stock: 0 },
  { id: 10, nombre: 'Audifonos', precio: 30000,categoria: 'Periféricos', stock: 2 }
];

// Reto 4 
 productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - ${producto.precio} - ${producto.stock}`);
 });
 
// reto 5

const nombres = productos.map(producto => producto.nombre);
console.log(nombres);

const precioIva = productos.map(producto => producto.precio * 1.19);
const nomMayus = productos.map(producto => producto.nombre.toUpperCase()); 
const Resumen = productos.map(producto => (`${producto.nombre} cuesta $${producto.precio}`)); 

console.log(precioIva);
console.log(nomMayus);
console.log(Resumen);

// Reto 6
const preciomayor = productos.filter(producto => producto.precio > 100000);
console.log("Precio mayor a $100.000:", preciomayor);

const precioEntre = productos.filter(
    producto => producto.precio >= 50000 && producto.precio <= 200000
);
console.log("Entre $50.000 y $200.000:", precioEntre);

const perifericos = productos.filter(
    producto => producto.categoria === "Periféricos"
);
console.log("Periféricos:", perifericos);

const producto5 = productos.find(producto => producto.id === 5);
console.log("Producto con ID 5:", producto5);

function buscarProducto(id) {
    const producto = productos.find(producto => producto.id === id);
    return producto;
}
console.log("Producto buscado:", buscarProducto(7));

// Reto 7
// ¿Hay productos agotados?

const hayAgotados = productos.some(producto => producto.stock === 0);
console.log(hayAgotados)

// ¿Todos los productos tienen precio mayor que cero?
const preciosValidos = productos.every(producto => producto.precio > 0);
console.log(preciosValidos)

// Calcular el valor total del inventario.
const valorInventario = productos.reduce(
 (total, producto) => total + producto.precio * producto.stock,
 0
);
console.log(valorInventario)

// ¿Existe algún producto con precio mayor a $1.000.000?
const mayorque = productos.some(producto => producto.precio > 1000000);
console.log(mayorque)

// Reto 8
const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);
const productoActualizado = {
 ...productos[1],
 precio: 20000,
 stock: 0
};

const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';

console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);
console.log(estado);
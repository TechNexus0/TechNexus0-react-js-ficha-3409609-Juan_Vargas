// Reto 1
/*
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
*/

// Reto 2
/*
const cuadrado = numero => numero * numero;
const EsMayorEdad = edad => edad >= 18;
const NombreCompleto = (nombre, apellido) => {
    console.log("Tu nombre completo es: " + nombre + " " + apellido);
}
console.log(cuadrado(3))
console.log(EsMayorEdad(19))
console.log(NombreCompleto("Juan", "Vargas"))
*/
// Reto 3
const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000,categoria: 'Periféricos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000,categoria: 'Periféricos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000,categoria: 'Periféricos', stock: 3 },
  { id: 4, nombre: 'Televisor', precio: 1000000,categoria: 'Pantallas', stock: 5 },
  { id: 5, nombre: 'Nevera', precio: 2000000,categoria: 'Electrodomésticos', stock: 7 },
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

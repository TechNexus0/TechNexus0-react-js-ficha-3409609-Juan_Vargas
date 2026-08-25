import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';
import { useState } from "react";
function App() {
 const disponibles = productos.filter(producto => producto.stock > 0);
 const valorInventario = productos.reduce(
 (total, producto) => total + producto.precio * producto.stock,
 0
 );
 const hayAgotados = productos.some(producto => producto.stock === 0);
 const [busqueda, setBusqueda] = useState("");
 const productosFiltrados =
productos.filter(producto =>
producto.nombre
.toLowerCase()
.includes(
busqueda.toLowerCase()
)
);
 return (
<main className="contenedor">
<input
type="text"
placeholder="Buscar producto..."
value={busqueda}
onChange={(evento) => {
setBusqueda(evento.target.value);
}}
/>
 <h1>Tienda tecnológica</h1>
 <p>Productos disponibles: {disponibles.length}</p>
 <p>Valor del inventario: ${valorInventario}</p>
 <p>
  ¿Hay productos agotados? {hayAgotados ? 'Sí' : 'No'}
</p>
 <section className="productos">
 {productosFiltrados.map(producto => (
<ProductoCard
key={producto.id}
producto={producto}
/>
))}
{
productosFiltrados.length === 0
? <p>No se encontraron productos.</p>
: null
}
 </section>
<section className="productos">
  <h2>Productos disponibles</h2>

  {disponibles.map(producto => (
    <ProductoCard
      key={producto.id}
      producto={producto}
    />
  ))}
</section>
 </main>
 );
}
export default App;
import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';
import { useState } from 'react';

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [soloDisponibles, setSoloDisponibles] = useState(false);
  const [categoria, setCategoria] = useState("Todas");

  const disponibles = productos.filter(
    producto => producto.stock > 0
  );

  const valorInventario = productos.reduce(
    (total, producto) =>
      total + producto.precio * producto.stock,
    0
  );

  const hayAgotados = productos.some(
    producto => producto.stock === 0
  );

  const agotados = productos.filter(
    producto => producto.stock === 0
  );

  const productosFiltrados = productos.filter(producto => {
    const coincideNombre =
      producto.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" ||
      producto.categoria === categoria;

    const coincideStock =
      !soloDisponibles ||
      producto.stock > 0;

    return (
      coincideNombre &&
      coincideCategoria &&
      coincideStock
    );
  });

  const productosOrdenados = [...productosFiltrados].sort(
    (a, b) => a.precio - b.precio
  );

  return (
    <main className="contenedor">

      <h1>Tienda tecnológica</h1>

      <br />

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => {
          setBusqueda(evento.target.value);
        }}
      />

      <br />
      <br />

      <p>
        Productos disponibles: {disponibles.length}
      </p>

      <p>
        Valor del inventario: ${valorInventario.toLocaleString("es-CO")}
      </p>

      <p>
        ¿Hay productos agotados?{" "}
        {hayAgotados ? "Sí" : "No"}
      </p>

      <p>
        Productos agotados: {agotados.length}
      </p>

      <br />

      <select
        value={categoria}
        onChange={(evento) =>
          setCategoria(evento.target.value)
        }
      >
        <option value="Todas">
          Todas
        </option>

        <option value="Perifericos">
          Periféricos
        </option>

        <option value="Consola">
          Consola
        </option>

        <option value="Componentes">
          Componentes
        </option>

        <option value="Fabricación aditiva">
          Fabricación Aditiva
        </option>
      </select>

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) =>
            setSoloDisponibles(
              evento.target.checked
            )
          }
        />

        Mostrar únicamente disponibles
      </label>

      <p>
        Productos encontrados: {productosFiltrados.length}
      </p>

      <br />

      <section className="productos">

        {productosOrdenados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}

        {productosOrdenados.length === 0 && (
          <p>
            No se encontraron productos.
          </p>
        )}

      </section>

    </main>
  );
}

export default App;
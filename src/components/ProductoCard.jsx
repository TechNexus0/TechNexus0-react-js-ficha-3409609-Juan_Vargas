function ProductoCard({ producto }) {
  const formatearPrecio = precio => {
    return precio.toLocaleString("es-CO");
  };

  return (
    <article className="producto-card">

      <h2>
        {producto.nombre}
      </h2>

      <p>
        Precio: ${formatearPrecio(producto.precio)}
      </p>

      <p>
        Stock: {producto.stock}
      </p>

      <p>
        Categoría: {producto.categoria}
      </p>

      {producto.stock > 0 ? (
        <p>
          Disponible
        </p>
      ) : (
        <p>
          Agotado
        </p>
      )}

    </article>
  );
}

export default ProductoCard;
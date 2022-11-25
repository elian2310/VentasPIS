// Importaciones
import "./styles.css";
import { productos } from "./DatosFalsos";
import Barra from "./Barra";

function Producto(props) {
  return (
    <div className="Producto">
      <div>
        <img src="/logo192.png" alt="" />
      </div>
      <div>
        <div className="Letras">
          <div>ID del Producto: {}</div>
          <p>Nombre del Producto: {props.Nombre}</p>
          <p>Precio del Producto: {props.Costo}</p>
          <p>Descripcion:</p>
        </div>
      </div>
      <div className="Letras-Derecha">
        <button className="Boton">Ver Detalles</button>
      </div>
    </div>
  );
}

function ListaProductos(props) {
  const productos = props.productos;
  return productos.map((producto) => (
    <Producto Nombre={producto.Nombre} Costo={producto.Costo} />
  ));
}

export function App() {
  return (
    <div>
      <Barra />
      <h1>Lista de Productos</h1>
      <ListaProductos productos={productos} />
    </div>
  );
}

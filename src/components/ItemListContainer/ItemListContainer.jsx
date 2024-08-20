import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../ayudin/pedirDatos";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const { categoria } = useParams();

  useEffect(() => {
    pedirDatos().then((res) => {
      if (categoria) {
        setProducts(res.filter((product) => product.categoria === categoria));
        setTitulo(categoria);
      } else {
        setProducts(res);
        setTitulo("Todos los productos");
      }
    });
  }, [categoria]);

  return (
    <div>
    <h2 className="titulo-ilc" >{titulo}</h2>
    <div className="container">
      
      {products.map((product) => (
        <div className="item" key={product.id}>
          <div className="text-container">
            <h4>{product.titulo}</h4>
            <p className="precio">precio: ${product.precio}</p>
            <Link className="ver-mas" to={`/item/${product.id}`}>
              Ver más
            </Link>
          </div>
          <img className="imagen" src={product.imagen} alt={product.titulo} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default ItemListContainer;
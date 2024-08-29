import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../ayudin/pedirDatos";

import { MainLayout } from "../../layouts/MainLayout";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    pedirDatos().then((res) => {
      if (categoria) {
        setProducts(res.filter((product) => product.categoria === categoria));
      } else {
        setProducts(res);
      }
    });
  }, [categoria]);

  return (
    <MainLayout titulo={categoria ? categoria : "Todos los Productos"}>
      <>
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
      </>
    </MainLayout>
  );
};

export default ItemListContainer;

import "./ItemDetail.css"
const ItemDetail = ({item}) => {
  return (
    <div className="container">
      <div className="producto-detalle">
        <img className="imagen-detalle" src={item.imagen} alt={item.titulo} />
        <h3 className="titulo-detalle">{item.titulo}</h3>
        <p className="descripcion">Descripcion: {item.descripcion}</p>
        <p className="categoria"> Categoria: {item.categoria}</p>
        <p className="precio">Precio: ${item.precio}</p>
        <p className="stock">Stock: {item.stock}</p>
      </div>
    </div>
  )
}

export default ItemDetail

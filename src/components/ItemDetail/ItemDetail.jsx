import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {
const onAdd = (cantidad) =>{
  console.log(cantidad)
}

  return (
    <div className="row">

        <div className="col">

            <img src={product.img} alt="imagen" className="w-20" />
            <h3>Nombre: {product.nombre}</h3>
            <h4>Precio: {product.precio}</h4>
            <h4>Cantidad: {product.cantidad}</h4>
        </div>
        <div className="col-6">

          <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>

    </div>
  )
}

export default ItemDetail
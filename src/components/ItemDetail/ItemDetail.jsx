import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({product}) => {
  const [cantidad, setCantidad] = useState(1)

const { agregarProducto } = useCartContext()
  
const agregarAlCart = (cantidad) =>{
  console.log(cantidad)
  agregarProducto({ ...product, cantidad })
}

const actualizarCantidad = (nuevaCantidad) => {
  setCantidad(nuevaCantidad)
}

  return (
    <div className="row">

        <div className="detail">

            <img src={product.img} alt="imagen" className="w-20 imgdetail" />
            <h3>Nombre: {product.nombre}</h3>
            <h4>Precio: {product.precio}</h4>
            <h4>Cantidad: {product.cantidad}</h4>
        </div>
        <div className="col">
          <ItemCount initial={cantidad} actualizarCantidad={actualizarCantidad} stock={product.cantidad} agregarAlCart={agregarAlCart}  />
          
        </div>

    </div>
  )
}




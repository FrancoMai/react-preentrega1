import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import "./ItemDetail"

export const ItemDetail = ({product}) => {
  const [quantity, updateQuantity] = useState(false)
  const { addToCart } = useCartContext()
  
const onAdd = (quantity) => {
  addToCart({ ...product, quantity })
  updateQuantity(true)
}

// const updateQuantity = (newQuantity) => {
//   setquantity(newQuantity)
// }

  return (
    <div className="row itemdetailcss">

        <div className="detail">
            <div key={product.id}>

            <img src={product.img} alt="imagen" className="w-20 imgdetail" />
            <h3>{product.name}</h3>
            <h4>{product.brand}</h4>
            <h4>Precio: ${product.price}</h4>
            <h4>Disponible: {product.quantity}</h4>
            </div>
        </div>
        <div className="col">
          {quantity ?
          <>
          <Link className="btn btn-outline-dark" to='/cart'>Terminar Compra</Link>
          <Link className="btn btn-outline-dark" to='/'>Seguir Comprando</Link>
          </>
          :
          <ItemCount initial={1} updateQuantity={updateQuantity} quantity={product.quantity} addToCart={addToCart} onAdd={onAdd} />
          }
        </div>

    </div>
  )
}




import {useCartContext} from "../../context/CartContext"


const CartContainer = () => {
    const { cartList, vaciarCarrito, eliminarItem } = useCartContext()
    console.log(cartList)
    console.log(eliminarItem)
    return (
    <>
        { cartList.map ((product) => (

          <div key={product.id} > 
            <img src={product.img} alt="imagen" />
            <label>{product.nombre}</label>
            <label>{product.marca}</label>
            <label>Cantidad:{product.cantidad}</label>
            <label>Precio:{product.precio}</label>
            <label>{product.stock}</label>
            <button onClick={()=> eliminarItem(product.id)}>x</button>
          </div>
        ))}
        <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
    </>
  )
}


export default CartContainer 


import { Form } from "../FormContainer/Form"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useState } from "react"
import './Shipping.css'
import { Link } from "react-router-dom"


const Shipping = (formData) => {
  const [id, setId] = useState(null)
  // const [inFormData, setinFormData] = useState({})
  //     name: '',
  //     phone: '',
  //     email: ''

  const {
    cartList,
    emptyCart,
    totalPrice,
  } = useCartContext()

  console.log(cartList)

  const onAdd = (quantity) => {
    addToCart({ ...product, quantity })
    updateQuantity(true)
  }

  const onHandleSubmit = () => {
    // formData.preventDefault()
    const order = {
      buyer: formData, // crear furmulario 
      items: cartList.map(({ id, name, price }) => ({ id, name, price })), // reduce campos
      total: totalPrice() // precio total de la compra
    }
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    // agregar
    addDoc(queryCollection, order)
      .then(resp => setId(resp.id))
      .catch(err => console.log(err))
      .finally(() => {
        console.log('termino la promesa')
        emptyCart()
      })
  }
  console.log(formData)

  return (
    <>
      <div className="shipping-cols">
        <div className="itemcartcss2">
          <h4 className="resumen">Resumen</h4>
          {cartList.map((product) => (
            <div className="itemcartx2" key={product.id}>
              <img src={product.img} alt='imagen' className="imgcartcss" />
              <h4 className="namecart2">{product.name}</h4>
              <h4 className="brandcart2">{product.brand}</h4>
              <h4 className="pricecart2">${product.price}</h4>
              <h4 className="qcart2">{product.quantity > 1 ? product.quantity + ' Unidades' : product.quantity + ' Unidad'}</h4>
              {/* <ItemCount initial={1} quantity={product.quantity} /> */}
              {/* <h4 className="deletebtn">
                                    <div className="btn btn-danger deletecartbutton" onClick={() => deleteProduct(product.id)}> */}
              {/* SVG de boton X */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="40" height="56" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M18 6l-12 12" />
                                            <path d="M6 6l12 12" />
                                        </svg>
                                    </div>
                                </h4> */}
            </div>
          ))}
          <div className="price-btntocart">
            <div className="total-price">
              <h3>Precio Total: ${totalPrice()}</h3>
            </div>

          </div>
        </div>
        <Link to={'/cart'} className="back-to-cart">
          <button className="btn-backcart"> Volver al Carro</button>
        </Link>
        <div className="formcart">
          <h4 className="tituloform">Datos del Envío</h4>
          <Form onHandleSubmit={onHandleSubmit} />
        </div>
        <div className="orden-taken">
          {id && <h2 className="gracias">Gracias por elegirnos! <br></br><br></br>
            El id de la orden de la compra es: {id}</h2>}
        </div>
      </div>

    </>
  )
}

export default Shipping
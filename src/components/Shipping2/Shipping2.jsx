import { Form2 } from "../FormContainer/Form2"
import './Shipping2.css'
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useState } from "react"


const Shipping2 = (formData) => {
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
      <div className="shipping-cols3">
        <div className="itemcartcss3">
          <h4 className="resumen3">Resumen</h4>
          {cartList.map((product) => (
            <div className="itemcartx3" key={product.id}>
              <img src={product.img} alt='imagen' className="imgcartcss" />
              <h4 className="namecart3">{product.name}</h4>
              <h4 className="brandcart3">{product.brand}</h4>
              <h4 className="pricecart3">${product.price}</h4>
              <h4 className="qcart3">{product.quantity + '/u'}</h4>
              {/* <h4 className="qcart2">{product.quantity > 1 ? product.quantity + ' /U' : product.quantity + ' /U'}</h4> */}
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
          <div className="price-btntocart3">
            <div className="total-price3">
              <h3>Precio Total: ${totalPrice()}</h3>
            </div>
            {/* <Link to={'/cart'} className="back-to-cart">
              <button className="btn-backcart"> Volver al Carro</button>
            </Link> */}

          </div>
        <h5 className="datos-compra">Datos de compra</h5>
        <Form2 />
            <div className="orden-taken">
            {id && <h2 className="gracias">Gracias por elegirnos! <br></br><br></br>
              El id de la orden de la compra es: {id}</h2>}
          </div>
    </div>
</div>
    </>
  )
}

export default Shipping2
import { Form } from "../FormContainer/Form"
import { Form2 } from "../FormContainer/Form2"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useState } from "react"
import './Shipping.css'
import { Link } from "react-router-dom"


const Shipping = (formData) => {
  const [id, setId] = useState(null)
  const [shipPickup, setShipPickup] = useState(null)
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
              <h4 className="qcart2">{product.quantity + '/u'}</h4>
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
          <div className="price-btntocart">
            <div className="total-price">
              <h3>Precio Total: ${totalPrice()}</h3>
            </div>
            {/* <Link to={'/cart'} className="back-to-cart">
              <button className="btn-backcart"> Volver al Carro</button>
            </Link> */}
          </div>
        </div>

        <div className="formcart">
          <div className="contenedor-opciones">
            <div className="enviodomicilio-div">
              <div
                className={shipPickup === 'EnvioDomicilio' ? 'selected' : ''}
                onClick={() => setShipPickup('EnvioDomicilio')}
              >
                {/* Envio a domicilio */}
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class={shipPickup === 'EnvioDomicilio' ? 'selected svg-envio icon icon-tabler icon-tabler-truck-delivery' : 'svg-envio icon icon-tabler icon-tabler-truck-delivery'} width="130" height="130" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                    <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    <path d="M3 9l4 0" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="retirolocal-div">
              <div
                className={shipPickup === 'RetiroLocal' ? 'selected' : ''}
                onClick={() => setShipPickup('RetiroLocal')}
              >
                {/* Retiro en local */}
                <svg xmlns="http://www.w3.org/2000/svg" class={shipPickup === 'RetiroLocal' ? 'selected svg-local icon icon-tabler icon-tabler-building-store' : 'svg-local icon icon-tabler icon-tabler-building-store'} width="130" height="130" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l18 0" />
                  <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                  <path d="M5 21l0 -10.15" />
                  <path d="M19 21l0 -10.15" />
                  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                </svg>
              </div>
            </div>
          </div>
          {shipPickup === 'EnvioDomicilio' && <Form onHandleSubmit={onHandleSubmit} />}
          {shipPickup === 'RetiroLocal' && <Form2 onHandleSubmit={onHandleSubmit} />}

        </div>
        <div className="orden-taken">
          {id && <h2 className="gracias">Gracias por elegirnos! <br></br><br></br>
            El id de tu orden de compra es: {id}</h2>}
        </div>
      </div>


      <div >
        <Link to='/Shipping2'>
          <img src="/img/140142_450.jpg" style={{ cursor: 'pointer' }} alt="img" />
        </Link>
      </div>

      <div >
        <Link to='/shipping'>
          <img src="/img/103313_450.jpg" style={{ cursor: 'pointer' }} alt="img" />
        </Link>
      </div>

    </>
  )
}

export default Shipping
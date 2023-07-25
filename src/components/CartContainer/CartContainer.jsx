import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import './CartContainer.css'
import { Form } from "../FormContainer/Form"

const CartContainer = (formData) => {
    const [id, setId] = useState(null)
    // const [inFormData, setinFormData] = useState({})
    //     name: '',
    //     phone: '',
    //     email: ''
    const {
        cartList,
        emptyCart,
        totalPrice,
        deleteProduct,
        incrementProduct
    } = useCartContext()

    console.log(cartList)

    const onHandleSubmit = (formData) => {
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
    // const handleOnChange = (event)=> {
    //     console.log(event.target.name)
    //     console.log(event.target.value)
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value
    //     })
    // }
    const onAdd = (quantity) => {
        addToCart({ ...product, quantity })
        updateQuantity(true)
    }
    return (
        <>
            {id && <h2 className="gracias">Gracias por elegirnos! <br></br><br></br>
                El id de la orden de la compra es: {id}</h2>}
            {cartList.length === 0 ?
                <div className="noproducts">
                    <img src='img/fondocarrito.jpg' alt='imagen' className="img-fondo-carrito" />
                    <h2 className="noproducts-title">No hay productos seleccionados</h2>
                    <Link to='/' className="link-products"> ⬅ Ir a ver productos</Link>
                </div>
                :
                <><div>
                    <img className="img-fondo-carrito div-imgcarrito-cart" src="img/fondocarrito.jpg" alt="img" />
                    <div id="cart" className="cart">
                        <div className="topicscart">
                            <h5 className="h5cart product">Producto</h5>
                            <h5 className="h5cart">Nombre</h5>
                            <h5 className="h5cart">Marca</h5>
                            <h5 className="h5cart price-div-cart">Precio</h5>
                            <h5 className="h5cart quantity-div-cart">Cantidad</h5>
                            <h5 className="nonosimporta"></h5>
                        </div>
                        <div className="itemcartcss">
                            {cartList.map((product) => (
                                <div className="itemcartx" key={product.id}>
                                    <img src={product.img} alt='imagen' className="imgcartcss" />
                                    <h4 className="namecart">{product.name}</h4>
                                    <h4 className="brandcart">{product.brand}</h4>
                                    <h4 className="pricecart">${product.price}</h4>
                                    <h4 className="qcart">{product.quantity}
                                        <span className="unit-quant">
                                            {product.quantity > 1 ? ' Unidades' : ' Unidad'}
                                        </span>
                                    </h4>
                                    <div className="delincbtn">
                                        <div className="btn btn-primary incrementcartbutton" onClick={() => incrementProduct(product.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="40" height="56" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 5l0 14" />
                                                <path d="M5 12l14 0" />
                                            </svg>
                                        </div>
                                        <div className="btn btn-danger deletecartbutton" onClick={() => deleteProduct(product.id)}>
                                            {product.quantity === 1 ?
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="40" height="56" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M18 6l-12 12" />
                                                    <path d="M6 6l12 12" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="40" height="56" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M5 12l14 0" />
                                                </svg>}
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </div>
                </div>
                    <div className="priceandempty">
                        <button className="btnemptycart" onClick={emptyCart}>Vaciar Carrito</button>
                        <h3 className="totalprice">Precio Total: ${totalPrice()}</h3>
                    </div>
                    <div className="btnfinbuy">
                        <Link to={'/shipping'}>
                            <button className="finallybuy">Finalizar Compra</button>
                        </Link>
                    </div>

                    {/* <div className="form-cart">
                        <Form onHandleSubmit={onHandleSubmit} />
                    </div> */}

                </>

            }</>
    )
}

export default CartContainer
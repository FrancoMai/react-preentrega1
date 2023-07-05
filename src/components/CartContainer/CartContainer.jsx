import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import { Form } from "../FormContainer/Form"
import './CartContainer.css'




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
        deleteProduct
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





    return (
        <>
            {id && <h2 className="gracias">Gracias por elegirnos! <br></br><br></br>
                El id de la orden de la compra es: {id}</h2>}
            {cartList.length === 0 ?
                <center className="noproducts">
                    <h2>No hay productos</h2>
                    <Link to='/'> ⬅ Ir a ver productos</Link>
                </center>
                :
                <div className="div-imgcarrito-cart">
                    <img className="img-fondo-carrito" src="img/fondocarrito.jpg" alt="img"/>
            
                <div className="itemcartcss">
                    
                    
                    
                    {cartList.map((product) => (
                        <div className="itemcartx" key={product.id}>
                            <img src={product.img} alt='imagen' className="imgcartcss" />
                            <h4 className="namecart">{product.name}</h4>
                            <h4 className="brandcart">{product.brand}</h4>
                            <h4 className="cantidadcart">Cantidad: {product.quantity}<button className="btn btn-danger deletecartbutton" onClick={() => deleteProduct(product.id)}>X</button></h4>
                        </div>
                    ))}
                    <div className="priceandempty">
                        <button className="btn btn-outline-dark btnemptycart" onClick={emptyCart}>Vaciar Carrito</button>
                        <h3 className="totalprice">Precio Total: {totalPrice()}</h3>
                    </div>
                    

                    <div className="formcart">
                        <Form onHandleSubmit={onHandleSubmit} />
                    </div>

                </div>
                </div>}
    
                

        </>
    )


}








export default CartContainer
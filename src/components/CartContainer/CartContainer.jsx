import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"



const CartContainer = () => {
    const [id, setId] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const { 
        cartList, 
        emptyCart, 
        totalPrice,
        deleteProduct 
    } = useCartContext()
    
    console.log(cartList)

    const handleSubmit = (event) => {
        event.preventDefault()

        const order={
            buyer: formData, // crear furmulario 
            items: cartList.map(({id, name, price})=> ({id, name, price})), // reduce campos
            total: totalPrice() // precio total de la compra
        }

        const db = getFirestore()
        
        const queryCollection = collection(db, 'orders')
        // agregar
        addDoc(queryCollection, order)
        .then(resp => setId(resp.id))
        .catch(err => console.log(err))
        .finally(()=> {
                console.log('termino la promesa')
                emptyCart()
        })
    }

    console.log(formData)

    const handleOnChange = (event)=> {
        console.log(event.target.name)
        console.log(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    
    return (
        <>
        {id && <h2>El id de la orden de la compra es: {id}</h2>}
        {cartList.length === 0 ? 
            <center>
                <h2>No hay productos</h2>
                <Link to='/'> ⬅ Ir a ver productos</Link>
            </center>
        :
            <div>
                    { cartList.map((product) => (
                        <div key={product.id}>
                            <img src={product.img} alt='imagen' className="w-25" />
                            Nombre: {product.name}  
                            Cantidad: {product.quantity}
                            <button className="btn btn-danger" onClick={()=> deleteProduct(product.id)}> {' '} X {' '} </button>
            </div>
                    ))}
                    
                    <h3>Precio Total: {totalPrice()}</h3>
                    <button onClick={emptyCart}>Vaciar Carrito</button>

                    <form onSubmit={handleSubmit}>
                        <input                         
                            type="text"
                            name="name"
                            placeholder="ingrese el nomber"
                            onChange={handleOnChange}
                            value={formData.name}
                        />
                        <input                         
                            type="text"
                            name="phone"
                            placeholder="ingrese el teléfono"
                            onChange={handleOnChange}
                            value={formData.phone}
                        />
                        <input                         
                            type="text"
                            name="email"
                            placeholder="ingrese el mail"
                            onChange={handleOnChange}
                            value={formData.email}
                        />
                        <input                         
                            type="text"
                            name="repetirMail"
                            placeholder="repetir el mail "
                            onChange={()=>{}}
                            // value={''}
                            />
                        <button >Generar Orden</button>
                    </form>
            </div>
        }
        </>
    )
}




// DE ACA PARA ABAJO ES LO MIO

// const FinishBuying = () => {
//   const order = { 
//     buyer: {name: 'franco', phone: '349845849', email: 'ff@gmail.com'},
//     items: [{id:'asdasdas', title: 'perfume YSL', price: '17.500'}],
//     total: '17.500'

//   }
//   console.log('enviando orden: ', order )

// }
// const CartContainer = () => {
//     const { cartList, emptyCart, deletItem } = useCartContext()
//     console.log(cartList)
//     console.log(deletItem)
//     return (
//     <>
//         { cartList.map ((product) => (

//           <div key={product.id} > 
//             <img src={product.img} alt="imagen" />
//             <label>{product.name}</label>
//             <label>{product.brand}</label>
//             <label>Cantidad:{product.quantity}</label>
//             <label>Precio:{product.price}</label>
//             <label>{product.stock}</label>
//           </div>
//         ))}
//         <button onClick={()=> deletItem(product.id)}>x</button>
//         <button onClick={() => emptyCart()}>Vaciar Carrito</button>
//         <button onClick={() => FinishBuying()}>Terminar Compra</button>
//     </>
//   )
 


export default CartContainer 


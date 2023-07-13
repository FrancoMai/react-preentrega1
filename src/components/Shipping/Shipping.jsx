import { Form } from "../FormContainer/Form"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useState } from "react"



  
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


      buyer: formData, // crear furmulario 
      items: cartList.map(({ id, name, price }) => ({ id, name, price })), // reduce campos
      total: totalPrice() // precio total de la compra
    }
  }

  const {
    cartList,
    totalPrice,
  } = useCartContext()


  return (
    <>
      <h4>Pago</h4>
      <div className="formcart">
        <Form onHandleSubmit={onHandleSubmit} />
      </div>
    </>
  )
}

export default Shipping
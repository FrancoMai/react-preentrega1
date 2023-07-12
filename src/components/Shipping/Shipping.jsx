import { Form } from "../FormContainer/Form"
import { useCartContext } from "../../context/CartContext"
import CartContainer from "../CartContainer/CartContainer"

const Shipping = () => {
  const onHandleSubmit = (formData) => {
    // formData.preventDefault()
    const order = {
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
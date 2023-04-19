import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)



export const CartContextProvider = ({children}) => {
       const [cartList, setCartList] = useState ([])

       const agregarProducto = (newProduct) => {
        const index = cartList.findIndex(
          (product) => product.id === newProduct.id
        )
        if (index === -1) {
          setCartList([...cartList, newProduct])
        } else {
          const updatedProducts = [...cartList]
          updatedProducts[index].cantidad += cantidad
          setCartList(updatedProducts)
        }
      }
        const vaciarCarrito = () => {
             setCartList([])

        }
      //    const eliminarItem = (cantidad) => {
      //      const updatedProducts = [...cartList]
      //      const index = updatedProducts.findIndex((product) => product.cantidad === cantidad)
      //      updatedProducts.splice(index, 1)
      //      setCartList(updatedProducts)
        
      // }
       const eliminarItem = (id) => {
       const updatedProducts = cartList.filter(product => product.id !== id);
       setCartList(updatedProducts);
      }
    return (
        <CartContext.Provider value={{
            cartList,
            setCartList,
            vaciarCarrito,
            agregarProducto,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}


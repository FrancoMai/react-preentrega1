import { createContext, useContext, useState } from "react";
import { redirect } from "react-router-dom";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)



export const CartContextProvider = ({children}) => {
        const [cartList, setCartList] = useState ([])

        const addToCart = (newProduct) =>{

        const indexProduct = cartList.findIndex(product => product.id === newProduct.id)  //  -1
        
            if (indexProduct === -1 ) {
                setCartList([
                    ...cartList,
                    newProduct
                ])              
            } else {
                cartList[indexProduct].quantity += newProduct.quantity
                setCartList( [ ...cartList ] )
            }

        }
    // localStorage.setItem('nombre', 'valor')

    // cantidad total de productos
    const totalQuantity = () => cartList.reduce( (totalQuantity, objProduct) => totalQuantity += objProduct.quantity, 0) 
   
    // retorna un valor

    // precio total de productos
    const totalPrice = () => cartList.reduce((totalPrice, objProduct) => totalPrice += (objProduct.price * objProduct.quantity), 0)
    
    // eliminar por item
    const deleteProduct = (pid) =>{

        const indexProduct = cartList.findIndex(product => product.id === pid)

        if (cartList[indexProduct].quantity > 1) {
            cartList[indexProduct].quantity = cartList[indexProduct].quantity -  1            
            setCartList( [...cartList] )
        } else {
            setCartList(cartList.filter(product => product.id !== pid ))          
        }
    }
    const emptyCart = () => {
        setCartList([])
    }

    return( 
        <CartContext.Provider value={{
            cartList,
            addToCart,
            emptyCart,
            totalPrice,
            totalQuantity,
            deleteProduct
        }}>
            {children}
        </CartContext.Provider>       
    )                                                                                                                                                                           
}


//        const addProduct = () => {
//         cartList((newProduct) => {

//           const itemFound = newProduct.find(
//             (product) => product.id === id)

//             if (itemFound) {
//               return newProduct.map ((product) => {
//                 if (item.id === id) {
//                   return {...product, quantity: quantity + 1}
//                 } else {
//                 return product
//                 }
//               })
//             } else {
//               return setCartList([...cartList, newProduct])
//             }
//           })
        

   
        
//       }
//         const vaciarCarrito = () => {
//              setCartList([])

//         }
//       //    const eliminarItem = (cantidad) => {
//       //      const updatedProducts = [...cartList]
//       //      const itemFound = updatedProducts.finditemFound((product) => product.cantidad === cantidad)
//       //      updatedProducts.splice(itemFound, 1)
//       //      setCartList(updatedProducts)
        
//       // }
//        const eliminarItem = (id) => {
//        const updatedProducts = cartList.filter((product) => product.id !== id);
//        setCartList(updatedProducts);
//       }
//     return (
//         <CartContext.Provider value={{
//             cartList,
//             setCartList,
//             vaciarCarrito,
//             addProduct,
//             eliminarItem
//         }}>
//             {children}
//         </CartContext.Provider>
//     )
// }


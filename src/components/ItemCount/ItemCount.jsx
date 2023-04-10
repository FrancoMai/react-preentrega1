import { useState } from "react"

export const ItemCount = ({initial=0, onAdd, stock}) => {
    // if (initial < min || initial > max) initial = min
    const [contador, setContador] = useState (initial)
    
    const increment = () => {
        if (contador < stock)
        setContador (contador + 1)
    }
    
    const decrement = () => {
        if (contador > initial)
        setContador (contador - 1)
    }
    
    const reset = () =>{
        setContador (initial)
    }
    
    function handleOnAdd() {
        onAdd(contador)
    }
    // { contador, increment, decrement, reset }
    return (
    <div className="contador">
        <button className="btn btn-outline-dark" onClick={increment}>+</button>
         <label>:{contador}</label>
        <button className="btn btn-outline-dark" onClick={decrement}>-</button>
        <button className="btn btn-outline-dark" onClick={handleOnAdd}>Agregar al carrito</button>
    </div>
    )

} 

// export const ItemCount = ({initial=1, stock=10, min=1, onAdd}) => {
//     const [contador, increment, decrement, reset] = useCount (11, 10, 1) 
        
        
        
     

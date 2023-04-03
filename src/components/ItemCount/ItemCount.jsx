import { useState } from "react"

export const ItemCount = (initial=0, min=1, max=10, onAdd) => {
    function handleOnAdd() {
        onAdd(contador)
    if (initial < min || initial > max) initial = min
    const [contador, setContador] = useState (initial)

    const increment = () => {
        if (contador < max)
        setContador (contador + 1)
    }

    const decrement = () => {
        if (contador > min)
        setContador (contador - 1)
    }

    const reset = () =>{
        setContador (initial)
    }

    { contador, increment, decrement, reset }
    return (
        <>
        <button className="btn btn-outline-dark" onClick={increment}>+</button>
         <label>contador:{contador}</label>
        <button className="btn btn-outline-dark" onClick={decrement}>-</button>
        <button className="btn btn-outline-dark" onClick={handleOnAdd}>Agregar al carrito</button>
    </>
    )}

} 

// export const ItemCount = ({initial=1, stock=10, min=1, onAdd}) => {
//     const [contador, increment, decrement, reset] = useCount (11, 10, 1) 
        
        
        
     

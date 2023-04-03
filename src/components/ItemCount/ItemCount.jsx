import { useCount } from "../../hooks/UseCount"



export const ItemCount = ({initial=1, stock=10, min=1, onAdd}) => {
    const [contador, increment, decrement, reset] = useCount (11, 10, 1) 
        function handleOnAdd() {
            onAdd(contador)
        }
        
    return (
        <>
        <button className="btn btn-outline-dark" onClick={increment}>+</button>
         <label>contador:{contador}</label>
        <button className="btn btn-outline-dark" onClick={decrement}>-</button>
        <button className="btn btn-outline-dark" onClick={handleOnAdd}>Agregar al carrito</button></>
    )
}
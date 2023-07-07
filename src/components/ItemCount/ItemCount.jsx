import { useState } from "react"


export const ItemCount = ({ initial = 1, quantity, onAdd }) => {

    const [counter, setcounter] = useState(initial)


    const increment = () => {
        if (counter < quantity)
            setcounter(counter + 1)
    }

    const decrement = () => {
        if (counter > initial)
            setcounter(counter - 1)
    }

    function handleOnAdd() {
        onAdd(counter)

        setcounter(initial)
    }

    return (

        <>
            <button className="btn btn-outline-dark" onClick={decrement}>-</button>
            <button className="btn btn-outline-dark" onClick={increment}>+</button>
            :<label className="counternumber"> {counter}</label><br />
            <button className="btn btn-outline-dark" onClick={handleOnAdd}>Agregar al carrito</button> <br />
        </>
    )
}





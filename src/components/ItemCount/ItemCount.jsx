import { useState } from "react"
import './ItemCount.css'


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
            <img src="" alt="" />
            <div className="div-counter">
                <button className="btn-decrement" onClick={decrement}>-</button>
                <label className="counternumber"> {counter}</label>
                <button className="btn-increment" onClick={increment}>+</button>
            </div>
            <div className="btn-add">
                <button className="btn-add-to-cart " onClick={handleOnAdd}>Agregar al carrito</button> <br />
            </div>
        </>
    )
}





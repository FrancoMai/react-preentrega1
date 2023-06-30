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


        // <div className="counter">

        // <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        //     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        //     aria-expanded="false" aria-label="Toggle navigation">
        //     <span className="navbar-toggler-icon"></span>
        // </button>

        // <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //     <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-class miclass">

        //         <li className="nav-item dropdown">

        //             <div className="nav-link dropdown text-dark" href="pages/fragancias.html" role="button"
        //                 data-bs-toggle="dropdown" aria-expanded="false">
        //                 Fragancias
        //             </div>

        //             <ul className="dropdown-menu">
        //             <li></li>
        //                     </ul>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        <>

            <button className="btn btn-outline-dark" onClick={decrement}>-</button>
            <button className="btn btn-outline-dark" onClick={increment}>+</button>
            :<label className="counternumber"> {counter}</label><br />
            <button className="btn btn-outline-dark" onClick={handleOnAdd}>Agregar al carrito</button> <br />
        </>
    )
}





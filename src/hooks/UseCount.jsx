import { useState } from "react"

export const useCount = (initial=0, min=1, max=10) => {
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

    return { contador, increment, decrement, reset }
} 
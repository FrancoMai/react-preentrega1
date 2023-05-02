import { useState } from "react"
import { withFormValidation } from "./withFormValidation"
import { Form } from "./From"


// componente creado a partir de la función a la cual se le pasa un componente como props
const FormWithValidation = withFormValidation(Form)

export const FormContainer = ()=> {
    const [ formData,setFormData ] = useState({
        nombre: '',
        email: ''
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }   

    return (
        <div>
            <FormWithValidation formData={formData} onChange={onChange} />
        </div>
    )
}

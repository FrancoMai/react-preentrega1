// import { useState } from "react"
// import { withFormValidation } from "./withFormValidation"
// import { Form } from "./Form"


// // componente creado a partir de la función a la cual se le pasa un componente como props
// <Form />
// const FormWithValidation = withFormValidation(Form)

// export const FormContainer = ()=> {
//     const [ formData, setFormData ] = useState({
//         nombre: '',
//         email: ''
//     })

//     const handleOnChange = (event)=> {
//         console.log(event.target.name)
//         console.log(event.target.value)
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value
//         })
//     }

//     // const onChange = (event) => {
//     //     setFormData({
//     //         ...formData,
//     //         [event.target.name]: event.target.value
//     //     })
//     // }

//     return (
//         <div>
//             <FormWithValidation formData={formData} onChange={handleOnChange} />
//         </div>
//     )
// }

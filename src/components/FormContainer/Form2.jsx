import { useForm } from "react-hook-form";
import { useCartContext } from "../../context/CartContext"
import './Formm2.css'

export const Form2 = ({ onHandleSubmit }) => {
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            direccion: ''
        }
    });

    function onSubmit(formData) {
        onHandleSubmit(formData);
    }
    const {
        cartList,
        totalPrice,
    } = useCartContext()

    return (
        <div className="form-divcss2">
            <form className="form-form2" onSubmit={handleSubmit(onSubmit)}>
                <div className="name-div-label2">
                    <label>Nombre:</label>
                    <input
                        type='text'
                        className="name-input2"
                        placeholder="Nombre"
                        {...register('name', { required: true })}
                    />
                    {errors.name?.type === 'required' && <p>El nombre es requerido</p>}
                </div>
                <div className="surname-div-label2">
                    <label>Apellido:</label>
                    <input
                        type='text'
                        className="name-input2"
                        placeholder="Apellido"
                        {...register('surname', { required: true })}
                    />
                    {errors.surname?.type === 'required' && <p>El apellido es requerido</p>}
                </div>
                <div className="phone-div-label2">
                    <label>Telefono / Celular:</label>
                    <input
                        className="phone-input2"
                        placeholder="Telefono"
                        type="tel" {...register('phone', { required: true })}
                    />
                    {errors.phone?.type === 'required' && <p>El telefono es requerido</p>}

                </div>
                <div className="dni-div-label2">
                    <label>DNI:</label>
                    <input
                        className="dni-input2"
                        placeholder="ej: 12.345.678"
                        type="text" {...register('dni', { required: true })}
                    />
                    {errors.dni?.type === 'required' && <p>Este campo es requerido</p>}
                </div>
                <div className="genera-orden2">
                    <button className="btn btn-primary my-4" type="submit">Generar Orden</button>
                </div>
            </form>
        </div>
    )
}
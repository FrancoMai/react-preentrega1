import { useForm } from "react-hook-form";
import { useCartContext } from "../../context/CartContext"
import './Form.css'
import Select from 'react-select'

export const Form = ({ onHandleSubmit }) => {
    const cities = [
        { value: 'San Justo', label: 'San Justo' },
        { value: 'Santa Fe', label: 'Santa Fe' },
        { value: 'Reconquista', label: 'Reconquista' },
        { value: 'Videla', label: 'Videla' },
        { value: 'Crespo', label: 'Crespo' },
        { value: 'Nelson', label: 'Nelson' }
    ];
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
        <div className="form-divcss">
            <form className="form-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="email-div-label">
                    <label>Email:</label>
                    <input
                        type='text'
                        className="email-input"
                        placeholder="tuemail@email.com"
                        {...register('email', { required: true },
                            { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })}
                    />
                    {errors.email?.type === 'required' && <p>El email es requerido</p>}
                    {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                </div>
                <div className="name-div-label">
                    <label>Nombre:</label>
                    <input
                        type='text'
                        className="name-input"
                        placeholder="Nombre"
                        {...register('name', { required: true })}
                    />
                    {errors.name?.type === 'required' && <p>El nombre es requerido</p>}
                </div>
                <div className="surname-div-label">
                    <label>Apellido:</label>
                    <input
                        type='text'
                        className="name-input"
                        placeholder="Apellido"
                        {...register('surname', { required: true })}
                    />
                    {errors.surname?.type === 'required' && <p>El apellido es requerido</p>}
                </div>
                <div className="phone-div-label">
                    <label>Telefono / Celular:</label>
                    <input
                        className="phone-input"
                        placeholder="Telefono"
                        type="tel" {...register('phone', { required: true })}
                    />
                    {errors.phone?.type === 'required' && <p>El telefono es requerido</p>}

                </div>
                <div className="city-div-label">
                    <label className="citylabel">Ciudad:</label>
                    <Select
                        className="cities"
                        options={cities}
                        isSearchable
                        placeholder="Selecciona tu ciudad"
                    />
                </div>
                <div className="street-div-label">
                    <label>Calle:</label>
                    <input
                        className="direccion-input"
                        placeholder="ej: Gdor. Iriondo"
                        type="text" {...register('street', { required: true })}
                    />
                    {errors.street?.type === 'required' && <p>La calle es requerida</p>}
                </div>
                <div className="number-div-label">
                    <label>Numero:</label>
                    <input
                        className="numero-input "
                        placeholder="ej: 2343"
                        type="tel" {...register('numero', { required: true })}
                    />
                    {errors.numero?.type === 'required' && <p>El numero es requerido</p>}
                </div>
                <div className="cp-div-label">
                    <label>CP:</label>
                    <input
                        className="cp-input"
                        placeholder="Código Postal"
                        type="text" {...register('cp', { required: true })} />
                    {errors.cp?.type === 'required' && <p>El CP es requerido</p>}
                </div>

                <div className="piso-div-label">
                    <label>Piso: <span className="opcional">(opcional)</span></label>
                    <input
                        className="piso-input"
                        placeholder="Piso"
                        type="text" {...register('floor')}
                    />
                </div>
                <div className="depto-div-label">
                    <label>Departamento: <span className="opcional">(opcional)</span></label>
                    <input
                        className="depto-input"
                        placeholder="Departamento"
                        type="text" {...register('department')}
                    />
                </div>
                <div className="dni-div-label">
                    <label>DNI:</label>
                    <input
                        className="dni-input"
                        placeholder="ej: 12.345.678"
                        type="text" {...register('dni', { required: true })}
                    />
                    {errors.dni?.type === 'required' && <p>Este campo es requerido</p>}
                </div>
                <div className="genera-orden">
                    <button className="btn btn-primary my-4" onClick={handleBuy} type="submit">Generar Orden</button>
                    {preferenceId && <Wallet initialization={{ preferenceId }} />}
                </div>
            </form>
        </div>
    )
}








//     const incluirTelefono = watch('incluirTelefono');

//     return <div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//                 <label>Nombre</label>
//                 <input type="text" {...register('nombre', {
//                     required: true
//                 })} />
//                 {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
//             </div>
//             <div>
//                 <label>Dirección</label>
//                 <input type="text" {...register('direccion', {
//                     required: true
//                 })} />
//             </div>
//             <div>
//                 <label>Email</label>
//                 <input type="text" {...register('email', {
//                     pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
//                 })} />
//                 {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
//             </div>
//             <div>
//                 <label>País</label>
//                 <select {...register('pais')}>
//                     <option value="fr">Argentina</option>
//                     <option value="es">Uruguay</option>
//                     <option value="it">Brasil</option>
//                     <option value="fr">Paraguay</option>
//                     <option value="fr">Chile</option>
//                 </select>
//             </div>
//             <div>
//                 <label>¿Incluir teléfono?</label>
//                 <input type="checkbox" {...register('incluirTelefono')} />
//             </div>
//             {incluirTelefono && (
//                 <div>
//                     <label>Teléfono</label>
//                     <input type="text" {...register('telefono')} />
//                 </div>
//             )}
//             <button type="submit">Generar Orden</button>
//         </form>
//     </div>
// }

import { useForm } from "react-hook-form";
import { useCartContext } from "../../context/CartContext"
import './Form.css'

export const Form = ({ onHandleSubmit }) => {
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
        <center>
        
            <form className="form-form" onSubmit={handleSubmit(onSubmit)}>

                <input
                    type='text'
                    name='email'
                    className="email-input"
                    placeholder="ejemplo@gmail.com"
                    {...register('email', { required: true },
                        { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })}
                />
                <br />
                {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
                {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                <br />
                    {/* <label className="name-inputt">Nombre:</label> <br /> */}

                <div>
                    <label>Email:</label><br />
                    <input
                        type='text'
                        name='email'
                        className="email-input"
                        placeholder="ejemplo@gmail.com"
                        {...register('email', { required: true },
                            { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i })}
                    />
                    {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
                    {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                </div>
                <div>
                    <label>Nombre:</label><br />

                    <input
                        type='text'
                        name='name'
                        className="name-input"
                        placeholder="Nombre"
                        {...register('name', { required: true })}
                    />
                    {errors.name?.type === 'required' && <p>El campo nombre es requerido</p>}
                </div>
                <div>
                    {/* <label>Dirección:</label>*/}<br /> 
                    <input 
                    className="direccion-input"
                    placeholder="Dirección"
                    type="text" {...register('direccion', {required: true })} />
                    {errors.name?.type === 'required' && <p>El campo dirección es requerido</p>}
                </div>
                <div>
                    {/* <label>Telefono:</label>*/}<br /> 
                    <input className="phone-input" 
                    placeholder="Telofono"
                    type="text" {...register('telefono')} />

                    <label>Dirección:</label><br />
                    <input
                        className="direction-input"
                        placeholder="Ingrese la dirección"
                        type="text" {...register('direccion', { required: true })} />
                </div>
                <div>
                    <label>Telefono:</label><br />
                    <input className="phone-input"
                        placeholder="Ingrese el telofono"
                        type="text" {...register('telefono')} />
                </div>
                <div>
                <br /> 
                    <input 
                    className="dni-input"
                    placeholder="DNI *"
                    type="text" {...register('dni', {required: true })} />
                    {errors.dni?.type === 'required' && <p>El campo DNI es requerido</p>}
                </div>
                <div>
                <br /> 
                    <input 
                    className="altura-input"
                    placeholder="Altura * ej: 2343"
                    type="text" {...register('altura', {required: true })} />
                    {errors.altura?.type === 'required' && <p>El campo Altura es requerido</p>}
                </div>
                <div>
                <br /> 
                    <input 
                    className="cp-input"
                    placeholder="Código Postal"
                    type="text" {...register('cp', {required: true })} />
                    {errors.cp?.type === 'required' && <p>El Código postal es requerido</p>}
                </div>
                <div>
                <br /> 
                    <input 
                    className="ciudad-input"
                    placeholder="Ciudad"
                    type="text" {...register('ciudad', {required: true })} />
                    {errors.ciudad?.type === 'required' && <p>La ciudad es requerido</p>}
                </div>
                <div>
                    <button className="btn btn-primary my-4" type="submit">Generar Orden</button>
                </div>
            </form>
        </center>
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

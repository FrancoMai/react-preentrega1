// import { useForm } from "react-hook-form";
// import { onHandleSubmit } from "../CartContainer/CartContainer";

//  export const Form = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm ({
//         defaultValues: {
//         name: '',
//         direccion: ''
//         }
//     });

//     const onSubmit = (formData) => {
//         console.log(formData);
//     }

//     return (
//         <center>
//             <form onSubmit={handleSubmit(onSubmit)}> 
//                 <div>
//                     <p>
//                         <label>Nombre:</label><br></br>
//                     </p>
//                 <input 
//                     type='text' 
//                     name='name' 
//                     placeholder="ingrese el nombre" 
//                     {...register('name', {required: true })}
//                 />
//                 {errors.name?.type === 'required' && <p>El campo nombre es requerido</p>}                   
//                 </div>

//                 <br/>
//                 <br/>
//                 <label>Email:</label><br></br>
//                 <input 
//                     type='text' 
//                     name='email' 
//                     placeholder="ejemplo@gmail.com"   
//                     {...register('email', {
//                     pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i})}
//                 />
//                 <br />
//                 {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
//                 <br/>
//                 <div>
//                 <label>Dirección:</label><br></br>
//                  <input type="text" {...register('direccion', {
//                      required: true
//                  })} />
//              </div>
//                  <div>
//                  <label>Telefono:</label><br></br>
//                      <input type="text" {...register('telefono')} />
//                  </div>
//                  <div>
//                  <button className="btn btn-primary btnorder" type="submit" onClick={onHandleSubmit}>Generar Orden</button>
//                  </div>
//             </form>
//         </center>
//     )
// }







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

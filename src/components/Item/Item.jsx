import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <>
                
        <div className="grid-item">
            <img src={producto.img} className='imgclass' alt="imagen" />
            <label className="nombre">{producto.nombre}</label>
            <label className="marca">{producto.marca}</label>
            <label className="precio">${producto.precio}</label>
            <label className="cantidad">{producto.stock}</label>
            <div className='card-footer-compra'>
            <Link className= 'boton1' to= {`/detail/${producto.id}`}>
            <button className='btn btn-outline-dark'>Detalle</button>    
            </Link>

        </div>
        </div>
    </>
        
  )
}

export default Item
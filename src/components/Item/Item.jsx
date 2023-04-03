
const Item = (producto) => {
  return (
    <>
        <div className="grid-container"></div>        
        <div className='grid-item'>
            <img src={producto.img} className='imgclass' alt="imagen" />
            <label className="nombre">{producto.nombre}</label>
            <label className="marca">{producto.marca}</label>
            <label className="precio">${producto.precio}</label>
            <label className="cantidad">{producto.stock}</label>
            <div className='card-footer-compra'>
            <button className='btn btn-outline-dark boton'>Comprar</button>               
        </div>
        </div>
    </>
        
  )
}

export default Item
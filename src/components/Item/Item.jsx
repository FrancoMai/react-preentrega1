
const Item = (producto) => {
  return (
    <><><>
        <div className='card w-25'></div>
        <img src={producto.img} className='card-img-top 2-200' alt="imagen" /></>
        <div className='card-body'>
            <label>Nombre: {producto.nombre}</label>
            <label>Marca: {producto.marca}</label>
            <label>{producto.precio}</label>
            <label>Cantidad:{producto.stock}</label>
        </div></>
        <div className='card-footer-compra'>
            <button className='btn btn-outline-dark'>Comprar</button>               
        </div></>
  )
}

export default Item
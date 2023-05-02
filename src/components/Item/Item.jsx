import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <>
                
        <div className="grid-item">
            <img src={product.img} className='imgclass' alt="imagen" />
            <label className="name">{product.name}</label>
            <label className="brand">{product.brand}</label>
            <label className="price">${product.price}</label>
            <label className="quantity">{product.quantity}</label>
            <div className='card-footer-buy'>
            <Link className= 'buton1' to= {`/detail/${product.id}`}>
            <button className='btn btn-outline-dark'>Detalle</button>    
            </Link>

        </div>
        </div>
    </>
        
  )
}

export default Item
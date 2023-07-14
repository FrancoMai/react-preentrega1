import { Link } from "react-router-dom"
import './Item.css'

const Item = ({ product }) => {
  return (
    <>
      <div className="itemcss">
        <img src={product.img} className='imgclass' alt="imagen" />
        <label className="name">{product.name}</label>
        <label className="brand">{product.brand}</label>
        <label className="price">${product.price}</label>
        <div className='card-footer-buy'>
          <Link className='button1' to={`/detail/${product.id}`}>
            <button className='btn btn-outline-dark'>Detalle</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Item
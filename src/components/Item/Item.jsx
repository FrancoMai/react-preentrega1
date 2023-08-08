import { Link } from "react-router-dom"
import './Item.css'

const Item = ({ product }) => {
  return (
    <>
      <div className="itemcss swiperhover">
        <img src={product.img} className='imgclassName' alt="imagen" />
        <label className="brand">{product.brand}</label>
        <label className="name">{product.name}</label>
        <label className="price">${product.price}</label>
        <div className='card-footer-buy'>
          <Link className='button1' to={`/detail/${product.id}`}>
            <button className='btndetalle buttondetalle'>Comprar</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Item
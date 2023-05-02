import Item from "../Item/Item"


export const ItemList = ({products}) => {
  return (
    products.map ( product => 
        <Item key={product.id}
        nombre={product.name}
        marca={product.brand}
        precio={product.price}
        stock={product.stock}
        cantidad={product.quantity}
        img={product.img}
        product={product} /> 
    )
  )
}


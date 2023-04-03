import Item from "../Item/Item"


export const ItemList = ({productos}) => {
  return (
    productos.map (producto => <Item key={producto.id}
        nombre={producto.nombre}
        marca={producto.marca}
        precio={producto.precio}
        stock={producto.stock}
        img={producto.img}
        producto = {producto} /> 
    )
  )
}


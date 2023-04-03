import { useEffect, useState } from 'react'
import { mockFetch } from '../../utils/mockFetch'
import { ItemList } from '../ItemList/ItemList'


export const ItemListContainer = () => {
  const [productos,setProductos] = useState ([])

    useEffect(()=>{
    mockFetch()
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => (''))
    },[])

  return (
    <div>
        
        { 
        productos.length > 0 ?
        <div className='style-productos'>
        <ItemList productos={productos} />
        </div>
        :
        <h2>cargando...</h2>
        }    
        
        </div>
)
    }


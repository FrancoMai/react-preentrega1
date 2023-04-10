import { useEffect, useState } from 'react'
import { mockFetch } from '../../utils/mockFetch'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


export const ItemListContainer = () => {
  const [productos,setProductos] = useState ([])
  const {cid} = useParams()
  console.log(cid)

    useEffect(()=>{
      if (cid) {
        mockFetch()
        .then(resp => setProductos(resp.filter(prod => prod.categoria == cid)))
        .catch(err => console.log(err))
        .finally(() => (''))
    
      } else {
        
        mockFetch()
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => (''))
        }
      },[cid])


  return (
    <div className="grid-container">
        
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


import React, { useEffect, useState } from 'react'
import { mockFetch } from '../../utils/mockFetch'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    useEffect(()=> {
        mockFetch('1')
        .then((resp)=> setProduct (resp))
        .catch((err)=> console.log(err))
},[])

  return (
    <ItemDetail product={product} />
    
  )
}
export default ItemDetailContainer

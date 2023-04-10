import React, { useEffect, useState } from 'react'
import { mockFetch } from '../../utils/mockFetch'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {pid} = useParams()
    console.log(pid)
    
    useEffect(()=> {
        mockFetch(pid)
        .then((resp)=> setProduct (resp))
        .catch((err)=> console.log(err))
},[])

  return (
    <ItemDetail product={product} />
    
  )
}
export default ItemDetailContainer

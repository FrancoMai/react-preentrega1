import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { Loading } from '../Loading/Loading'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { pid } = useParams()


    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDocument = doc(dbFirestore, 'products', pid)
        getDoc(queryDocument)
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            {
                isLoading ?
                    <Loading />
                    :
                    <ItemDetail product={product} />
            }

        </>
    )
}

export default ItemDetailContainer

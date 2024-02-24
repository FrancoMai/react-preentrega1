import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { ItemList } from "../ItemList/ItemList.jsx"
import { Loading } from "../Loading/Loading.jsx"
import Banner from "../Banner/Banner.jsx"
import Swiperjsx from "../Swiper/Swiper.jsx"
import { Filter } from "../RenderProps/Filter.jsx"

import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setproducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)



    const { cid } = useParams()


    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'products') // 2 argumento
        const queryFilter = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection

        getDocs(queryFilter)
            .then(resp => setproducts(resp.docs.map(products => ({ id: products.id, ...products.data() }))))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
        
        

    }, [cid])


    const handleProductsFiltered = ({ filterState, handleFilterChange }) => (

        <div>
            <h2 className="h2input">{filterState}</h2>
            <input className="form-control me-2" value={filterState} onChange={handleFilterChange} type="search" placeholder="Busca Aquí"
                aria-label="Search"></input>

            <ItemList
                products={
                    filterState == '' ?
                        products
                        :
                        products.filter(product => product.name.toLowerCase().includes(filterState.toLocaleLowerCase()))
                }
            />
        </div>
    )

    return (
        <>
            <Banner />
            <Swiperjsx slides={products} />
            
            {isLoading
                ?
                <Loading />
                :
                <Filter>
                    {handleProductsFiltered}
                </Filter>
            }
        </>
    )
}

export default ItemListContainer

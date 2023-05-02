// import { useEffect, useState } from 'react'
// import { mockFetch } from '../../utils/mockFetch'
// import { ItemList } from '../ItemList/ItemList'
// import { useParams } from 'react-router-dom'
// import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'


// export const ItemListContainer = () => {
//   const [product,setProduct] = useState ([])
//   const [isLoading, setIsLoading] = useState(true)
//   const {cid} = useParams()
//   console.log(cid)

//     // useEffect(()=>{
//     //   if (cid) {
//     //     mockFetch()
//     //     .then(resp => setproduct(resp.filter(prod => prod.categoria == cid)))
//     //     .catch(err => console.log(err))
//     //     .finally(() => (''))
    
//     //   } else {
        
//     //     mockFetch()
//     //         .then(resp => setproduct(resp))
//     //         .catch(err => console.log(err))
//     //         .finally(() => (''))
//     //     }
//     //   },[cid])

//     // traer un solo producto.
//     // useEffect(()=>{
//     //   const db = getFirestore()
//     //   const queryDoc = doc(db, 'product', 'NIlMY7jkYQjCxb9guzxO')
//     //   getDoc(queryDoc)
//     //   .then(resp => console.log( { id: resp.id, ...resp.data() } ))
//     // }, [])
     
//       useEffect(()=>{
//           if (cid) {
//               const db = getFirestore()
//               // const queryDoc = doc(db, 'product', pid) // 3argumento
//               const queryCollection = collection(db, 'product') // 2 argumento
      
//               const queryFilter = query(
//                   queryCollection, 
//                   where('category', '==', cid) 
//                   // where('price', '>=', 3500), 
//                   // orderBy('price','desc')
//                   // limit(1) ,
//               ) // filtro
              
//               getDocs(queryFilter)
//                   .then(resp => setProduct( resp.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
//                   .catch(err => console.log(err))
//                   .finally(()=> setIsLoading(false))        
//           } else {
//               const db = getFirestore()
//               // const queryDoc = doc(db, 'product', pid) // 3argumento
//               const queryCollection = collection(db, 'products') // 2 argumento       
              
//               getDocs(queryCollection)
//                   .then(resp => setProduct( resp.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
//                   .catch(err => console.log(err))
//                   .finally(()=> setIsLoading(false))       
                         
//           }
//       }, [cid])

//       useEffect(()=>{
//         const db = getFirestore()        
//         const queryCollection = collection(db, 'product') // 2 argumento
//         const queryFilter = cid ? query(queryCollection,where('category', '==', cid))   : queryCollection
    
//         getDocs(queryFilter)
//         .then(resp => setProduct( resp.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
//         .catch(err => console.log(err))
//         .finally(()=> setIsLoading(false))        
           
//         }, [cid])   
    
  


//   return (
//     <div className="grid-container">
        
//         { 
//         product.length > 0 ?
//         <div className='style-products'>
//         <ItemList product={product} />
//         </div>
//         :
//         <h2>cargando...</h2>
//         }    
        
//         </div>
// )
//     }



// import { useParams } from "react-router-dom"
// import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

// import { mockFetch } from "../../utils/mockFetch"

// import ItemList from "../ItemList/ItemList.jsx"

// export const ItemListContainer = () => {
//     const [product, setProduct] = useState([])
//     const [isLoading, setIsLoading] = useState(true)
//     const [ Like, setLike ]   = useState(true)
    
//     const {cid} = useParams()
   
//     useEffect(()=>{
//         const db = getFirestore()        
//         const queryCollection = collection(db, 'product') // 2 argumento
//         if (cid) {
//             const queryFilter = query(queryCollection,where('category', '==', cid)) // filtro    
            
//             getDocs(queryFilter)
//                 .then(resp => setProduct( resp.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
//                 .catch(err => console.log(err))
//                 .finally(()=> setIsLoading(false))        
//         } else {              
            
//             getDocs(queryCollection)
//                 .then(resp => setProduct( resp.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
//                 .catch(err => console.log(err))
//                 .finally(()=> setIsLoading(false))       
                       
//         }
//     }, [cid])    
    
//     console.log(product)
//     const handleLike= () => {
//         setLike(!Like)
//     }

//     const handleAddProduct = () => {
//         setProduct([
//             ...product, 
//             {id: product.length +1 , name: 'Nuevo Producto', categoria: '', price: 3500, stock: 100}
//         ])
//     }
//     useEffect(()=>{
//     const db = getFirestore()        
//     const queryCollection = collection(db, 'product') // 2 argumento
//     const queryFilter = cid ? query(queryCollection,where('category', '==', cid))   : queryCollection

//     getDocs(queryFilter)
//     .then(resp => setProduct( resp.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
//     .catch(err => console.log(err))
//     .finally(()=> setIsLoading(false))        
       
//     }, [cid])   

//    console.log('ItemListContianer')
   
//     return (
//         <>
//             <button className="btn btn-success rounded-pill" onClick={handleLike}>Me gusta</button>
//             <button className="btn btn-success" onClick={handleAddProduct}>Agregar Producto</button>
//             { isLoading ?
//             { isLoading 
//                 ?
//                     <Loading />
//                 :
//                     <ItemList product = {product}
//                     />
            
//             }   
            
              
//         </>
//         )
// }


import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import { ItemList } from "../ItemList/ItemList.jsx"
import { Loading } from "../Loading/Loading.jsx"

const ItemListContainer = () => {
    const [products, setproducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const {cid} = useParams()
   

    useEffect(()=>{
    const db = getFirestore()        
    const queryCollection = collection(db, 'products') // 2 argumento
    const queryFilter = cid ? query(queryCollection,where('category', '==', cid))   : queryCollection

    getDocs(queryFilter)
    .then(resp => setproducts( resp.docs.map(products => ({ id: products.id, ...products.data() }) ) ))
    .catch(err => console.log(err))
    .finally(()=> setIsLoading(false))        
       
    }, [cid])   

   
    return (
        <>
            { isLoading 
                ?
                    <Loading />  
                :
                    <ItemList 
                        products = {products}
                    />
            
            }       
              
        </>
    )
}

export default ItemListContainer

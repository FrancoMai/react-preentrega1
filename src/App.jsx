import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/navbar/navbar';
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import CartContainer  from './components/CartContainer/CartContainer';
import Swiperjsx from './components/Swiper/Swiper';
import Banner from './components/Banner/Banner';








function App() {
  return (

  <BrowserRouter>
    <CartContextProvider>

    <div className="App">
	  <Navbar />

      <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:cid' element={<ItemListContainer />}></Route>
          <Route path='/detail/:pid' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<CartContainer />}></Route> 
          <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes> 

    </div>
    </CartContextProvider>
  </BrowserRouter>
  )
}

  




export default App


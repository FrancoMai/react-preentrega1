import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';







function App() {
  return (

  <BrowserRouter>
    <CartContextProvider>

    <div className="App">
	  <NavBar />

      <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/categoria/:cid' element={<ItemListContainer />}></Route>
          <Route path='/detail/:pid' element={<ItemDetailContainer />}></Route>
          <Route path='/carrito' element={<CartContainer />}></Route> 
          <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes> 

    </div>
    </CartContextProvider>
  </BrowserRouter>
  )
}

  




export default App


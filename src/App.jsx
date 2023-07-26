import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';
import { Login } from './components/Login/Login';
import { Register } from "./components/Register/Register";
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoutes';
import { Logout1 } from './components/Logout';
import Shipping from './components/Shipping/Shipping';
import Footer from './components/Footer/Footer'
import { NuestroLocal } from './components/FooterSections/NuestroLocal';





function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <CartContextProvider>

          <div className="App">

            <Navbar />

            <Routes>
              <Route path='/' element={<ItemListContainer />}></Route>
              <Route path='/category/:cid' element={<ItemListContainer />}></Route>
              <Route path='/detail/:pid' element={<ItemDetailContainer />}></Route>
              <Route path='/cart' element={<CartContainer />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='*' element={<Navigate to='/' />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/shipping' element={<Shipping />}></Route>
              <Route path='/nuestroLocal' element={<NuestroLocal />}></Route>
              <Route path='/logout' element={
                <ProtectedRoute>
                  <Logout1 />
                </ProtectedRoute>}>
              </Route>
            </Routes>
            <Footer />

          </div>

        </CartContextProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}






export default App


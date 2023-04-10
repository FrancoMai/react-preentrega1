import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';







function App() {
  return (
    <BrowserRouter>

	  <NavBar />

    <div className="App">

      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/categoria/:cid' element={<ItemListContainer />}></Route>
        <Route path='/detail/:pid' element={<ItemDetailContainer />}></Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes> 

    </div>

    </BrowserRouter>
  )
}

  




export default App


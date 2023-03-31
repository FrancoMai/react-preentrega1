import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { productos } from './utils/mockFetch';





function App() {
  return (
    <div className="App">
    
	<NavBar />
  <ItemListContainer />
   
    </div>
  )
}

  




export default App


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Formulario } from './components/Formulario/Formulario'
import './bootstrap.min.css'
import { Navbar } from './components/navbar/navbar'
import { Carrito } from './components/Carrito/carrito'

function App() {
	const saludar = console.log('Hola!')

  return (
    <div className="App">
    
	<Navbar />
	<Formulario />
  
    </div>
  )
}

  




export default App


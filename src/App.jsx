import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Card from './Components/Card'

function App() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    artista: ''
  })

  const [mostrar, setMostrar] = useState(true)


  return (
    <>
      <div className="App">
        {mostrar  && <Card nombre={usuario.nombre} artista={usuario.artista}/>}
        <Form setMostrar={setMostrar} setUsuario={setUsuario}/>  
      </div>        
    </>
  )
}

export default App

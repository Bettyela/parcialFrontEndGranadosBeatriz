import React, { useState } from 'react';

const Form = () => {
const [error, setError] = useState(false);
const [usuario, setUsuario] = useState({
nombre: '',
artista: ''
});

const handleSubmit = (e) => {
e.preventDefault()
    if(usuario.nombre.length > 2 && usuario.nombre.charAt(0) !== " " && usuario.artista.length > 5)
    {
    setMostrar(true)
    setError(false)
    } else {
    setError(true)
    setMostrar(false)
    }
};

return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Ingrese su nombre</label>
        <input type="text" onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}/>

        <br/>
        
        <label>Ingrese su artista favorito</label>
        <input type="text" onChange={(e) => setUsuario({ ...usuario, artista: e.target.value })}/> 

        <br/>

        <button type="submit">Ver</button>

        <br/>

        </form>

        {error && <h3>Por favor, verifica que la información sea correcta</h3>}
        </div>
    )
};

export default Form
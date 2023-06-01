import React from 'react'

const Card = ({nombre, artista}) => {

  return (
    <div style={{backgroundColor: 'white', color: 'red'}}>
        <h3>Hola {nombre}!</h3>
        <h3>Tu artista favorito es {artista}</h3>
    </div>
  )
}

export default Card
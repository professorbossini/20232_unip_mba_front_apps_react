import React from 'react'
import Imagem from './Imagem'
const ListaImagens = (props) => {
  return (
    props.pics.map((pic) => (
      <Imagem 
        pic={pic.src.small}
        alt={pic.alt}
        imgStyle={props.imgStyle}
      />
    ))
  )
}

export default ListaImagens
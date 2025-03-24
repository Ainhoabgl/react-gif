// Este es el componente principal de tu aplicación.
// ¿Qué hace?

// Mantiene un estado (categorias) que guarda las categorías de búsqueda de GIFs.

// Muestra el título principal (<h1>GifExpertApp</h1>).

// Incluye el componente <AddCategory />, que permite agregar nuevas categorías.

// Renderiza una lista de <GifGrid />, que muestra los GIFs de cada categoría.

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([ 'One Puch']);

    const onAddCategoria = (newCategory) => {
        // console.log (newCategory);
        // const newItem = 'Valorant';
        if (categorias.includes(newCategory))return;
        setCategorias ([newCategory,...categorias,]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>


    <AddCategory 
    onNewCategory= {event => onAddCategoria(event)}
    />

            
            {categorias.map((categoria)=> 
            (<GifGrid key={categoria} categoria={categoria}/>

            ))
            }

    </>
  )
}

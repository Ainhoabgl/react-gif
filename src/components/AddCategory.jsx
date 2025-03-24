// Este componente contiene un input donde el usuario puede escribir una categoría nueva.
//Cuando el usuario presiona "Enter", la nueva categoría se envía a GifExpertApp.

import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')
    const onInputChange= (event) => {
        setinputValue(event.target.value);
    }

    const onSubmit = (event)=> {
        event.preventDefault();
        //si la letra es menor a 1 no se añadirá a la lista
        if(inputValue.trim().length <= 1)return;
        // setCategorias(categorias=>[inputValue, ...categorias])
        //cada vez que se envíe una petición se limpiará el contenido del input
        onNewCategory(inputValue.trim());
        setinputValue('');
    }
  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
    
  )
}

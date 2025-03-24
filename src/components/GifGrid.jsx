// Este componente recibe una categoría y se encarga de:

// Hacer la petición a la API de Giphy (a través de getGifs).

// Guardar las imágenes en el estado (images).

// Renderizar una lista de <GifItem /> con los GIFs obtenidos.

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ categoria }) => {
    const { images, isLoading } = useFetchGifs(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            {/* si isLoading esta en tru pondra el cargando si no nada */}
            {isLoading && <h2>Cargando...</h2>} {/* Muestra un mensaje mientras carga */}

            <div className="card-grid">
                {images.map((image) => (
                    <GifItem 
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </>
    );
};


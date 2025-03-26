import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Nuevo estado para manejar la carga

    const getImages = async () => {
        const newImages = await getGifs(categoria);
        setImages(newImages);
        setIsLoading(false); // Cuando termina de cargar, lo ponemos en false
    }

    useEffect(() => {
        getImages();
    }, []); // Asegura que se ejecuta cuando cambia la categoría

    return {
        images,
        isLoading
    };
};


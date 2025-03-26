import {renderHook, waitFor} from '@testing-library/react'
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 
    
    test('debe de retornar un arreglo de imagenes y isLoading en false', async()=>{

        const {result} = renderHook (()=> useFetchGifs('One punch'));

        // Espera hasta que images.length > 0, lo que significa que el hook ha cargado imágenes.
        await waitFor(
        ()=> expect(result.current.images.length).toBeGreaterThan(0)
        
        );
        //Se extraen los valores de images y isLoading del hook después de que terminó la carga.
        const { images, isLoading}= result.current;

        //Se espera que images tenga al menos una imagen (length > 0).
        expect(images.length).toBeGreaterThan(0);
        //Se espera que isLoading sea false (porque ya terminó de cargar).
        expect(isLoading).toBeFalsy();

    })
 })
import {render, screen} from '@testing-library/react'
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs.js')

describe('Pruebas en <GifGrid/>', () => { 

    const categoria = 'One punch'
    
    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render(<GifGrid categoria={categoria}/>)
        expect (screen.getByText('Cargando...'));
        expect (screen.getByText(categoria));

     })

     test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => { 

        const gifs = [
            {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
                }
    ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid categoria={categoria}/>)

        expect (screen.getAllByRole('img').length).toBe(2);

      })
 })
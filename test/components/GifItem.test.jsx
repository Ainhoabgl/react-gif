import { render, screen } from '@testing-library/react'
import { GifItem } from "../../src/components/GifItem";

//Este código prueba que el componente se renderiza correctamente usando un "snapshot"
describe('Pruebas en <GifItem/>', () => { 
    const title="Goku" 
    const url="https://goku.com/gif.gif"

    // Primer test: Comprueba que el componente coincide con el snapshot.
    test('Debe de coincidir con el snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
     })

    //Segundo test: Verifica que la imagen tiene el src y alt correctos.
     test ('debe de mostrar la imagen con el URL Y el ALT indicado', ()=> {
        render (<GifItem title={title} url={url}/>);
        // screen.debug();
        // expect(screen.getByRole('img').src)
        // console.log(screen.getByRole('img').src).toBe(url);

        const {src, alt}= screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);

     })
     //Tercer test: Verifica que la imagen tenga un titulo
     test ('debe de mostrar el titulo en el componente', ()=> {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
     })

 })
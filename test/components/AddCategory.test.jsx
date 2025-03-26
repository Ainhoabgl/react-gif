import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory/>', () => { 
    
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={() => {}} />); // Renderizamos el componente

        const input = screen.getByRole('textbox'); // Obtenemos el input

        fireEvent.input(input, { target:{ value: 'Goku' } }); // Simulamos escribir 'Goku'

        expect(input.value).toBe('Goku'); // Verificamos que el input cambió
        // screen.debug();
    });

    test ('Debe de llamar onNewCategory si el input tiene un valor', ()=>{
        const inputValue = 'Goku';
        const onNewCategory = jest.fn();

        render (<AddCategory onNewCategory={onNewCategory} />); // Renderizamos el componente

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target:{ value: inputValue } }); // Simulamos escribir 'Goku'
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar al onNewCategory si el input está vacío ', () => { 

        const onNewCategory = jest.fn();

        render (<AddCategory onNewCategory={onNewCategory} />); // Renderizamos el componente

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalledTimes();

     })
});

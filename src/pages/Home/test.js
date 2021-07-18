import { screen, render } from '@testing-library/react';
import Home from '.';

describe('Home', () => {
    test('it shows page header', () => {
        render(<Home />)
        expect(screen.getAllByRole('heading')[0].textContent).toContain('Hello World!');
    })

    test('it renders a profile image', () => {
        render(<Home />)
        const img = screen.queryByRole('img');
        expect(img).toBeInTheDocument();
    });
})
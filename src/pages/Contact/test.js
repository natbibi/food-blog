import { screen, render } from '@testing-library/react';
import Contact from '.';

describe('Home', () => {
    beforeEach(() => {
        render(<Contact />)
    })

    test('it shows page header', () => {
        expect(screen.getAllByRole('heading')[0].textContent).toContain('If you would like to get in touch, please leave a message and I will reply soon!');
    })

    test('it shows a contact form', () => {
        const form = screen.getByRole('form', { name: "email-form" })
        expect(form).toBeInTheDocument();
    })
})
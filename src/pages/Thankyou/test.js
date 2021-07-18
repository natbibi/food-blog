import { screen, render } from '@testing-library/react';
import Thankyou from '.';

describe('Thankyou', () => {
    test('it shows page header', () => {
        render(<Thankyou />)
        expect(screen.getAllByRole('heading')[0].textContent).toContain('Thank you for your message. I will reply soon!');
    })
})
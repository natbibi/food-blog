import { screen, render } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import EatOut from '.';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-router-dom');

describe('EatOut', () => {
    beforeEach(() => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <EatOut />
            </Router>
        );
        // useParams.mockReturnValue({
        //     id: () => { },
        // })
    })


    test('it shows page header', () => {
        expect(screen.getAllByRole('heading')[0].textContent).toContain('My Eating Adventures');
        // expect(screen.find('div').exists()).toBeTruthy()

    })
})

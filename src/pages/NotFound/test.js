import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '.';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

describe('NotFound', () => {
    test('it renders', () => {
    const history = createMemoryHistory();

    render(
        <Router history={history}>
            <NotFound />
        </Router>
    );

    expect(screen.getByText(/Oops/i)).toBeInTheDocument()
    });
})
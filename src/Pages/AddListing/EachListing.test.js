import React from 'react';
import { render } from '@testing-library/react';
import { waitForDomChange } from '@testing-library/react';
import { StateProvider } from '../../context';
import EachListing from './EachListing';
import { MemoryRouter, Route } from 'react-router';

test('renders Add Listing message', async () => {
    const message = 'Add Listing';
    const { getByTestId } = render(
        <MemoryRouter initialEntries={['/addListing/RLlDWHh7hR']}>
            <Route path="/addListing/:id">
                <StateProvider>
                    <EachListing />
                </StateProvider>
            </Route>
        </MemoryRouter>
    );

    const object = getByTestId('display');
    expect(object.textContent).toBe(message);
});

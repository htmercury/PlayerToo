import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StateProvider } from '../../context';
import EachListing from './EachListing';
import { MemoryRouter, Route } from 'react-router';

test('renders Add Listing message', async () => {
    const message = 'Add Listing';
    const Add = jest.fn();
    const { getByTestId } = render(
        <MemoryRouter initialEntries={['/addListing/RLlDWHh7hR']}>
            <Route path="/addListing/:id">
                <StateProvider>
                    <EachListing onClick={Add} />
                </StateProvider>
            </Route>
        </MemoryRouter>
    );

    const object = getByTestId('display');
    expect(object.textContent).toBe(message);


    const target = getByTestId('button');
    fireEvent.click(target);
    expect(Add.mock.calls.length).toEqual(1);
});

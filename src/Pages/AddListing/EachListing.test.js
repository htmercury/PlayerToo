import React from 'react';
import { render } from '@testing-library/react';
import { StateProvider } from '../../context';
import EachListing from './EachListing';

test('renders Add Listing message', () => {
    const message = 'Add Listing';
    const { getByTestId } = render(
        <StateProvider>
            <EachListing />
        </StateProvider>, {
            route: '/addListing/1'
        }
    );
    const object = getByTestId('display');
    expect(object.textContent).toBe(message);
});

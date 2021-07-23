/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { act, render, screen } from '@testing-library/react'
import ItemList from './ItemList';
import MockIntersectionObserver from '../../mocks/MockIntersectionObserver';

describe('<ItemList />', () => {
    beforeEach(async ()=> {
        global.IntersectionObserver = MockIntersectionObserver;

        await act(async ()=>{
            await render(<ItemList/>)
        })
    })

    test('renders item container', () => {
        const itemContainer = screen.getByTestId('item-container');

        expect(itemContainer).toBeDefined();
    })

    test('renders items', () => {
        const items = screen.findAllByTestId('item-container');

        expect(items).toBeDefined();
    })
})

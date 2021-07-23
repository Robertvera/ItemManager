import React from 'react';
import { act, render, screen } from '@testing-library/react'
import Home from './Home';
import MockIntersectionObserver from '../../mocks/MockIntersectionObserver';


describe('<Home />', () => {
    beforeEach(async () => {
        global.IntersectionObserver = MockIntersectionObserver;

        await act(async ()=>{
            await render(<Home />)
        })
    })

    test('renders home container', async () => {
        const homeContainer = await screen.findByTestId('home-container')
        expect(homeContainer).toBeDefined();
    })

    test('renders filter and item list', async () => {
        const homeContainer = await screen.findByTestId('home-container')
        const filterContainer = homeContainer.querySelector('.filter__container');
        const itemContainer = await screen.getByTestId('item-container');
        
        expect(filterContainer && itemContainer).toBeDefined();
    })

    test('renders modal container', () => {
        const modalContainer = screen.getByTestId('item-container');
        
        expect(modalContainer).toBeDefined();
    })
})

import React from 'react';
import { render, RenderResult } from '@testing-library/react'
import Filter from './Filter';

describe('<Filter />', () => {
    let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

    beforeEach(() => {
        component = render(<Filter />)
    })

    test('renders filters container', () => {
        const filterContainer = component.container.querySelector('.filter__container');
        expect(filterContainer).toBeDefined();
    })

    test('renders search bar, sorting and ordering', () => {
        const searchBarContainer = component.getByLabelText('search-home');
        const sortingContainer = component.container.querySelector('.sorting__container');
        const orderingContainer = component.container.querySelector('.ordering__container');
        
        expect(searchBarContainer && sortingContainer && orderingContainer).toBeDefined();
    })
})

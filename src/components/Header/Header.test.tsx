import React from 'react';
import { render, RenderResult } from '@testing-library/react'
import Header from './Header';

describe('<Header />', () => {
    let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

    beforeEach(() => {
        component = render(<Header />)
    })

    test('renders header', () => {
        const header = component.getByText(/Item Manager/i);
        expect(header).toBeDefined();
    })
})

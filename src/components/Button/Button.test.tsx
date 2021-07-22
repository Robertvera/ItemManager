import React from 'react';
import { render, RenderResult } from '@testing-library/react'
import Button from './Button';
import AppContext from '../../storage/app'

describe('<Button />', () => {
    let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;
    let children: string;
    let id;

    beforeEach(() => {
        children = 'Test Button';
        id = 'testing-button';

        component = render(<AppContext><Button id={id} action={undefined}>{children}</Button></AppContext>)
    })

    test('render content', () => {
        expect(component.container).toHaveTextContent(children);
    })

    test('default modifiers translates in correct classNames', () => {
        const button = component.container.querySelector('button');

        const expectedButtonClassNames = 'btn btn--primary btn--not-floating btn--rectangle';
        const actualButtonClassNames = button?.className;

        expect(actualButtonClassNames).toEqual(expectedButtonClassNames);
    })
})

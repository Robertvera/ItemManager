import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react'
import Button from './Button';

describe('<Button />', () => {
    let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;
    let children: string;
    let id;
    let mockHandler: jest.Mock<any, any> | ((ev: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;

    beforeEach(() => {
        children = 'Test Button';
        id = 'testing-button';
        mockHandler = jest.fn();

        component = render(<Button id={id} onClick={mockHandler}>{children}</Button>)
    })

    test('render content', ()=> {
        expect(component.container).toHaveTextContent(children);
    })

    test('clicking the button calls event handler once', () => {
        const button = component.getByLabelText('button');
        fireEvent.click(button);

        expect(mockHandler).toHaveBeenCalled();
    })

    test('default modifiers translates in correct classNames', () => {
        const button = component.container.querySelector('button');

        const expectedButtonClassNames = 'btn btn--primary btn--not-floating btn--rectangle';
        const actualButtonClassNames = button?.className;

        expect(actualButtonClassNames).toEqual(expectedButtonClassNames);
    })
})

import React from 'react';
import { render } from '@testing-library/react'
import ErrorScreen from './ErrorScreen';

describe('<ErrorScreen />', () => {
    test('render content', ()=> {
        const error = {
            name: 'test',
            message: 'No network connection :('
        };

        const component = render(<ErrorScreen error={error} />);
        expect(component.container).toHaveTextContent(error.message);
    })
})

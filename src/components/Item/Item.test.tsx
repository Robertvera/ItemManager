/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { render } from '@testing-library/react'
import Item from './Item';
import MockIntersectionObserver from '../../mocks/MockIntersectionObserver';

describe('<Item />', () => {
    type propsType = {
        title:string;
        description:string;
        price:string;
        email:string;
        image:string;
    }

    let props: propsType

    beforeEach(()=> {
        props = {
            title: 'Item test',
            description: 'Some cool stuff',
            price: '20',
            email: 'tatata@test.com',
            image: 'https://cdn.pixabay.com/photo/2018/01/05/00/20/test-image-3061864_960_720.png'
        }

        global.IntersectionObserver = MockIntersectionObserver;
    })

    test('renders item full layout', () => {
        const { title, description, price, email, image } = props;
        const component = render(<Item title={title} description={description} price={price} email={email} image={image}/>)

        const item = component.getByTestId('item-element');
        const renderedTitle = item.querySelector('h1')?.textContent;
        const renderedPrice = item.querySelector('.item-price')?.textContent;
        const renderedDescription = item.querySelector('.item-description')?.textContent;
        const renderedEmail = item.querySelector('.item-email')?.textContent;

        expect(item).toBeDefined();
        expect(renderedTitle).toEqual(title);
        expect(renderedPrice).toEqual(`${price} €`);
        expect(renderedDescription).toEqual(description);
        expect(renderedEmail).toEqual(`@: ${email}`);
    })

    test('renders item pill layout', () => {
        const { title, image } = props;
        const component = render(<Item title={title} image={image} layout='pill'/>)

        const item = component.getByTestId('item-element');
        const renderedTitle = item.querySelector('h1')?.textContent;
        const renderedImage = item.querySelector('img');
        const renderedPrice = item.querySelector('.item-price')?.textContent;
        const renderedDescription = item.querySelector('.item-description')?.textContent;
        const renderedEmail = item.querySelector('.item-email')?.textContent;

        expect(item).toBeDefined();
        expect(renderedTitle).toEqual(title);
        expect(renderedImage).toBeDefined();;
        expect(renderedPrice).not.toBeDefined();;
        expect(renderedDescription).not.toBeDefined();
        expect(renderedEmail).not.toBeDefined();
    })

    test('renders ❤️ icon when fav item', () => {
        const { title, description, price, email, image } = props;
        const component = render(<Item title={title} description={description} price={price} email={email} image={image} fav/>)

        const favIcon = component.getByLabelText('button-fav');

        expect(favIcon.textContent).toEqual('❤️');
    })

    test('renders 🤍 icon when not fav item', () => {
        const { title, description, price, email, image } = props;
        const component = render(<Item title={title} description={description} price={price} email={email} image={image}/>)

        const favIcon = component.getByLabelText('button-fav');

        expect(favIcon.textContent).toEqual('🤍');
    })
})

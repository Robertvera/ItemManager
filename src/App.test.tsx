import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom';
import { act } from 'react-dom/test-utils';
import MockIntersectionObserver from './mocks/MockIntersectionObserver';
import { mockFetch } from './mocks/MockFetch';
import App from './App';

// Aux functions
const getTitlesFromNodes = (items: HTMLElement[]) => {
    const resultTitleMap: string[] = []

    items.forEach((item) => {
        resultTitleMap.push(item.querySelector('h1')?.textContent || '')
    })
    
    return resultTitleMap;
}

const findItems = async () => screen.findAllByTestId(/item-element/i)


beforeEach(async() => {
    global.IntersectionObserver = MockIntersectionObserver;
    // @ts-expect-error
    global.fetch = mockFetch;

    await act(async ()=>{
        await render(<App/>)
    })
})

afterEach(() => {
    cleanup();
});

describe('Item listing, searching, ordering and sorting', () => {

    test('Five first elements sorted by Title and ordered ascending are rendered', async () => {
        const items = await findItems();
        const expectedTitleOrder = ['Barbacoa', 'Batidora', 'Bolso piel marca Hoss', 'Cascos', 'Clases de piano'];
        const resultTitleMap = getTitlesFromNodes(items);

        expect(items).toHaveLength(5);
        expect(resultTitleMap).toEqual(expectedTitleOrder);
    })

    test('Clicking Title pill sorts first 5 items by criteria', async () => {
        const pill = await screen.findByText('Title')
        fireEvent.click(pill);
        const items = await findItems();
        const expectedTitleOrder = ['Barbacoa', 'Batidora', 'Bolso piel marca Hoss', 'Cascos', 'Clases de piano'];
        const resultTitleMap = getTitlesFromNodes(items);

        expect(items).toHaveLength(5);
        expect(resultTitleMap).toEqual(expectedTitleOrder);
    })

    test('Clicking Description pill sorts first 5 items by criteria', async () => {
        const pill = await screen.findByText('Description')
        fireEvent.click(pill);
        const items = await findItems();
        const expectedTitleOrder = ['Piso en Clot', 'Barbacoa', 'Cascos', 'Coche antiguo americano', 'Polaroid 635'];
        const resultTitleMap = getTitlesFromNodes(items);

        expect(items).toHaveLength(5);
        expect(resultTitleMap).toEqual(expectedTitleOrder);
    })

    test('Clicking Price pill sorts first 5 items by criteria', async () => {
        const pill = await screen.findByText('Price')
        const order = await screen.findByText('🔻')
        fireEvent.click(pill);
        let items = await findItems();
        let expectedTitleOrder = ['Clases de piano', 'Material de oficina', 'Cascos', 'Polaroid 635', 'Sofa de piel auténtica'];
        let resultTitleMap = getTitlesFromNodes(items);

        expect(items).toHaveLength(5);
        expect(resultTitleMap).toEqual(expectedTitleOrder);

        fireEvent.click(order);
        items = await findItems();
        expectedTitleOrder = ['Piso en Clot', 'Coche antiguo americano', 'Vespa restaurada', 'iPhone 6S Oro', 'Macbook 13 pulgadas']
        resultTitleMap = getTitlesFromNodes(items);

        expect(resultTitleMap).toEqual(expectedTitleOrder);
    })

    test('Clicking Email pill sorts first 5 items by criteria', async () => {
        const pill = await screen.findByText('Email')
        fireEvent.click(pill);
        const items = await findItems();
        const expectedTitleOrder = ['Cámara réflex', 'Bolso piel marca Hoss', 'Barbacoa', 'Polaroid 635', 'Coche antiguo americano'];
        const resultTitleMap = getTitlesFromNodes(items);

        expect(items).toHaveLength(5);
        expect(resultTitleMap).toEqual(expectedTitleOrder);
    })

    test('Entering a search query resulting in 5 items', async () => {
        const input = await screen.findByLabelText(/search-home/i);
        fireEvent.change(input, {target: {value: 've'}});
        const items = await findItems();
        const expectedTitleOrder = ['Barbacoa', 'Bolso piel marca Hoss', 'Cámara réflex','iPhone 6S Oro','Lavadora'];
        const resultTitleMap = getTitlesFromNodes(items);

        expect(resultTitleMap).toEqual(expectedTitleOrder);
    })

    test('Entering a search query resulting 1 item', async () => {
        const input = await screen.findByLabelText(/search-home/i);
        fireEvent.change(input, {target: {value: 'coche'}});
        const items = await findItems();
        const expectedTitleOrder = ['Coche antiguo americano'];
        const resultTitleMap = getTitlesFromNodes(items);

        expect(items).toHaveLength(1);
        expect(resultTitleMap).toEqual(expectedTitleOrder);
    })

    test('Entering a search query resulting no items', async () => {
        const input = await screen.findByLabelText(/search-home/i);
        fireEvent.change(input, {target: {value: 'zzzz'}});
        const items = screen.queryAllByTestId(/item-element/i)

        expect(items).toHaveLength(0);
    })
})

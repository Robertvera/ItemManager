import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom';
import { act } from 'react-dom/test-utils';
import MockIntersectionObserver from './mocks/MockIntersectionObserver';
import { mockFetch } from './mocks/MockFetch';
import App from './App';

// Auxiliar functions
const getTitlesFromNodes = (items: HTMLElement[]) => {
    const resultTitleMap: string[] = []

    items.forEach((item) => {
        resultTitleMap.push(item.querySelector('h1')?.textContent || '')
    })
    
    return resultTitleMap;
}


beforeEach(async() => {
    global.IntersectionObserver = MockIntersectionObserver;
    // @ts-expect-error
    global.fetch = mockFetch;

    await act(async ()=>{
        await render(<App/>)
    })
})

afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = ''; 
});

describe('Item listing, ordering and sorting', () => {

    test('Five first elements sorted by Title and ordered ascending are rendered', async () => {
        const items = await screen.findAllByTestId(/item-element/i)
        const expectedTitleOrder = ['Barbacoa', 'Batidora', 'Bolso piel marca Hoss', 'Cascos', 'Clases de piano'];
        const resultTitleMap = getTitlesFromNodes(items);

        expect(items).toHaveLength(5);
        expect(resultTitleMap).toEqual(expectedTitleOrder);
        console.log(window.scrollY)
    })

    test('Ten elements are rendered after scrolling to trigger point', async () => {
        await fireEvent.scroll(window, { target: { scrollY: 300 } });

        setTimeout(() =>{
            console.log(window.scrollY)
        }, 2000)
    })
})

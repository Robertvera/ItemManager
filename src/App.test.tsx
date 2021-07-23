import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import MockIntersectionObserver from './mocks/MockIntersectionObserver';
import { mockFetch } from './mocks/MockFetch';
import App from './App';

// Aux functions
const getTitlesFromNodes = (items: HTMLElement[] | NodeListOf<Element>) => {
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

describe('Favorites module', () => {
    test('Modal is hidden when rendering', async () => {
        const modal = await screen.findByTestId(/modal-container/i);
        const modalClassList = modal.classList.toString();

        expect(modalClassList).toInclude('hidden');
        expect(modalClassList).not.toInclude('visible');
    })

    test('Clicking on floating button makes modal visible', async () => {
        const floatingButton = await screen.findByLabelText(/button-show-modal/i);
        fireEvent.click(floatingButton);

        const modal = await screen.findByTestId(/modal-container/i);
        const modalClassList = modal.classList.toString();

        expect(modalClassList).toInclude('visible');
        expect(modalClassList).not.toInclude('hidden');
    })

    test('Favorite list is empty if no favorites added', async () => {
        const modal = await screen.findByTestId(/modal-container/i);
        const itemsInModal = modal.querySelectorAll('.grid-item');

        expect(itemsInModal).toHaveLength(0);
    })

    test('Favorite list shows empty message when it has no items', async () => {
        const modal = await screen.findByTestId(/modal-container/i);
        const itemsInModal = modal.querySelectorAll('.grid-item');

        expect(itemsInModal).toHaveLength(0);

        const message = await screen.findByText(/show some love/i);

        expect(message).toBeDefined();
    })

    test('Clicking on heart icon puts first item to favorite list', async () => {
        const items = await findItems();
        const firstItem = items[0];
        const favButton= firstItem.querySelector('.item-fav');

        if (favButton) fireEvent.click(favButton);

        const modal = await screen.findByTestId(/modal-container/i);
        const itemsInModal = modal.querySelectorAll('.grid-item');

        const firstItemTitle = itemsInModal[0].querySelector('h1')?.textContent;
        const expectedFirstItemFavTitle = 'Barbacoa';

        expect(firstItemTitle).toBe(expectedFirstItemFavTitle);
    })

    test('Clicking on white heart icon removes item from favorite list', async () => {
        const items = await findItems();
        const firstItem = items[0];
        const favButton= firstItem.querySelector('.item-fav');

        if (favButton) fireEvent.click(favButton);

        let modal = await screen.findByTestId(/modal-container/i);
        let itemsInModal = modal.querySelectorAll('.grid-item');

        const itemUnfavButton = itemsInModal[0].querySelector('.item-fav');
        
        if (itemUnfavButton) fireEvent.click(itemUnfavButton);
        modal = await screen.findByTestId(/modal-container/i);
        itemsInModal = modal.querySelectorAll('.grid-item');

        expect(itemsInModal).toHaveLength(0);
    })

    test('Adding 2 favorites to favorite list and removing one leaves one item to favorite list', async () => {
        const items = await findItems();
        const firstItem = items[0];
        const secondItem = items[1];
        const favButton1= firstItem.querySelector('.item-fav');
        const favButton2= secondItem.querySelector('.item-fav');

        if (favButton1) fireEvent.click(favButton1);
        if (favButton2) fireEvent.click(favButton2);

        let modal = await screen.findByTestId(/modal-container/i);
        let itemsInModal = modal.querySelectorAll('.grid-item');

        let expectedTitles = ['Barbacoa', 'Batidora'];
        let resultTitles = getTitlesFromNodes(itemsInModal)

        expect(itemsInModal).toHaveLength(2);
        expect(resultTitles).toEqual(expectedTitles);

        const itemUnfavButton1 = itemsInModal[0].querySelector('.item-fav');
        
        if (itemUnfavButton1) fireEvent.click(itemUnfavButton1);
        modal = await screen.findByTestId(/modal-container/i);
        itemsInModal = modal.querySelectorAll('.grid-item');
        expectedTitles = ['Batidora'];
        resultTitles = getTitlesFromNodes(itemsInModal)

        expect(itemsInModal).toHaveLength(1);
        expect(resultTitles).toEqual(expectedTitles);
    })

    test('Clicking on closing button makes modal hidden', async () => {
        const floatingButton = await screen.findByLabelText(/button-show-modal/i);
        fireEvent.click(floatingButton);

        let modal = await screen.findByTestId(/modal-container/i);
        let modalClassList = modal.classList.toString();

        expect(modalClassList).toInclude('visible');
        expect(modalClassList).not.toInclude('hidden');

        const closingButton = await screen.findByLabelText(/button-hide-modal/i);
        fireEvent.click(closingButton);

        modal = await screen.findByTestId(/modal-container/i);
        modalClassList = modal.classList.toString();

        expect(modalClassList).toInclude('hidden');
        expect(modalClassList).not.toInclude('visible');
    })
})

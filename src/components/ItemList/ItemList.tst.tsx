// import React from 'react';
// import { fireEvent, render } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom';
// import { act } from 'react-dom/test-utils';
// import AppContext from '../../storage/app';
// import ItemContext from '../../storage/items';
// import SearchBar from '../SearchBar/SearchBar';
// import ItemList from "./ItemList";
// import MockIntersectionObserver from '../../mocks/MockIntersectionObserver';
// import itemsDataset from '../../mocks/ItemsDataset';

// describe('searchString', () => {
//     // const mockItemValues = {
//     //     paginatedItems: itemsDataset,
//     //     loader: null
//     // }

//     beforeEach(() =>{
//         window.IntersectionObserver = MockIntersectionObserver;
//     })

//     test.only('sets searchString on changing an input', async () =>{
//         const wrapper = render(<AppContext><><SearchBar /><ItemList items={itemsDataset} /></ItemContext></></AppContext>)

//         const input = wrapper.getByPlaceholderText(/search/) as HTMLInputElement;

//         console.log(prettyDOM(input));

//         await act(async () => { 
//             await fireEvent.change(input, {target: {value: 'coche'}})
//         })

//         const items = wrapper.container.querySelectorAll('.grid-item');

//         // console.log(prettyDOM(items))

//         expect(items).toHaveLength(1);
//     })
// })
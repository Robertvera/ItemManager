import React, { RefObject, useCallback } from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react'
import Home from './Home';

describe('<Home />', () => {
    let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;
    let items: Array<Item>;
    let sortBy: string;
    let setSearchString: React.Dispatch<React.SetStateAction<string>>;
    let setFavSearchString: React.Dispatch<React.SetStateAction<string>>;
    let setSortBy: React.Dispatch<React.SetStateAction<string>>;
    let setOrderBy: React.Dispatch<React.SetStateAction<string>>;
    let setModalVisibility: React.Dispatch<React.SetStateAction<string>>;
    let modalVisibility: string;
    let favorites: Array<Item>;
    let setFavorites: React.Dispatch<React.SetStateAction<Item[]>>;
    let filteredFavs: Array<Item>;


    beforeEach(() => {
        items = [
            {
                title: 'item 1',
                description: 'description 1' ,
                price: '20',
                email: 'item1@test.com',
                image: 'item1.jpg',
                layout: 'pill',
                fav: true
            }, {
                title: 'item 2',
                description: 'description 2',
                price: '20',
                email: 'item1@test.com',
                image: 'item1.jpg',
                layout: 'pill',
                fav: true
            }, {
                title: 'item 3',
                description: 'description 3' ,
                price: '20',
                email: 'item3@test.com',
                image: 'item3.jpg',
                layout: 'pill',
                fav: true
            }];
        sortBy = 'ascending';
        setSearchString = jest.fn();
        setFavSearchString = jest.fn();
        setSortBy = jest.fn();
        setOrderBy = jest.fn();
        setModalVisibility = jest.fn();
        modalVisibility = 'hidden';
        favorites = [];
        setFavorites = jest.fn();
        filteredFavs = [];

        component = render(
            <Home 
            items={items} 
            sortBy={sortBy} 
            setSearchString={setSearchString} 
            setFavSearchString={setFavSearchString} 
            setSortBy={setSortBy} 
            setOrderBy={setOrderBy} 
            setModalVisibility={setModalVisibility} 
            modalVisibility={modalVisibility} 
            favorites={favorites} 
            setFavorites={setFavorites} 
            filteredFavs={filteredFavs} 
            />)
    })

    test('render content', ()=> {
        const input = component.getByPlaceholderText(/search/i);
        expect(input).toBeDefined();
    })
})

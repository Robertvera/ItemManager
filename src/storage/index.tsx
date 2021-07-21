import React, { useState, ReactChild, createContext, ChangeEvent, MouseEvent } from 'react';
import useItems from '../hooks/useItems';
import useFavs from '../hooks/useFavs';
import { AppContextState } from '../types';

const contextDefaultValues: AppContextState = {
    searchString: '',
    updateSearchString: () => {},
    sortBy: 'Title',
    updateSortBy: () => {},
    updateOrderBy: () => {},
    buttonAction: () => {},
    modalVisibility: 'hidden',
    filterFavsResults: [],
    favorites: [],
    updateFavorites: () => {}
}

export const Context = createContext<AppContextState>(contextDefaultValues);

type AppContextProps = {
    children: ReactChild;
}

const AppContext = ({ children }:AppContextProps) => {
    const { items } = useItems();

    const [ searchString, setSearchString ] = useState('');
    const [ sortBy, setSortBy ] = useState('Title');
    const [ favSearchString, setFavSearchString ] = useState('');
    const [ orderBy, setOrderBy ] = useState('ascending');
    const [ modalVisibility, setModalVisibility ] = useState('hidden');
    const { filterFavsResults, favorites, updateFavorites } = useFavs([], favSearchString);

    const updateSearchString = (event:ChangeEvent<HTMLInputElement>, type: string) => {
        event.preventDefault();

        switch(type) {
            case 'home':
                setSearchString(event.target.value)
                break;
            case 'fav':
                setFavSearchString(event.target.value)
                break;
            default:
                setSearchString(event.target.value)
        }
    }

    const updateSortBy = (event:MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setSortBy(event.target?.firstChild?.textContent)
    }

    const updateOrderBy = (event:MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setOrderBy(event.target?.dataset.order)
    }

    const buttonAction = (event:MouseEvent<HTMLElement>, action: string|undefined) => {
        event.preventDefault();

        switch(action) {
            case 'show-modal':
                setModalVisibility('visible')
                break;
            case 'hide-modal':
                setModalVisibility('hidden')
                break;
            default:
                break;
        }
    }

    return (
        <Context.Provider 
        value={{ 
            searchString,
            updateSearchString,
            sortBy,
            updateSortBy,
            updateOrderBy,
            buttonAction,
            modalVisibility,
            filterFavsResults,
            favorites,
            updateFavorites 
        }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;
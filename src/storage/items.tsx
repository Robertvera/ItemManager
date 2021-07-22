import React, { useState, ReactChild, createContext, useContext, useEffect, useRef } from 'react';
import useFilterItems from '../hooks/useFilterItems';
import usePagination from '../hooks/usePagination';
import useItems from '../hooks/useItems';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Context as AppContext} from "./app";
import { ItemContextState } from '../types';

const contextDefaultValues: ItemContextState = {
    paginatedItems: [],
    loader: null
}

export const Context = createContext<ItemContextState>(contextDefaultValues);

type ItemContextProps = {
    children: ReactChild;
}

const ItemContext = ({ children }:ItemContextProps) =>{
    const { searchString, sortBy, orderBy } = useContext(AppContext);
    const { items, isLoading } = useItems();
    const [ page, setPage ] = useState(1);
    const { filterResults } = useFilterItems(items?.items, searchString, sortBy, orderBy, setPage);
    const { paginatedItems } = usePagination(filterResults, page);
    const loader = useRef<HTMLDivElement>(null);
    const { observe, isIntersecting } = useIntersectionObserver();

    useEffect(() => {
        if (isIntersecting) setPage((prev) => prev + 1);
    }, [isIntersecting])

    useEffect(() => {
        observe(loader.current);
    }, [isLoading])

    return (
        <Context.Provider 
        value={{ paginatedItems, loader }}>
            {children}
        </Context.Provider>
    )
}

export default ItemContext;
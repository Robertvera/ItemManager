import React, { useState, ReactChild, createContext, useContext, useEffect, useRef, useCallback } from 'react';
import useFilterItems from '../hooks/useFilterItems';
import usePagination from '../hooks/usePagination';
import useItems from '../hooks/useItems';
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

const ItemContext = ({ children }:ItemContextProps) => {
    const { searchString, sortBy, orderBy } = useContext(AppContext);
    const { items, isLoading } = useItems();
    const [page, setPage] = useState(1);
    const { filterResults } = useFilterItems(items?.items, searchString, sortBy, orderBy, setPage);
    const { paginatedItems } = usePagination(filterResults, page);
    const loader = useRef<HTMLDivElement>(null);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
        root: null,
        rootMargin: "20px",
        threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver, isLoading]);

    return (
        <Context.Provider 
        value={{ paginatedItems, loader }}>
            {children}
        </Context.Provider>
    )
}

export default ItemContext;
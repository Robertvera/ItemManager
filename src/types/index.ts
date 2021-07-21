import { ChangeEvent, MouseEvent, RefObject } from "react";

export type AppContextState = {
    searchString: string;
    updateSearchString: (e:ChangeEvent<HTMLInputElement>, type:string) => void;
    sortBy: string;
    orderBy: string;
    updateSortBy: (e:MouseEvent<HTMLElement>) => void;
    updateOrderBy: (e:MouseEvent<HTMLElement>) => void;
    buttonAction: (e:MouseEvent<HTMLElement>, action:string|undefined) => void;
    modalVisibility: string;
    filterFavsResults: Array<Item>;
    favorites: Array<Item>;
    updateFavorites: (item:Item) => void;
};

export type ItemContextState = {
    paginatedItems: Array<Item>,
    loader: RefObject<HTMLDivElement> | null
};
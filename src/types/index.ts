import { ChangeEvent, MouseEvent } from "react";

export type AppContextState = {
    searchString: string;
    updateSearchString: (e:ChangeEvent<HTMLInputElement>, type:string) => void;
    sortBy: string;
    updateSortBy: (e:MouseEvent<HTMLElement>) => void;
    updateOrderBy: (e:MouseEvent<HTMLElement>) => void;
    buttonAction: (e:MouseEvent<HTMLElement>, action:string|undefined) => void;
    modalVisibility: string;
    filterFavsResults: Array<Item>;
    favorites: Array<Item>;
    updateFavorites: (item:Item) => void;
};
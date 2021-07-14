import { useState } from 'react';
import useFetch from './useFetch';
import getItems from '../services/itemsService';

// interface Item {
//     title: string;
//     description: string;
//     price: string;
//     email: string;
//     image: string;
// }

const useItems = () => {
    const [items, setItems] = useState<Item[] | null>(null);

    const { isLoading, error } = useFetch(getItems, setItems);

    return { isLoading, error, items };
}

export default useItems;
import { useState } from 'react';
import useFetch from './useFetch';
import getItems from '../services/itemsService';

type ItemsObj = {
    items: Item[]
}

const useItems = () => {
    const [items, setItems] = useState<ItemsObj>({ items: [] });

    const { isLoading, error } = useFetch(getItems, setItems);

    return { isLoading, error, items };
}

export default useItems;
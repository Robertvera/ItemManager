import { useState } from 'react';
import useFetch from './useFetch';
import getItems from '../services/itemsService';

const useItems = () => {
    const [items, setItems] = useState<Item[] | null>(null);

    const { isLoading, error } = useFetch(getItems, setItems);

    return { isLoading, error, items };
}

export default useItems;
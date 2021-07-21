import {  useEffect, useState } from 'react';
import isFav from '../utils/favorites';

const useFavs = (favs: Array<Item>, searchString: string) => {
    const [ favorites, setFavorites ] = useState<Item[]>([]);
    const [filterFavsResults, setFilterFavsResults] = useState<Item[]>(favorites)

    const updateFavorites = (item: Item) => {
        if (isFav(item.title, favorites)) {
            setFavorites(favorites.filter((fav) => fav.title !== item.title));
        } else {
            setFavorites(prevFavs => ([ ...prevFavs, ...[item] ]));
        }
    }

    useEffect(() => {
        const results = favorites?.filter((fav: Item) => fav.title.toLowerCase().includes(searchString.toLowerCase()))

        setFilterFavsResults(results);
      }, [favorites, searchString])

      return { favorites, filterFavsResults, updateFavorites }
}

export default useFavs;


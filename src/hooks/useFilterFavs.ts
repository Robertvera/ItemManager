import { useEffect, useState } from 'react';

const useFilterFavs = (favs: Array<Item>, searchString: string) => {
    const [filterFavsResults, setFilterFavsResults] = useState(favs)

    useEffect(() => {
        const results = favs?.filter((fav: Item) => fav.title.toLowerCase().includes(searchString.toLowerCase()))

        setFilterFavsResults(results);
      }, [favs, searchString])

      return { filterFavsResults }
}

export default useFilterFavs;
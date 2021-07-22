import { useEffect, useState } from 'react';
import { FILTER_CRITERIA } from '../constants';
import sortItems from '../utils/sorting';

const useFilterItems = (items: Array<Item>, searchString: string, sortBy: string, order:string, setPage:React.Dispatch<React.SetStateAction<number>>) => {
    const [filterResults, setFilterResults] = useState(items)

    useEffect(() => {
        setPage(1);
        const results = items?.filter((item: Item) => {
        const itemCriteriaDetails:Array<string> = [];
    
          FILTER_CRITERIA.forEach((criteria) => {
            // @ts-expect-error
            itemCriteriaDetails.push(item[criteria].toLowerCase());
          });
    
          return itemCriteriaDetails.join('').includes(searchString.toLowerCase());
        })

        if (results) {
            sortItems(results, order, sortBy);

            setFilterResults(results);
        }
      }, [items, searchString, sortBy, order])

      return { filterResults }
}

export default useFilterItems;
import { useEffect, useState } from 'react';
import { FILTER_CRITERIA } from '../constants';
import sortItems from '../utils/sorting';

const useFilter = (items: Array<Item>, searchString: string, sortBy: string, order:string) => {
    const [filterResults, setFilterResults] = useState(items)

    useEffect(() => {
        const results = items?.filter((item: Item) => {
        const itemCriteriaDetails:Array<string> = [];
    
          FILTER_CRITERIA.forEach((criteria) => {
            itemCriteriaDetails.push(item[criteria].toLowerCase());
          });
    
          return itemCriteriaDetails.join('').includes(searchString.toLowerCase());
        })

        if (results) {
            sortItems(results, order, sortBy)
        }

        setFilterResults(results);
      }, [searchString, sortBy, order])

      return { filterResults }
}

export default useFilter;
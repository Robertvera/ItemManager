import { useEffect, useRef, useState } from 'react';
import { FILTER_CRITERIA } from '../constants';
import sortItems from '../utils/sorting';

const useFilterItems = (items: Array<Item>, searchString: string, sortBy: string, order:string, page:number) => {
    const [filterResults, setFilterResults] = useState(items)

    const previousPageValue = useRef(page);

    useEffect(() => {
        const results = items?.filter((item: Item) => {
        const itemCriteriaDetails:Array<string> = [];
    
          FILTER_CRITERIA.forEach((criteria) => {
            itemCriteriaDetails.push(item[criteria].toLowerCase());
          });
    
          return itemCriteriaDetails.join('').includes(searchString.toLowerCase());
        })

        if (results) {
            sortItems(results, order, sortBy);

            if (results.length > 5 && page === 1) {
              setFilterResults(results.slice(0, 5));
            } else {
              setFilterResults(results);
            }
        }

        if (results && previousPageValue.current !== page) {
          const ref = filterResults && filterResults.length;
          setFilterResults((prevResults) => [...prevResults, ...results.slice(ref, ref+5) ])
        }
      }, [items, searchString, sortBy, order, page])

      // useEffect(() => {
      //   if (filterResults) {
      //     const ref = filterResults.length;
  
      //     setFilterResults((prevResults) => [...prevResults, ...items.slice(ref, ref+5) ])
      //   }
      // }, [page])

      return { filterResults }
}

export default useFilterItems;
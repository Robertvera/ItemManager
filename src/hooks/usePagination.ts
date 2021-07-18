import { useEffect, useRef, useState } from 'react';

const usePagination = (filteredItems: Array<Item>, page:number) => {
    const [paginatedResults, setPaginatedResults] = useState(filteredItems)

    const previousPageValue = useRef(page);

    useEffect(() => {
        if (filteredItems) {
            if (previousPageValue.current !== page) {
                const ref = paginatedResults && paginatedResults.length;
    
                setPaginatedResults((prevResults) => [...prevResults, ...filteredItems.slice(ref, ref+5) ])
            } else {
                setPaginatedResults(filteredItems.slice(0, 5));
            }
        }

      }, [filteredItems, page])

      return { paginatedResults }
}

export default usePagination;
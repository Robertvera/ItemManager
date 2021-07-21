import { useEffect, useRef, useState } from 'react';

const usePagination = (filteredItems: Array<Item>, page:number) => {
    const [paginatedItems, setpaginatedItems] = useState(filteredItems)

    const previousPageValue = useRef(page);

    useEffect(() => {
        if (filteredItems) {
            if (previousPageValue.current !== page) {
                const ref = paginatedItems && paginatedItems.length;
    
                setpaginatedItems((prevResults) => [...prevResults, ...filteredItems.slice(ref, ref+5) ])
            } else {
                setpaginatedItems(filteredItems.slice(0, 5));
            }
        }

      }, [filteredItems, page])

      return { paginatedItems }
}

export default usePagination;
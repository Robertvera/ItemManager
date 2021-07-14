const sortItems = (items:Array<Item>, order:string, criteria:string) => {
    if (criteria === 'Price') {
        if (order === 'ascending') {
            return items.sort( (a:Item, b:Item) => +a.price - +b.price)
        }
        return items.sort( (a:Item, b:Item) => +a.price - +b.price).reverse();
    }

    if (order === 'ascending') {
        return items.sort( (a:Item, b:Item) => a[criteria.toLowerCase()] - b[criteria.toLowerCase()]);
    }

    return items.sort( (a:Item, b:Item) => a[criteria.toLowerCase()] - b[criteria.toLowerCase()]).reverse();
}

export default sortItems;
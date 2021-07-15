const sortItems = (items:Array<Item>, order:string, criteria:string) => {
    if (criteria === 'Price') {
        if (order === 'ascending') {
            return items.sort( (a:Item, b:Item) => +a.price - +b.price)
        }
        return items.sort( (a:Item, b:Item) => +a.price - +b.price).reverse();
    }

    if (order === 'ascending') {
        return items.sort( (a:Item, b:Item) => a[criteria.toLowerCase()].toLowerCase() > b[criteria.toLowerCase()].toLowerCase() ? 1 : -1);
    }

    return items.sort( (a:Item, b:Item) => a[criteria.toLowerCase()].toLowerCase() < b[criteria.toLowerCase()].toLowerCase() ? 1 : -1);
}

export default sortItems;
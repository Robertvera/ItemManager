import React from 'react';
import './styles.scss';
import Item from '../Item/Item';

type ItemListProps = {
    items: Array<any>;
    favorites: Array<Item>;
    setFavorites: React.Dispatch<React.SetStateAction<Array<Item>>>;
}

const ItemList = ({ items, favorites, setFavorites }: ItemListProps) =>{
    let key = 0
    const isFav = (title: string) => {
        const favTitles = favorites.map((fav) => fav.title);

        return favTitles.includes(title)
    }

    const handleFav = (item: Item) => {
        if (isFav(item.title)) {
            setFavorites(favorites.filter((fav) => fav.title !== item.title));
        } else {
            setFavorites(prevFavs => ([ ...prevFavs, ...[item] ]));
        }
    }

     return (
        <div className='flex-container'>
           {
               items && items.map((item) => {
                    const { title, description, price, email, image } = item;
                    return <Item
                            key={key++}
                            title={title}
                            description={description}
                            price={price}
                            email={email}
                            image={image}
                            fav={isFav(title)}
                            onClickFav={() => handleFav(item)}
                        />
               })
           }
        </div>
    )
}
 

export default ItemList;
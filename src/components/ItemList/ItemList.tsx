import React, {  useContext } from 'react';
import './styles.scss';
import isFav from '../../utils/favorites';
import Item from '../Item/Item';
import { Context as AppContext } from '../../storage/app';
import { Context as ItemContext } from '../../storage/items';

const ItemList = () =>{
    const { favorites, updateFavorites } = useContext(AppContext);
    const { paginatedItems, loader } = useContext(ItemContext);

    return (
        <>
            <div data-testid='item-container' className='item-container'>
            {
                paginatedItems && paginatedItems.map((item) => {
                        const { title, description, price, email, image } = item;
                        return <Item
                                key={title}
                                title={title}
                                description={description}
                                price={price}
                                email={email}
                                image={image}
                                fav={isFav(title, favorites)}
                                onClickFav={() => updateFavorites(item)}
                            />
                })
            }
            <div id='loader' ref={loader}/>
            </div>
        </>
    )
}
 

export default ItemList;
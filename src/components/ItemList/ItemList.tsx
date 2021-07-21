import React, { RefObject, useContext } from 'react';
import './styles.scss';
import isFav from '../../utils/favorites';
import Item from '../Item/Item';
import { Context } from '../../storage';

type ItemListProps = {
    items: Array<any>;
    loader?: RefObject<HTMLDivElement>;
}

const ItemList = ({ items, loader }: ItemListProps) =>{
    const { favorites, updateFavorites } = useContext(Context);

    return (
        <>
            <div className='item-container'>
            {
                items && items.map((item) => {
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
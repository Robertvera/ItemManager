import React from 'react';
import './styles.scss';
import Item from '../Item/Item';

type ItemListProps = {
    itemsArray: Array<any>;
}

const ItemList = ({ itemsArray }: ItemListProps) =>{
    let key = 0
     return (
        <div className='flex-container'>
           {
               itemsArray && itemsArray.map(({ title, description, price, email, image }) => <Item
                    key={key++}
                    title={title}
                    description={description}
                    price={price}
                    email={email} 
                    image={image} 
                />)
           }
        </div>
    )
}
 

export default ItemList;
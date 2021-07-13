import React from 'react';
import './styles.scss';
import Item from '../Item/Item';

type ItemListProps = {
    items: Array<any>;
}

const ItemList = ({ items }: ItemListProps) =>{
    let key = 0
     return (
        <div className='flex-container'>
           {
               items && items.map(({ title, description, price, email, image }) => <Item
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
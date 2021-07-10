import React from 'react';
import './styles.scss';

type ItemProps = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}

const Item = ({ title, description, price, email, image }: ItemProps) => (
    <div className='grid-item'>
        <img src={image} alt='random' />
        <div className='item-body'>
            <div className='item-header'>
                <h1>{title}</h1>
                <span>{price} €</span>
            </div>
            <p>{description}</p>
            <span>{email}</span>
        </div>
    </div>
)

export default Item;
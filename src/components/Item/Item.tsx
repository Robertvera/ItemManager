/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './styles.scss';

type ItemProps = Item & { onClickFav: (title: string) => void; }

const Item = ({ title, description, price, email, image, layout = 'full', fav = false, onClickFav = () => {} }: ItemProps) => {
    const isFullLayout = layout === 'full';

    return (
        <div className={`grid-item grid-item--${layout}`}>
            <img src={image} alt='random' />
            <div className='item-body'>
                <div className='item-header'>
                    <h1>{title}</h1>
                    <div onClick={onClickFav} className='item-fav' role='button'>
                        {fav ? <span>❤️</span> : <span>🤍</span> }
                        
                    </div>
                    {isFullLayout ? <span>{price} €</span> : null}
                </div>
                {isFullLayout ? <p>{description}</p> : null}
                {isFullLayout ? <span>{email}</span> : null}
            </div>
        </div>
    )
}

export default Item;
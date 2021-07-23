/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEvent } from 'react';
import './styles.scss';
import ClampLines from 'react-clamp-lines';
import LazyImage from '../LazyImage/LazyImage';

type ItemProps = Item & { fav?: boolean; onClickFav?: (event: MouseEvent<HTMLElement>) => void; }

const Item = ({ title, description = '', price, email, image, layout = 'full', fav = false, onClickFav = () => {} }: ItemProps) => {
    const isFullLayout = layout === 'full';

    return (
        <div data-testid='item-element' className={`grid-item grid-item--${layout}`}>
            <LazyImage src={image} alt={title} />
            <div className='item-body'>
                <div className='item-header'>
                    <h1>{title}</h1>
                    <div onClick={onClickFav} className='item-fav' role='button' aria-label='button-fav'>
                        {fav ? <span>❤️</span> : <span>🤍</span> }
                        
                    </div>
                    {isFullLayout ? <span className='item-price'>{price} €</span> : null}
                </div>
                <div className='item-description__container'>
                    {isFullLayout ? <ClampLines text={description}
                                                id='item-description'
                                                lines={3}
                                                ellipsis='...'
                                                buttons={false}
                                                className='item-description'
                                                innerElement='p' 
                                                /> 
                                    : null}
                </div>
                {isFullLayout ? <span className='item-email'>{`@: ${email}`}</span> : null}
            </div>
        </div>
    )
}

export default Item;
import React, { MouseEvent } from 'react';
import './styles.scss';

type OrderingBarProps = {
    setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}

const OrderingBar = ({ setOrderBy }: OrderingBarProps) => {

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setOrderBy(e.target?.dataset.order)
    }

    return (
        <div className='ordering__container'>
            <span data-order='ascending' onClick={handleClick}>🔺</span>
            <span data-order='descending' onClick={handleClick}>🔻</span>
        </div>
    );
}

export default OrderingBar;
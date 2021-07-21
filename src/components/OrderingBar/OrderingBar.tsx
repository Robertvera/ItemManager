/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { Context } from '../../storage';
import './styles.scss';

const OrderingBar = () => {

    const { updateOrderBy } = useContext(Context);

    return (
        <div className='ordering__container'>
            <span data-order='ascending' onClick={updateOrderBy}>🔺</span>
            <span data-order='descending' onClick={updateOrderBy}>🔻</span>
        </div>
    );
}

export default OrderingBar;
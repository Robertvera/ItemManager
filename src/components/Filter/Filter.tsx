import React from 'react';
import './styles.scss';
import SearchBar from '../SearchBar/SearchBar';
import SortingBar from '../SortingBar/SortingBar';
import OrderingBar from '../OrderingBar/OrderingBar';


const Filter = () => (
            <div className='filter__container'>
                <SearchBar />
                <SortingBar />
                <OrderingBar />
            </div>
    )

export default Filter;
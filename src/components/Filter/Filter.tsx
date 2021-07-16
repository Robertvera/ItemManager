import React from 'react';
import './styles.scss';
import SearchBar from '../SearchBar/SearchBar';
import SortingBar from '../SortingBar/SortingBar';
import OrderingBar from '../OrderingBar/OrderingBar';

type FilterProps = {
    sortBy: string;
    setSearchString: React.Dispatch<React.SetStateAction<string>>;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
    setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ sortBy, setSearchString, setSortBy, setOrderBy }: FilterProps) => (
            <div className='filter__container'>
                <SearchBar setSearchString={setSearchString} />
                <SortingBar sortBy={sortBy} setSortBy={setSortBy} />
                <OrderingBar setOrderBy={setOrderBy} />
            </div>
    )

export default Filter;
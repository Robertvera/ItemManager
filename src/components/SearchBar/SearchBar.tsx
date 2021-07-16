import React, { ChangeEvent, MouseEvent } from 'react';
import './styles.scss';
import { SORT_CRITERIA } from '../../constants';
import SortingPill from '../SortingPill/SortingPill';

type SearchBarProps = {
    sortBy: string;
    setSearchString: React.Dispatch<React.SetStateAction<string>>;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
    setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ sortBy, setSearchString, setSortBy, setOrderBy }: SearchBarProps) => {
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchString(e.target.value);
    }

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setOrderBy(e.target?.dataset.order)
    }

    return (
            <div className='filter__container'>
                <input 
                    type='search'
                    placeholder='Type to search...'
                    inputMode='search'
                    name='search'
                    onChange={handleChange}
                />
                <div className='sorting__container' >
                    <label>Sort by</label>
                    <div className='pills__container'>
                        {SORT_CRITERIA.map((criteria) => <SortingPill key={criteria} sortBy={sortBy} setSortBy={setSortBy}>{criteria}</SortingPill>)}
                    </div>
                </div>
                <div className='ordering__container'>
                    <span data-order='ascending' onClick={handleClick}>🔺</span>
                    <span data-order='descending' onClick={handleClick}>🔻</span>
                </div>
            </div>
    );
}

export default SearchBar;
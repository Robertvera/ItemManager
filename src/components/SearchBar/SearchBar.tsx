import React, { ChangeEvent } from 'react';
import './styles.scss';

import SortingPill from '../SortingPill/SortingPill';

type SearchBarProps = {
    setSearchString: React.Dispatch<React.SetStateAction<string>>;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearchString, setSortBy }: SearchBarProps) => {
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchString(e.target.value);
    }

    return (
            <div className='search-bar__container'>
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
                        <SortingPill setSortBy={setSortBy}>Title</SortingPill>
                        <SortingPill>Description</SortingPill>
                        <SortingPill>Price</SortingPill>
                        <SortingPill>Email</SortingPill>
                    </div>
                </div>
            </div>
    );
}

export default SearchBar;
import React, { useContext } from 'react';
import './styles.scss';
import { Context } from '../../storage/app';

type SearchBarProps = {
    type?: SearchBarVariants
}


const SearchBar = ({ type = 'home' }: SearchBarProps) => {
    const { updateSearchString } = useContext(Context);

    return (
        <input 
            type='search'
            aria-label={`search-${type}`}
            placeholder='Type to search...'
            inputMode='search'
            name='search'
            onChange={(e) => updateSearchString(e, type)}
        />
    );
}

export default SearchBar;
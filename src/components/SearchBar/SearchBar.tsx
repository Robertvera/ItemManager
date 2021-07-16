import React, { ChangeEvent } from 'react';
import './styles.scss';

type SearchBarProps = {
    setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearchString }: SearchBarProps) => {
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchString(e.target.value);
    }

    return (
        <input 
            type='search'
            placeholder='Type to search...'
            inputMode='search'
            name='search'
            onChange={handleChange}
        />
    );
}

export default SearchBar;
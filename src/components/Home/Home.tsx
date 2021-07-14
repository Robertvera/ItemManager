import React from 'react';
// import './styles.scss';
import ItemList from '../ItemList/ItemList';
import SearchBar from '../SearchBar/SearchBar';

type HomeProps = {
    items: Array<Item>;
    setSearchString: React.Dispatch<React.SetStateAction<string>>;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
    setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}

const Home = ({ items, setSearchString, setSortBy, setOrderBy }: HomeProps) => (
    <>
        <SearchBar setSearchString={setSearchString} setSortBy={setSortBy} setOrderBy={setOrderBy}/>
        <ItemList items={items} />
    </>
);

export default Home;
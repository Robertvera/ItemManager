import React from 'react';
// import './styles.scss';
import ItemList from '../ItemList/ItemList';
import SearchBar from '../SearchBar/SearchBar';

type HomeProps = {
    items: Array<ItemProps>;
    setSearchString: React.Dispatch<React.SetStateAction<string>>;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const Home = ({ items, setSearchString, setSortBy }: HomeProps) => (
    <>
        <SearchBar setSearchString={setSearchString} setSortBy={setSortBy}/>
        <ItemList items={items} />
    </>
);

export default Home;
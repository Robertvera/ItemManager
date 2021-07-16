import React from 'react';
import ItemList from '../ItemList/ItemList';
import SearchBar from '../SearchBar/SearchBar';
import Modal from '../Modal/Modal';

type HomeProps = {
    items: Array<Item>;
    sortBy: string;
    setSearchString: React.Dispatch<React.SetStateAction<string>>;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
    setOrderBy: React.Dispatch<React.SetStateAction<string>>;
    setModalVisibility: React.Dispatch<React.SetStateAction<string>>;
    modalVisibility: string;
    favorites: Array<Item>;
    setFavorites: React.Dispatch<React.SetStateAction<Array<Item>>>;
}

const Home = ({ items, sortBy, setSearchString, setSortBy, setOrderBy, setModalVisibility, modalVisibility, favorites, setFavorites }: HomeProps) => (
    <>
        <SearchBar setSearchString={setSearchString} sortBy={sortBy} setSortBy={setSortBy} setOrderBy={setOrderBy}/>
        <ItemList items={items} favorites={favorites} setFavorites={setFavorites}/>
        <Modal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} favorites={favorites} setFavorites={setFavorites}/>
    </>
);

export default Home;
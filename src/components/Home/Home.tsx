import React, { RefObject } from 'react';
import ItemList from '../ItemList/ItemList';
import Filter from '../Filter/Filter';
import Modal from '../Modal/Modal';

type HomeProps = {
    items: Array<Item>;
    sortBy: string;
    setSearchString: React.Dispatch<React.SetStateAction<string>>;
    setFavSearchString: React.Dispatch<React.SetStateAction<string>>;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
    setOrderBy: React.Dispatch<React.SetStateAction<string>>;
    setModalVisibility: React.Dispatch<React.SetStateAction<string>>;
    modalVisibility: string;
    favorites: Array<Item>;
    setFavorites: React.Dispatch<React.SetStateAction<Item[]>>;
    filteredFavs: Array<Item>;
    loader: RefObject<() => void>;
}

const Home = ({ items, sortBy, setSearchString, setFavSearchString, setSortBy, setOrderBy, setModalVisibility, modalVisibility, favorites, setFavorites, filteredFavs, loader }: HomeProps) => (
    <>
        <main className='home__container'>
            <Filter setSearchString={setSearchString} sortBy={sortBy} setSortBy={setSortBy} setOrderBy={setOrderBy}/>
            <ItemList items={items} favorites={favorites} setFavorites={setFavorites} loader={loader}/>
        </main>
        <Modal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} favorites={favorites} setFavorites={setFavorites} setFavSearchString={setFavSearchString} filteredFavs={filteredFavs}/>
    </>
);

export default Home;
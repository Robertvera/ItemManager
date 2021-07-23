import React from 'react';
import ItemList from '../ItemList/ItemList';
import Filter from '../Filter/Filter';
import Modal from '../Modal/Modal';
import ItemContext from '../../storage/items';

const Home = () => (
    <>
        <main data-testid='home-container' className='home__container'>
            <Filter />
            <ItemContext>
                <ItemList />
            </ItemContext>
        </main>
        <Modal />
    </>
);

export default Home;
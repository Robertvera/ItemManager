import React, { RefObject } from 'react';
import ItemList from '../ItemList/ItemList';
import Filter from '../Filter/Filter';
import Modal from '../Modal/Modal';

type HomeProps = {
    items: Array<Item>;
    loader?: RefObject<HTMLDivElement>;
}

const Home = ({ items, loader }: HomeProps) => (
    <>
        <main className='home__container'>
            <Filter />
            <ItemList
            items={items}
            loader={loader}/>
        </main>
        <Modal />
    </>
);

export default Home;
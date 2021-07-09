import React from 'react';
import './styles.scss';
import Header from '../Header/Header';
import FavListButton from '../FavListButton/FavListButton';

const Layout: React.FC<{}> = () => (
    <>
        <Header />
        <FavListButton />
    </>
);

export default Layout;
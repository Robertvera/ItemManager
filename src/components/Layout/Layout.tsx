import React, { ReactChild } from 'react';
import './styles.scss';
import Header from '../Header/Header';
import Button from '../Button/Button';

type LayoutProps = {
    children: ReactChild;
}

const Layout = ({ children }: LayoutProps) => (
    <div className='content'>
        <Header />
        {children}
        <Button position='floating' shape='round'>🥰</Button>
    </div>
);

export default Layout;
import React, { ReactChild, ReactElement } from 'react';
import './styles.scss';
import Header from '../Header/Header';
import Button from '../Button/Button';

type LayoutProps = {
    children: ReactChild;
    setModalVisibility?: React.Dispatch<React.SetStateAction<string>>;
}

const Layout = ({ children, setModalVisibility = () => {} }: LayoutProps) =>{
    const handleModal = (event: React.MouseEvent<ReactElement>) => {
        event.preventDefault();
    
        setModalVisibility('visible');
    }

    return (
        <div className='content'>
            <Header />
            {children}
            <Button onClick={handleModal} btnType='floating' shape='round' id='btn-favList'>🥰</Button>
        </div>
    );
} 

export default Layout;
import React from 'react';
import './styles.scss';

const Header: React.FC<{}> = () => (
  <header className='header'>
      <h1 className='header__brand'>
          Item Manager
      </h1>
  </header>
);

export default Header;
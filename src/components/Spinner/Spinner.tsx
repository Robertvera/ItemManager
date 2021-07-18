import React from 'react';
import './styles.scss';

import SpinnerIcon from '../../assets/icons/loading.svg';

const Spinner = () => (
  <div className='spinner__container'>
    <SpinnerIcon />
  </div>
);

export default Spinner;

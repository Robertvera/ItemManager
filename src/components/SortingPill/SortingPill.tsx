/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactChild, useContext } from 'react';
import './styles.scss';
import { Context } from '../../storage/app';

type SortingProps = {
    children: ReactChild;
}

const SortingPill = ({ children }: SortingProps) => {
    
    const { sortBy, updateSortBy } = useContext(Context);

    const isHighlighted = sortBy === children;

    return (
        <div className={`sorting-pill ${isHighlighted ? 'sorting-pill--active': ''}`} onClick={updateSortBy}>
            {children}
        </div>
    )
}

export default SortingPill;
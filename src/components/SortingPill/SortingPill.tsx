import React, { MouseEvent, ReactChild } from 'react';
import './styles.scss';

type SortingProps = {
    children: ReactChild;
    sortBy: string;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const SortingPill = ({ children, sortBy, setSortBy }: SortingProps) =>{
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();

        setSortBy(event.target?.firstChild?.textContent);
    }

    const isHighlighted = sortBy === children;

    return (
        <div className={`sorting-pill ${isHighlighted ? 'sorting-pill--active': ''}`} onClick={handleClick}>
            {children}
        </div>
)
}

export default SortingPill;
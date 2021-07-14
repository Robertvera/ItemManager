import React, { MouseEvent, ReactChild } from 'react';
import './styles.scss';

type SortingProps = {
    children: ReactChild;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const SortingPill = ({ children, setSortBy }: SortingProps) =>{
    const handleClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();

        setSortBy(event.target?.firstChild?.textContent);
    }

    return (
        <div className="sorting-pill" onClick={handleClick}>
            {children}
        </div>
)
}

export default SortingPill;
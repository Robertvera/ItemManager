import React from 'react';
import './styles.scss';
import { SORT_CRITERIA } from '../../constants';
import SortingPill from '../SortingPill/SortingPill';

type SortingBarProps = {
    sortBy: string;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
}

const SortingBar = ({ sortBy, setSortBy }: SortingBarProps) => (
    <div className='sorting__container' >
        <label>Sort by</label>
        <div className='pills__container'>
            {SORT_CRITERIA.map((criteria) => <SortingPill key={criteria} sortBy={sortBy} setSortBy={setSortBy}>{criteria}</SortingPill>)}
        </div>
    </div>
)

export default SortingBar;
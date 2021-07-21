/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.scss';
import { SORT_CRITERIA } from '../../constants';
import SortingPill from '../SortingPill/SortingPill';

const SortingBar = () => (
    <div className='sorting__container' >
        <label>Sort by</label>
        <div className='pills__container'>
            {SORT_CRITERIA.map((criteria) => <SortingPill key={criteria}>{criteria}</SortingPill>)}
        </div>
    </div>
)

export default SortingBar;
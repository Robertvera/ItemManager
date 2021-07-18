import React from 'react';

type NoResultsProps = {
    message: string;
}

const NoResults = ({ message }: NoResultsProps) => (
        <p>{message}</p>
);

export default NoResults;
import React from 'react';

type ErrorProps = {
    error: Error;
}

const ErrorScreen = ({ error }: ErrorProps) => (
    <>
        <h1>Oooops sorry something went wrong...</h1>
        <pre>{error.message}</pre>
    </>
);

export default ErrorScreen;
import React from 'react';
import { render } from 'react-dom';
import './assets/styles/main.scss';

const Application: React.SFC<{}> = () => (
    <h1>Applications</h1>
);

render(<Application />, document.getElementById('root'));
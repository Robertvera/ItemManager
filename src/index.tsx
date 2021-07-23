import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { polyfills } from './lib/polyfills';

// polyfill for intersection observer in non supported browsers
polyfills();

render(<App />, document.getElementById('root'));
import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.css';

const renderApp = (Component: React.ComponentType) => {
    render(<Component />, document.getElementById('app'));
};
renderApp(App);

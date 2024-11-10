import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode!);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

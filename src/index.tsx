import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Page1 from './Pages/Page1';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode!);

root.render(
    <React.StrictMode>
        <Page1 />
    </React.StrictMode>
);

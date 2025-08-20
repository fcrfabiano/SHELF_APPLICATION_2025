// -- IMPORTS

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// -- STATEMENTS

createRoot( document.getElementById( 'root' )! )
    .render(
            <StrictMode>
                <App />
            </StrictMode>
        );

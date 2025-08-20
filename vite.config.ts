// -- IMPORTS

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// -- STATEMENTS

export default defineConfig(
    {
        server:
        {
            host: '::',
            port: 8080
        },
        plugins: [ react(), tailwindcss() ],
        resolve:
        {
            alias:
            {
                '@': path.resolve( __dirname, './src' )
            }
        }
    }
    );

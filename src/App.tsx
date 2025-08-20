// -- IMPORTS

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// -- CONSTANTS

const queryClient = new QueryClient();

// -- FUNCTIONS

export default function App(
    )
{
    return (
        <QueryClientProvider client={queryClient}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/ofertas">Ofertas</a></li>
            </ul>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <h1 className="text-3xl font-bold underline text-red-500">
                            Hello world!
                        </h1>
                    }
                    />
                    <Route path="/ofertas" element={
                        <h1 className="text-3xl font-bold underline text-red-500">
                            Ofertas
                        </h1>
                    }
                    />
                    <Route path="*" element={
                        <h1 className="text-3xl font-bold underline text-red-500">
                            Página não encontrada
                        </h1>
                    }
                    />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
        );
}

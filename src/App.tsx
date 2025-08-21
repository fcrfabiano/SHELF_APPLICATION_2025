// -- IMPORTS

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './presentation/page/Home';
import NotFound from './presentation/page/NotFound';
import Offers from './presentation/page/Offers';
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster as Sonner } from './components/ui/sonner';
import { Toaster } from './components/ui/toaster';

// -- CONSTANTS

const queryClient = new QueryClient();

// -- FUNCTIONS

export default function App(
    )
{
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <Home/> } />
                        <Route path="/ofertas" element={ <Offers/> }/>
                        <Route path="*" element={ <NotFound /> } />
                    </Routes>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
        );
}

// -- IMPORTS

import { useLocation } from 'react-router-dom';

// -- TYPES

export interface NavigationItem {
    path: string;
    label: string;
    isActive: boolean;
}

// -- VIEWMODEL

export function useNavigationHeaderViewModel(
    )
{
    const location = useLocation();

    const navigationItems: NavigationItem[] =
    [
        {
            path: '/',
            label: 'Home',
            isActive: location.pathname === '/'
        },
        {
            path: '/ofertas',
            label: 'Ofertas',
            isActive: location.pathname === '/ofertas'
        }
    ];

    const storeTitle = 'Shelf-Store';

    return (
        {
            navigationItems,
            storeTitle
        }
        );
} 
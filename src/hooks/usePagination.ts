// -- IMPORTS

import { useState, useMemo } from 'react';

// -- TYPES

interface PaginationHook<T> {
    currentPage: number;
    totalPages: number;
    currentItems: T[];
    goToPage: ( page: number ) => void;
    goToNextPage: () => void;
    goToPreviousPage: () => void;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

// -- FUNCTIONS

export function usePagination<T>(
    items: T[],
    itemsPerPage: number = 6
    ): PaginationHook<T>
{
    const [ currentPage, setCurrentPage ] = useState<number>( 1 );

    const itemCount = items.length;
    const totalPages = Math.ceil( itemCount / itemsPerPage );
    const hasNextPage = currentPage < totalPages;
    const hasPreviousPage = currentPage > 1;

    const currentItems = useMemo(
        () =>
        {
            const startIndex = ( currentPage - 1 ) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            return items.slice( startIndex, endIndex );
        },
        [ items, currentPage, itemsPerPage ]
        );

    const goToPage =
        ( page: number ) =>
        {
            if ( page >= 1 && page <= totalPages )
            {
                setCurrentPage( page );
            }
        };

    const goToNextPage =
        () =>
        {
            if ( hasNextPage )
            {
                setCurrentPage( current => current + 1 );
            }
        };

    const goToPreviousPage =
        () =>
        {
            if ( hasPreviousPage )
            {
                setCurrentPage( current => current - 1 );
            }
        };

    return (
        {
            currentPage,
            totalPages,
            currentItems,
            goToPage,
            goToNextPage,
            goToPreviousPage,
            hasNextPage,
            hasPreviousPage
        }
        );
};
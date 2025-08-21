// -- IMPORTS

import { useState, useMemo } from 'react';

// -- TYPES

interface PaginationHook<T> {
    currentPage: number;
    totalPageCount: number;
    currentItemArray: T[];
    goToPage: ( page: number ) => void;
    goToNextPage: () => void;
    goToPreviousPage: () => void;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

// -- FUNCTIONS

export function usePagination<T>(
    itemArray: T[],
    itemsPerPage: number = 6
    ): PaginationHook<T>
{
    const [ currentPage, setCurrentPage ] = useState<number>( 1 );

    const itemCount = itemArray.length;
    const totalPageCount = Math.ceil( itemCount / itemsPerPage );
    const hasNextPage = currentPage < totalPageCount;
    const hasPreviousPage = currentPage > 1;

    const currentItemArray = useMemo(
        () =>
        {
            const startIndex = ( currentPage - 1 ) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            return itemArray.slice( startIndex, endIndex );
        },
        [ itemArray, currentPage, itemsPerPage ]
        );

    function goToPage(
        page: number
        )
    {
        if ( page >= 1 && page <= totalPageCount )
        {
            setCurrentPage( page );
        }
    };

    function goToNextPage(
        )
    {
        if ( hasNextPage )
        {
            setCurrentPage( current => current + 1 );
        }
    };

    function goToPreviousPage(
        )
    {
        if ( hasPreviousPage )
        {
            setCurrentPage( current => current - 1 );
        }
    };

    return (
        {
            currentPage,
            totalPageCount,
            currentItemArray,
            goToPage,
            goToNextPage,
            goToPreviousPage,
            hasNextPage,
            hasPreviousPage
        }
        );
};
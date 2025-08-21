// -- IMPORTS

import { useState, useEffect, useCallback } from 'react';

// -- TYPES

interface FavoriteProductHook {
    favoriteProductIdArray: number[];
    isFavorite: (productId: number) => boolean;
    toggleFavorite: (productId: number) => void;
    favoriteProductCount: number;
}

// -- CONSTANTS

const STORAGE_KEY = 'e-store-favorite-products';

// -- FUNCTIONS

export function useFavoriteProduct(
    ): FavoriteProductHook
{
    const [ favoriteProductIdArray, setFavoriteProductIdArray ] = useState<number[]>( [] );

    useEffect(
        () =>
        {
            const storedFavoriteArray = localStorage.getItem( STORAGE_KEY );

            if ( storedFavoriteArray )
            {
                try
                {
                    const parsedFavoriteArray = JSON.parse( storedFavoriteArray );

                    if ( Array.isArray( parsedFavoriteArray ) )
                    {
                        setFavoriteProductIdArray( parsedFavoriteArray );
                    }
                }
                catch ( error )
                {
                    console.error( 'Error parsing favorite products from localStorage:', error );
                }
            }
        },
        []
        );

    const isFavorite = useCallback(
        ( productId: number ): boolean =>
        {
            return favoriteProductIdArray.includes( productId );
        },
        [ favoriteProductIdArray ]
        );

    const toggleFavorite = useCallback(
        ( productId: number ) =>
        {
            setFavoriteProductIdArray(
                currentFavoriteArray =>
                {
                    let newFavoriteArray: number[];
                    
                    if ( currentFavoriteArray.includes( productId ) )
                    {
                        newFavoriteArray = currentFavoriteArray.filter( id => id !== productId );
                    }
                    else
                    {
                        newFavoriteArray = [ ...currentFavoriteArray, productId ];
                    }
                    
                    localStorage.setItem( STORAGE_KEY, JSON.stringify( newFavoriteArray ) );

                    return newFavoriteArray;
                }
                );
        },
        []
        );

    const favoriteProductCount = favoriteProductIdArray.length;

    return (
        {
            favoriteProductIdArray,
            isFavorite,
            toggleFavorite,
            favoriteProductCount
        }
        );
};
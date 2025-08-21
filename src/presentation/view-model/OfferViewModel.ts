// -- IMPORTS

import { useState, useEffect, useCallback } from 'react';
import { Product } from '@/domain/product/entity/Product';
import { GetOfferProductArrayUseCase } from '@/application/use-case/GetOfferProductArrayUseCase';

// -- TYPES

interface OfferViewModel {
    productArray: Product[];
    isLoading: boolean;
    errorMessage: string | null;
    loadProductArray: () => Promise<void>;
}

// -- FUNCTIONS

export function useOfferViewModel(
    getOfferProductArrayUseCase: GetOfferProductArrayUseCase
    ): OfferViewModel
{
    const [ productArray, setProductArray ] = useState<Product[]>( [] );
    const [ isLoading, setIsLoading ] = useState<boolean>( false );
    const [ errorMessage, setErrorMessage ] = useState<string | null>( null );

    const loadProductArray = useCallback(
        async () =>
        {
            setIsLoading( true );
            setErrorMessage( null );
            
            try
            {
                const offerProductArray = await getOfferProductArrayUseCase.execute();
                setProductArray( offerProductArray );
            }
            catch ( error )
            {
                const message = error instanceof Error ? error.message : 'Unknown error occurred';
                setErrorMessage( message );
                console.error( 'Error loading offer product array:', error );
            }
            finally
            {
                setIsLoading( false );
            }
        },
        [ getOfferProductArrayUseCase ]
        );

    useEffect(
        () =>
        {
            loadProductArray();
        },
        [ loadProductArray ]
        );

    return (
        {
            productArray,
            isLoading,
            errorMessage,
            loadProductArray
        }
        );
};
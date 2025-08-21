// -- IMPORTS

import { useState, useMemo } from 'react';
import { Product } from '@/domain/product/entity/Product';

// -- CONSTANTS

const MAXIMUM_PRICE = 999.99;

// -- TYPES

export interface ProductFilters {
    category: string;
    minimumPrice: number;
    maximumPrice: number;
}

interface ProductFiltersHook {
    filters: ProductFilters;
    filteredProductArray: Product[];
    categoryArray: string[];
    priceRange: { minimum: number; maximum: number };
    setCategory: ( category: string ) => void;
    setMinimumPrice: ( price: number ) => void;
    setMaximumPrice: ( price: number ) => void;
    resetFilters: () => void;
}

// -- FUNCTIONS

export function useProductFilters(
    productArray: Product[],
    onFiltersChange?: () => void
    ): ProductFiltersHook
{
    const [ filters, setFilters ] = useState<ProductFilters>(
        {
            category: 'all',
            minimumPrice: 0,
            maximumPrice: MAXIMUM_PRICE
        }
        );

    const categoryArray = useMemo(
        () =>
        {
            const uniqueCategories = Array.from( new Set( productArray.map( product => product.category ) ) );

            return uniqueCategories.sort();
        },
        [ productArray ]
        );

    const priceRange = useMemo(
        () =>
        {
            const productCount = productArray.length;

            if ( productCount === 0 )
            {
                return (
                    {
                        minimum: 0,
                        maximum: MAXIMUM_PRICE
                    }
                    );
            }
        
        const priceArray = productArray.map( product => product.price );

        return (
            {
                minimum: Math.min( ...priceArray ),
                maximum: Math.max( ...priceArray )
            }
            );
    }, 
    [ productArray ]
    );

    const filteredProductArray = useMemo(
        () =>
        {
            return productArray.filter(
                product =>
                {
                    const categoryMatch = filters.category === 'all' || product.category === filters.category;
                    const priceMatch = product.price >= filters.minimumPrice && product.price <= filters.maximumPrice;
                    
                    return categoryMatch && priceMatch;
                }
                );
    },
    [ productArray, filters ]
    );

    function setCategory(
        category: string
        )
    {
        setFilters( previousFilters => ( { ...previousFilters, category } ) );
        onFiltersChange?.();
    };

    function setMinimumPrice(
        minimumPrice: number
        )
    {
        setFilters( previousFilters => ( { ...previousFilters, minimumPrice } ) );
        onFiltersChange?.();
    };

    function setMaximumPrice(
        maximumPrice: number
        )
    {
        setFilters( previousFilters => ( { ...previousFilters, maximumPrice } ) );
        onFiltersChange?.();
    };

    function resetFilters(
        )
    {
        setFilters(
            {
                category: 'all',
                minimumPrice: 0,
                maximumPrice: MAXIMUM_PRICE
            }
            );
        onFiltersChange?.();
    };

    return (
        {
            filters,
            filteredProductArray,
            categoryArray,
            priceRange,
            setCategory,
            setMinimumPrice,
            setMaximumPrice,
            resetFilters
        }
        );
};
// -- IMPORTS

import { Product } from '../../domain/product/entity/Product';
import { ProductRepository } from '../../domain/product/repository/ProductRepository';

// -- CONSTANTS

const API_BASE_URL = 'https://fakestoreapi.com';

// -- IMPLEMENTATION

export class FakeStoreApiProductRepository implements ProductRepository
{
    // -- INQUIRIES

    async getProductArray(
        ): Promise<Product[]>
    {
        try
        {
            const response = await fetch( `${ API_BASE_URL }/products` );

            if ( !response.ok )
            {
                throw new Error( `HTTP error! status: ${ response.status }` );
            }

            const productArray = await response.json();

            return productArray;
        }
        catch ( error )
        {
            console.error( 'Error fetching product array:', error );
            throw new Error( 'Failed to fetch product array' );
        }
    }

    // ~~

    async getProductById(
        id: number
        ): Promise<Product | null>
    {
        try
        {
            const response = await fetch( `${ API_BASE_URL }/products/${ id }` );

            if ( !response.ok )
            {
                if ( response.status === 404 )
                {
                    return null;
                }

                throw new Error( `HTTP error! status: ${ response.status }` );
            }

            const product = await response.json();

            return product;
        }
        catch ( error )
        {
            console.error( `Error fetching product with id ${ id }:`, error );
            throw new Error( `Failed to fetch product with id ${ id }` );
        }
    }

    // ~~

    async getProductArrayByCategorySlug(
        categorySlug: string
        ): Promise<Product[]>
    {
        try
        {
            const response = await fetch( `${ API_BASE_URL }/products/category/${ categorySlug }` );

            if ( !response.ok )
            {
                throw new Error( `HTTP error! status: ${ response.status }` );
            }

            const productArray = await response.json();

            return productArray;
        }
        catch ( error )
        {
            console.error( `Error fetching product array for category ${ categorySlug }:`, error );
            throw new Error( `Failed to fetch product array for category ${ categorySlug }` );
        }
    }
}
// -- IMPORTS

import { Product } from '../../domain/product/entity/Product';
import { ProductRepository } from '../../domain/product/repository/ProductRepository';

// -- TYPES

export class GetOfferProductArrayUseCase
{
    // -- CONSTRUCTOR

    constructor(
        private readonly productRepository: ProductRepository
        )
    {
    }

    // -- OPERATIONS

    async execute(
        ): Promise<Product[]>
    {
        try
        {
            const allProductArray = await this.productRepository.getProductArray();
            
            return allProductArray;
        }
        catch ( error )
        {
            console.error( 'Error in GetOfferProductArrayUseCase:', error );
            throw new Error( 'Failed to get offer product array' );
        }
    }
}
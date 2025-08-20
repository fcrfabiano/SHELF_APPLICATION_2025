// -- IMPORTS

import { FakeStoreApiProductRepository } from '../api/FakeStoreAPI';
import { GetOfferProductArrayUseCase } from '../../application/use-case/GetOfferProductArrayUseCase';
import { ProductRepository } from '../../domain/product/repository/ProductRepository';

// -- TYPES

export class DependencyContainer
{
    // -- ATTRIBUTES

    private static instance: DependencyContainer;
    private productRepository: ProductRepository;
    private offerProductArrayUseCase: GetOfferProductArrayUseCase;

    // -- CONSTRUCTOR

    private constructor(
        )
    {
        this.productRepository = new FakeStoreApiProductRepository();
        this.offerProductArrayUseCase = new GetOfferProductArrayUseCase( this.productRepository );
    }

    // -- INQUIRIES

    public static getInstance(
        ): DependencyContainer
    {
        if ( !DependencyContainer.instance )
        {
            DependencyContainer.instance = new DependencyContainer();
        }

        return DependencyContainer.instance;
    }

    // ~~

    public getProductRepository(
        ): ProductRepository
    {
        return this.productRepository;
    }

    // ~~

    public getOfferProductArrayUseCase(
        ): GetOfferProductArrayUseCase
    {
        return this.offerProductArrayUseCase;
    }
}
// -- IMPORTS

import { Product } from '../entity/Product';

// -- TYPES

export interface ProductRepository {
    getProductArray(
        ): Promise<Product[]>;

    getProductById(
        id: number
        ): Promise<Product | null>;

    getProductArrayByCategorySlug(
        categorySlug: string
        ): Promise<Product[]>;
}
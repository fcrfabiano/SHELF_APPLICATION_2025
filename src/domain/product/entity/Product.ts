// -- TYPES

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
}

export interface ProductRating {
    rate: number;
    count: number;
}

// ~~

export class price
{
    // -- CONSTRUCTOR

    constructor(
        private readonly value: number
        )
    {
        if ( value < 0 )
        {
            throw new Error( 'Price cannot be negative' );
        }
    }

    // -- INQUIRIES

    getValue(
        ): number
    {
        return this.value;
    }

    // ~~

    getFormattedValue(
        ): string
    {
        return new Intl.NumberFormat(
            'pt-BR',
            {
                style: 'currency',
                currency: 'BRL'
            }
            ).format( this.value );
    }
}
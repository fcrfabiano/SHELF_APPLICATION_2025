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

export class Price
{
    // -- CONSTRUCTOR

    private constructor(
        private readonly _value: number
        )
    {
        if ( _value < 0 )
        {
            throw new Error( 'Price cannot be negative' );
        }

        if ( !Number.isFinite( _value ) )
        {
            throw new Error( 'Invalid price value' );
        }

        if ( _value > 999999.99 )
        {
            throw new Error( 'Price exceeds maximum allowed value' );
        }
    }

    // -- INQUIRIES

    get value(
        ): number
    {
        return this._value;
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

    // ~~

    isGreaterThan(
        otherPrice: Price
        ): boolean
    {
        return this.value > otherPrice.value;
    }

    // ~~

    isLessThan(
        otherPrice: Price
        ): boolean
    {
        return this.value < otherPrice.value;
    }

    // -- OPERATIONS

    static create(
        value: number
        ): Price
    {
        return new Price( value );
    }
}
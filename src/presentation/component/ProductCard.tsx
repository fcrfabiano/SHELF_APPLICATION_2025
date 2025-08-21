// IMPORTS

import React from 'react';
import { Price, Product } from '../../domain/product/entity/Product';
import { ProductRepository } from '../../domain/product/repository/ProductRepository';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Heart, Star } from 'lucide-react';

// TYPES

interface ProductCardProps {
    product: Product;
    onPurchaseClick: (productId: number) => void;
    onFavoriteToggle: (productId: number) => void;
    isFavorite: boolean;
}

// -- TYPES

export function ProductCard(
    { 
        product, 
        onPurchaseClick, 
        onFavoriteToggle, 
        isFavorite 
    }: ProductCardProps
    )
{
    const price = new Price( product.price );

    function handlePurchaseClick(
        )
    {
        onPurchaseClick( product.id );
    };

    function handleFavoriteClick(
        )
    {
        onFavoriteToggle( product.id );
    };

    function renderStars(
        )
    {
        const rating = Math.round( product.rating.rate );

        return Array.from(
            { length: 5 },
            ( _, index ) =>
            (
                <Star
                    key={ index }
                    className={`h-4 w-4 ${
                        index < rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'fill-gray-200 text-gray-200'
                    }`}
                />
            )
            );
    };

    return (
        <Card className="product-card overflow-hidden group relative">
            <button
                onClick={ handleFavoriteClick }
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                aria-label={ isFavorite ? 'Remove from favorites' : 'Add to favorites' }
            >
                <Heart 
                    className={`h-4 w-4 ${
                        isFavorite 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-muted-foreground hover:text-red-500'
                    } transition-colors`}
                />
            </button>
            
            <div className="aspect-square overflow-hidden bg-muted">
                <img
                    src={ product.image }
                    alt={ product.title }
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                />
            </div>
            <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
                    { product.title }
                </h3>
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                        { renderStars() }
                        <span className="text-sm text-muted-foreground ml-1">
                            ( { product.rating.count } )
                        </span>
                    </div>
                </div>
                <p className="text-2xl font-bold text-primary">
                    { price.getFormattedValue() }
                </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button 
                    onClick={ handlePurchaseClick }
                    className="w-full btn-accent font-semibold"
                    size="sm"
                >
                    Comprar
                </Button>
            </CardFooter>
        </Card>
        );
};
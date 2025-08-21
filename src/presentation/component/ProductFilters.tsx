// -- IMPORTS

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { X } from 'lucide-react';
import { Price } from '@/domain/product/entity/Product';

// -- TYPES

interface ProductFiltersProps {
    categoryArray: string[];
    selectedCategory: string;
    minimumPrice: number;
    maximumPrice: number;
    priceRange: { minimum: number; maximum: number };
    onCategoryChange: ( category: string ) => void;
    onMinimumPriceChange: ( price: number ) => void;
    onMaximumPriceChange: ( price: number ) => void;
    onResetFilters: () => void;
}

// -- FUNCTIONS

export function ProductFilters(
    {
        categoryArray,
        selectedCategory,
        minimumPrice,
        maximumPrice,
        priceRange,
        onCategoryChange,
        onMinimumPriceChange,
        onMaximumPriceChange,
        onResetFilters
    }: ProductFiltersProps
    )
{
    function handlePriceRangeChange(
        valueArray: number[]
        )
    {
        onMinimumPriceChange( valueArray[ 0 ] );
        onMaximumPriceChange( valueArray[ 1 ] );
    };

    function formatCategoryName(
        category: string
        )
    {
        return category
            .split(' ')
            .map( word => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) )
            .join(' ');
    };

    const hasActiveFilters = selectedCategory !== 'all' || minimumPrice > priceRange.minimum || maximumPrice < priceRange.maximum;

    return (
        <Card className="mb-6">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Filtros</CardTitle>
                    {
                        hasActiveFilters && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={ onResetFilters }
                                className="h-8 px-2 lg:px-3"
                            >
                                <X className="mr-1 h-4 w-4" />
                                Limpar
                            </Button>
                            )
                    }
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="category-select">Categoria</Label>
                    <Select
                        value={ selectedCategory }
                        onValueChange={ onCategoryChange }
                    >
                        <SelectTrigger id="category-select">
                            <SelectValue placeholder="Todas as categorias" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Todas as categorias</SelectItem>
                            {
                                categoryArray.map(
                                    ( category ) =>
                                    (
                                        <SelectItem key={ category } value={ category }>
                                            { formatCategoryName( category ) }
                                        </SelectItem>
                                    )
                                    )
                            }
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-4">
                    <Label>Faixa de Preço</Label>
                    <div className="px-2">
                        <Slider
                            value={ [ minimumPrice, maximumPrice ] }
                            onValueChange={ handlePriceRangeChange }
                            max={ priceRange.maximum }
                            min={ priceRange.minimum }
                            step={ 1 }
                            className="w-full"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="flex-1">
                            <Label htmlFor="min-price" className="text-sm text-muted-foreground">
                                Mín.
                            </Label>
                            <Input
                                id="min-price"
                                type="number"
                                value={minimumPrice}
                                onChange={ ( { target } ) => onMinimumPriceChange( Number( target.value ) ) }
                                min={ priceRange.minimum }
                                max={ maximumPrice }
                                className="mt-1"
                            />
                        </div>
                        <div className="flex-1">
                            <Label htmlFor="max-price" className="text-sm text-muted-foreground">
                                Máx.
                            </Label>
                            <Input
                                id="max-price"
                                type="number"
                                value={ maximumPrice }
                                onChange={ ( { target } ) => onMaximumPriceChange( Number( target.value ) ) }
                                min={ minimumPrice }
                                max={ priceRange.maximum }
                                className="mt-1"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{ new Price( priceRange.minimum ).getFormattedValue() }</span>
                        <span>{ new Price( priceRange.maximum ).getFormattedValue() }</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
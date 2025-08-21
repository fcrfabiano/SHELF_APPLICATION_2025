// -- IMPORTS

import React from 'react';
import { OfferBanner } from '../component/OfferBanner';
import { ProductCard } from '../component/ProductCard';
import { useOfferViewModel } from '../view-model/OfferViewModel';
import { DependencyContainer } from '@/infrastructure/dependecy-injection/container';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/useToast';
import { useFavoriteProduct } from '@/hooks/useFavoriteProduct';
import { usePagination } from '@/hooks/usePagination';
import { 
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis
} from '@/components/ui/pagination';
import { useProductFilters } from '@/hooks/useProductFilters';
import { ProductFilters } from './ProductFilters';
import { Product } from '@/domain/product/entity/Product';

// -- FUNCTIONS

export function OffersCatalog(
    )
{
    const container = DependencyContainer.getInstance();
    const offerProductArrayUseCase = container.getOfferProductArrayUseCase();
    const { productArray, isLoading, errorMessage } = useOfferViewModel( offerProductArrayUseCase );
    const { toast } = useToast();
    const { isFavorite, toggleFavorite } = useFavoriteProduct();
    const {
        filteredProductArray,
        filters,
        categoryArray,
        priceRange,
        setCategory,
        setMaximumPrice,
        setMinimumPrice,
        resetFilters
    } = useProductFilters( productArray );
    const { 
        currentItemArray: currentProductArray, 
        currentPage, 
        totalPageCount, 
        goToPage, 
        goToNextPage, 
        goToPreviousPage, 
        hasNextPage, 
        hasPreviousPage 
    } = usePagination<Product>( filteredProductArray, 6 );

    function handlePurchaseClick(
        productId: number
        )
    {
        toast(
            {
                title: 'Produto adicionado!',
                description: `Produto ${ productId } foi adicionado ao carrinho.`,
                duration: 3000
            }
            );
    };

    function handleFavoriteToggle(
        productId: number
        )
    {
        toggleFavorite( productId );
        toast(
            {
                title: isFavorite( productId ) ? 'Removido dos favoritos' : 'Adicionado aos favoritos',
                description: `Produto ${ productId } foi ${ isFavorite( productId ) ? 'removido dos' : 'adicionado aos' } favoritos.`,
                duration: 2000
            }
            );
    };

    function renderPaginationNumbers(
        )
    {
        const pageArray = [];
        const maximumVisiblePageCount = 5;

        if ( totalPageCount <= maximumVisiblePageCount )
        {
            for ( let index = 1; index <= totalPageCount; index++ )
            {
                pageArray.push(
                    <PaginationItem key={ index }>
                        <PaginationLink
                            onClick={ () => goToPage( index ) }
                            isActive={ currentPage === index }
                            className="cursor-pointer"
                        >
                            { index }
                        </PaginationLink>
                    </PaginationItem>
                    );
            }
        }
        else
        {
            pageArray.push(
                <PaginationItem key={ 1 }>
                    <PaginationLink
                        onClick={ () => goToPage( 1 ) }
                        isActive={ currentPage === 1 }
                        className="cursor-pointer"
                    >
                        1
                    </PaginationLink>
                </PaginationItem>
                );

            if ( currentPage > 3 )
            {
                pageArray.push(
                    <PaginationItem key="ellipsis1">
                        <PaginationEllipsis />
                    </PaginationItem>
                    );
            }

            const start = Math.max( 2, currentPage - 1 );
            const end = Math.min( totalPageCount - 1, currentPage + 1 );
            
            for ( let index = start; index <= end; index++ )
            {
                pageArray.push(
                    <PaginationItem key={ index }>
                        <PaginationLink
                            onClick={ () => goToPage( index ) }
                            isActive={ currentPage === index }
                            className="cursor-pointer"
                        >
                            { index }
                        </PaginationLink>
                    </PaginationItem>
                    );
            }

            if ( currentPage < totalPageCount - 2 )
            {
                pageArray.push(
                    <PaginationItem key="ellipsis2">
                        <PaginationEllipsis />
                    </PaginationItem>
                    );
            }

            if ( totalPageCount > 1 )
            {
                pageArray.push(
                    <PaginationItem key={ totalPageCount }>
                        <PaginationLink
                            onClick={ () => goToPage( totalPageCount ) }
                            isActive={ currentPage === totalPageCount }
                            className="cursor-pointer"
                        >
                            { totalPageCount }
                        </PaginationLink>
                    </PaginationItem>
                    );
            }
        }

        return pageArray;
    };

    return (
        <main className="bg-background">
            <section className="container mx-auto px-4 py-8">
                <OfferBanner />
            </section>

            <section className="container mx-auto px-4 pb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Super ofertas
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Aproveite nossa seleção especial de produtos com os melhores preços do mercado
                    </p>
                </div>

                {
                    !isLoading
                         && !errorMessage
                         && productArray.length > 0
                         && (
                            <div className="max-w-6xl mx-auto mb-8">
                                <ProductFilters
                                    categoryArray={ categoryArray }
                                    selectedCategory={ filters.category }
                                    minimumPrice={ filters.minimumPrice }
                                    maximumPrice={ filters.maximumPrice }
                                    priceRange={ priceRange }
                                    onCategoryChange={ setCategory }
                                    onMinimumPriceChange={ setMinimumPrice }
                                    onMaximumPriceChange={ setMaximumPrice }
                                    onResetFilters={resetFilters}
                                />
                            </div>
                            )
                }

                {
                    errorMessage && (
                        <Alert className="mb-8 max-w-2xl mx-auto">
                            <AlertDescription>
                                { errorMessage }
                            </AlertDescription>
                        </Alert>
                        )
                }

                {
                    isLoading && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {
                                Array.from( { length: 6 } ).map(
                                    ( _, index ) =>
                                    (
                                        <div key={ index } className="space-y-4">
                                            <Skeleton className="aspect-square w-full" />
                                            <Skeleton className="h-4 w-3/4" />
                                            <Skeleton className="h-4 w-1/2" />
                                            <Skeleton className="h-8 w-full" />
                                        </div>
                                    )
                                )
                            }
                        </div>
                        )
                }

                {
                    !isLoading
                        && !errorMessage
                        && currentProductArray.length > 0
                        && (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
                                    {
                                        currentProductArray.map(
                                            ( product ) =>
                                            (
                                                <ProductCard
                                                    key={ product.id }
                                                    product={ product }
                                                    onPurchaseClick={ handlePurchaseClick }
                                                    onFavoriteToggle={ handleFavoriteToggle }
                                                    isFavorite={ isFavorite( product.id ) }
                                                />
                                            )
                                            )
                                    }
                                </div>

                                {
                                    totalPageCount > 1 && (
                                        <Pagination className="mt-8">
                                            <PaginationContent>
                                                <PaginationItem>
                                                    <PaginationPrevious
                                                        onClick={ goToPreviousPage }
                                                        className={ `cursor-pointer ${
                                                            !hasPreviousPage ? 'pointer-events-none opacity-50' : ''
                                                        }` }
                                                    />
                                                </PaginationItem>
                                                
                                                { renderPaginationNumbers() }
                                                
                                                <PaginationItem>
                                                    <PaginationNext
                                                        onClick={ goToNextPage }
                                                        className={ `cursor-pointer ${
                                                            !hasNextPage ? 'pointer-events-none opacity-50' : ''
                                                        }` }
                                                    />
                                                </PaginationItem>
                                            </PaginationContent>
                                        </Pagination>
                                        )
                                }
                            </>
                        )
                }

                {
                    !isLoading
                         && !errorMessage
                         && productArray.length === 0
                         && (
                                <div className="text-center py-16">
                                    <p className="text-xl text-muted-foreground">
                                        Nenhuma oferta disponível no momento
                                    </p>
                                </div>
                            )
                }
            </section>
        </main>
    );
};
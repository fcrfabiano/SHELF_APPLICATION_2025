// IMPORTS

import { NavigationHeader } from '../component/NavigationHeader';
import { OffersCatalog } from '../component/OffersCatalog';

// COMPONENT

export default function Offers(
    )
{
    return (
        <div className="min-h-screen bg-background">
            <NavigationHeader />
            <OffersCatalog />
        </div>
    );
};
// -- IMPORTS

import { FeatureItem } from '../view-model/HomeViewModel';

// -- TYPES

interface FeaturesSectionProps {
    featureArray: FeatureItem[];
}

// -- FUNCTIONS

export function FeaturesSection(
    { featureArray }: FeaturesSectionProps
    ) 
{
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                featureArray.map( ( feature, featureIndex ) =>
                {
                    const IconComponent = feature.icon;
                    return (
                        <div key={ featureIndex } className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-200 hover:shadow-md">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <IconComponent className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-foreground">{ feature.title }</h3>
                            <p className="text-sm text-muted-foreground">
                                { feature.description }
                            </p>
                        </div>
                        );
                }
                )
            }
        </div>
        );
} 
// -- IMPORTS

import { StatisticItem } from '../view-model/HomeViewModel';

// -- TYPES

interface StatisticsSectionProps {
    statisticArray: StatisticItem[];
}

// -- FUNCTIONS

export function StatisticsSection(
    { statisticArray }: StatisticsSectionProps
    )
{
    return (
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {
                statisticArray.map(
                    ( stat, statIndex ) =>
                    (
                        <div key={ statIndex } className="text-center">
                            <div className="text-2xl font-bold text-primary">{ stat.value }</div>
                            <div className="text-sm text-muted-foreground">{ stat.label }</div>
                        </div>
                    )
                )
            }
        </div>
    );
} 
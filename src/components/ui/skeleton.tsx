// -- IMPORTS

import { getClassNames } from '@/lib/utils';

// -- FUNCTIONS

function Skeleton(
    {
        className,
        ...props
    }: React.ComponentProps<"div">
    )
{
    return (
        <div
            data-slot="skeleton"
            className={ getClassNames( 'bg-accent animate-pulse rounded-md', className ) }
            { ...props }
        />
        );
}

export { Skeleton }

// -- IMPORTS

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// -- FUNCTIONS

export function getClassNames(
    ...inputs: ClassValue[]
    ): string
{
    return twMerge( clsx( inputs ) );
}
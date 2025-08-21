// -- IMPORTS

import { Star, Users } from 'lucide-react';
import { TestimonialItem } from '../view-model/HomeViewModel';

// -- TYPES

interface TestimonialsSectionProps {
    testimonialArray: TestimonialItem[];
}

// -- FUNCTIONS

export function TestimonialsSection(
    { testimonialArray }: TestimonialsSectionProps
    )
{
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                testimonialArray.map(
                    ( testimonial, testimonialIndex ) =>
                    (
                        <div key={ testimonialIndex } className="p-6 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-200">
                            <div className="flex items-center mb-4">
                                {
                                    Array.from( { length: testimonial.rating } )
                                        .map( ( _, index ) =>
                                        (
                                            <Star key={ index } className="w-4 h-4 text-yellow-400 fill-current" />
                                        )
                                        )
                                }
                            </div>
                            <p className="text-muted-foreground mb-4 text-sm">
                                "{ testimonial.text }"
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                                    <Users className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="font-semibold text-sm">{ testimonial.authorName }</div>
                                    <div className="text-xs text-muted-foreground">{ testimonial.authorSince }</div>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    );
} 
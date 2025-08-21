// -- IMPORTS

import { Button } from '@/components/ui/button';

// -- TYPES

interface NewsletterSectionProps {
    emailNewsletter: string;
    onEmailChange: (email: string) => void;
    onSubmit: () => void;
}

// -- FUNCTIONS

export function NewsletterSection(
    {
        emailNewsletter,
        onEmailChange,
        onSubmit
    }: NewsletterSectionProps
    )
{
    return (
        <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Fique por dentro das novidades!</h3>
            <p className="text-muted-foreground mb-8">
                Receba ofertas exclusivas e novidades em primeira mão
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={ emailNewsletter }
                    onChange={ ( { target } ) => onEmailChange( target.value ) }
                    className="flex-1 max-w-sm px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button 
                    onClick={ onSubmit }
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg whitespace-nowrap"
                >
                    Inscrever
                </Button>
            </div>
        </div>
        );
} 
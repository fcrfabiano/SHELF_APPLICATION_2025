// -- FUNCTIONS

export function OfferBanner(
    )
{
    return (
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl banner-shadow gradient-primary">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
            <div className="relative h-full flex items-center justify-center text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Super Ofertas
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-6">
                        Descontos imperdíveis nos melhores produtos
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                            <span className="text-white font-semibold">
                                ⚡ Promoções limitadas
                            </span>
                        </div>
                        <div className="bg-accent/90 backdrop-blur-sm rounded-full px-6 py-2">
                            <span className="text-primary font-semibold">
                                🔥 Até 70% OFF
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
};
// -- IMPORTS

import { Button } from '@/components/ui/button';
import { NavigationHeader } from '../component/NavigationHeader';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useHomeViewModel } from '../view-model/HomeViewModel';
import { StatisticsSection } from '../component/StatisticsSection';
import { FeaturesSection } from '../component/FeaturesSection';
import { TestimonialsSection } from '../component/TestimonialsSection';
import { NewsletterSection } from '../component/NewsletterSection';

// -- FUNCTIONS

export default function Home(
    )
{
    const {
        statisticArray,
        featureArray,
        testimonialArray,
        emailNewsletter,
        handleEmailChange,
        handleNewsletterSubmit
    } = useHomeViewModel();

    return (
        <div className="min-h-screen bg-background">
            <NavigationHeader />
            
            <section className="relative bg-background">
                <div className="container mx-auto px-4 py-12">
                    <div className="text-center max-w-5xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground leading-tight">
                            Bem-Vindo à Shelf-Store
                            <span className="block text-3xl md:text-4xl mt-3 text-primary font-semibold">Descubra produtos incríveis.</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                            Milhares de produtos selecionados com os melhores preços do mercado. 
                            Qualidade garantida e entrega rápida para sua comodidade.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <Link to="/ofertas">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                                    <ShoppingBag className="w-5 h-5 mr-2" />
                                    Ver Ofertas da Semana
                                </Button>
                            </Link>
                            <Link to="/ofertas" className="hidden md:block">
                                <Button variant="outline" size="lg" className="md:w-auto px-8 py-4 text-lg rounded-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200">
                                    Explorar Produtos
                                </Button>
                            </Link>
                        </div>

                        <StatisticsSection statisticArray={ statisticArray } />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-foreground">Por que escolher a Shelf-Store?</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Oferecemos a melhor experiência de compra online com benefícios exclusivos
                        </p>
                    </div>

                    <FeaturesSection featureArray={ featureArray } />
                </div>
            </section>

            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Pronto para começar suas compras?
                    </h2>
                    <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
                        Junte-se a milhares de clientes satisfeitos e descubra produtos incríveis com os melhores preços
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/ofertas">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg rounded-lg shadow-sm">
                                Começar Agora
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-foreground">O que nossos clientes dizem</h2>
                        <p className="text-lg text-muted-foreground">
                            Depoimentos reais de quem já experimentou a Shelf-Store
                        </p>
                    </div>

                    <TestimonialsSection testimonialArray={ testimonialArray } />
                </div>
            </section>

            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <NewsletterSection 
                        emailNewsletter={ emailNewsletter }
                        onEmailChange={ handleEmailChange }
                        onSubmit={ handleNewsletterSubmit }
                    />
                </div>
            </section>
        </div>
        );
}
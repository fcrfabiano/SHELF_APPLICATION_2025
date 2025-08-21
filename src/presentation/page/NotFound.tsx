// -- IMPORTS

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationHeader } from '../component/NavigationHeader';
import { Home, Search, ShoppingBag, ArrowLeft } from 'lucide-react';

// -- FUNCTIONS

export default function NotFound(
    )
{
    return (
        <div className="min-h-screen bg-background">
            <NavigationHeader />
            
            <main className="flex-1 flex items-center justify-center py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-8">
                        <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 leading-none">
                            404
                        </h1>
                    </div>
                    
                    <div className="max-w-2xl mx-auto mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Página não encontrada
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Ops! Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Link to="/">
                            <Button 
                                size="lg" 
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                <Home className="w-5 h-5 mr-2" />
                                Voltar ao Início
                            </Button>
                        </Link>
                        
                        <Link to="/ofertas">
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="px-8 py-4 text-lg rounded-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                            >
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                Ver Ofertas
                            </Button>
                        </Link>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-xl font-semibold text-foreground mb-6">
                            Páginas populares
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Link 
                                to="/" 
                                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-200 hover:shadow-md"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <Home className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-semibold text-foreground mb-2">Página Inicial</h4>
                                <p className="text-sm text-muted-foreground">
                                    Descubra nossos produtos em destaque
                                </p>
                            </Link>
                            
                            <Link 
                                to="/ofertas" 
                                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-200 hover:shadow-md"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <ShoppingBag className="w-6 h-6 text-primary" />
                                </div>
                                <h4 className="font-semibold text-foreground mb-2">Ofertas da Semana</h4>
                                <p className="text-sm text-muted-foreground">
                                    As melhores promoções selecionadas para você
                                </p>
                            </Link>
                            
                            <div className="group p-6 rounded-xl bg-card border border-border">
                                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Search className="w-6 h-6 text-muted-foreground" />
                                </div>
                                <h4 className="font-semibold text-foreground mb-2">Buscar Produtos</h4>
                                <p className="text-sm text-muted-foreground">
                                    Use a barra de navegação para encontrar produtos
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12">
                        <button 
                            onClick={ () => window.history.back() }
                            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Voltar à página anterior
                        </button>
                    </div>
                </div>
            </main>
        </div>
        );
}

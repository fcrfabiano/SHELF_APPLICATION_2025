// -- IMPORTS

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useNavigationHeaderViewModel } from '../view-model/NavigationHeaderViewModel';

// -- COMPONENT

export function NavigationHeader() {
    const { navigationItems, storeTitle } = useNavigationHeaderViewModel();

    return (
        <header className="bg-background border-b sticky top-0 z-50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-primary hover:text-primary-hover transition-colors">
                        { storeTitle }
                    </Link>
                    
                    <div className="flex items-center gap-4">
                        {
                            navigationItems.map(
                                (item ) =>
                                (
                                    <Link key={ item.path } to={ item.path }>
                                        <Button 
                                            variant={ item.isActive ? 'default' : 'ghost' }
                                            size="sm"
                                        >
                                            { item.label }
                                        </Button>
                                    </Link>
                                )
                            )
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
}
// -- IMPORTS

import { useState } from 'react';
import { Truck, Shield, CreditCard, Award } from 'lucide-react';

// -- TYPES

export interface StatisticItem {
    value: string;
    label: string;
}

export interface FeatureItem {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

export interface TestimonialItem {
    rating: number;
    text: string;
    authorName: string;
    authorSince: string;
}

// -- CONSTANTS

const STATISTICS_DATA: StatisticItem[] =
[
    { value: '50K+', label: 'Clientes Satisfeitos' },
    { value: '10K+', label: 'Produtos' },
    { value: '24h', label: 'Entrega' }
];

const FEATURES_DATA: FeatureItem[] =
[
    {
        icon: Truck,
        title: 'Entrega Rápida',
        description: 'Receba seus produtos em até 24 horas com rastreamento em tempo real'
    },
    {
        icon: Shield,
        title: 'Compra 100% Segura',
        description: 'Seus dados estão protegidos com criptografia de ponta a ponta'
    },
    {
        icon: CreditCard,
        title: 'Pagamento Flexível',
        description: 'PIX, cartões, boleto e até 12x sem juros nos cartões'
    },
    {
        icon: Award,
        title: 'Garantia Estendida',
        description: '30 dias para troca e garantia de fábrica em todos os produtos'
    }
];

const TESTIMONIALS_DATA: TestimonialItem[] =
[
    {
        rating: 5,
        text: 'Excelente experiência de compra! Produtos de qualidade e entrega super rápida. Recomendo!',
        authorName: 'Maria Silva',
        authorSince: 'Cliente desde 2023'
    },
    {
        rating: 5,
        text: 'Preços imbatíveis e atendimento excepcional. Já fiz várias compras e sempre fico satisfeito.',
        authorName: 'João Santos',
        authorSince: 'Cliente desde 2022'
    },
    {
        rating: 5,
        text: 'Site fácil de usar, produtos bem organizados e entrega no prazo. Super recomendo!',
        authorName: 'Ana Costa',
        authorSince: 'Cliente desde 2024'
    }
];

// -- VIEWMODEL

export function useHomeViewModel(
    )
{
    const [ emailNewsletter, setEmailNewsletter ] = useState( '' );
    const statisticArray = STATISTICS_DATA;
    const featureArray = FEATURES_DATA;
    const testimonialArray = TESTIMONIALS_DATA;

    function handleEmailChange(
        email: string
        )
    {
        setEmailNewsletter( email );
    };

    function handleNewsletterSubmit(
        )
    {
        console.log( 'Newsletter subscription:', emailNewsletter );
        setEmailNewsletter( '' );
    };

    return {
        statisticArray,
        featureArray,
        testimonialArray,
        emailNewsletter,
        handleEmailChange,
        handleNewsletterSubmit
    };
} 
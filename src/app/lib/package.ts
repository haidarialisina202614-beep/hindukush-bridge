export interface Package {
    badge: string;
    isUnlimited?: boolean;
    internet: string;
    speed?: string;
    free?: string;
    freeTime?: string;
    features: string[];
}


export const internetPackages: Package[] = [
    {
        badge: 'Volume based',
        internet: '100GB',
        speed: '5MB',
        free: 'Free',
        freeTime: '(12 AM - AM)',
        features: ['100GB', '1 month', '700 AFN', '5Mbps']
    },
    {
        badge: 'Unlimited',
        isUnlimited: true,
        internet: '4Mbps',
        speed: '',
        freeTime: '',
        features: ['1 month', '2000 AFN', '4Mbps']
    },
]
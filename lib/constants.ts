export type NavItem = {
    href: string;
    label: string;
};

// Change {}[] to NavItem[]
export const NAV_ITEMS: NavItem[] = [
    {href:'/', label: 'Dashboard'},
    {href:'/search', label: 'Search'},
    {href:'/watchlist', label: 'Watchlist'}
];
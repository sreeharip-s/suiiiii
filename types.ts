
export type Page = 
    'home' | 
    'charset' | 
    'tokens' | 
    'keywords' | 
    'identifiers' | 
    'literals' | 
    'operators' | 
    'variables' | 
    'io';

export interface NavItem {
    id: Page;
    label: string;
    icon: string;
}

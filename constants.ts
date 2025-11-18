
import type { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'charset', label: 'Character Set', icon: '🧾' },
    { id: 'tokens', label: 'Tokens Overview', icon: '🔖' },
    { id: 'keywords', label: 'Keywords', icon: '🔑' },
    { id: 'identifiers', label: 'Identifiers', icon: '👤' },
    { id: 'literals', label: 'Literals', icon: '🔢' },
    { id: 'operators', label: 'Operators', icon: '➕' },
    { id: 'variables', label: 'Variables', icon: '📦' },
    { id: 'io', label: 'Input & Output', icon: '💻' }
];

export const KEYWORDS = [
    'False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 
    'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 
    'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 
    'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'
];

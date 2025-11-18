
import React from 'react';
import type { Page } from '../types';
import { HomePage } from './pages/HomePage';
import { CharsetPage } from './pages/CharsetPage';
import { TokensPage } from './pages/TokensPage';
import { KeywordsPage } from './pages/KeywordsPage';
import { IdentifiersPage } from './pages/IdentifiersPage';
import { LiteralsPage } from './pages/LiteralsPage';
import { OperatorsPage } from './pages/OperatorsPage';
import { VariablesPage } from './pages/VariablesPage';
import { IoPage } from './pages/IoPage';

interface MainContentProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

const pageComponents: { [key in Page]: React.ComponentType<any> } = {
    home: HomePage,
    charset: CharsetPage,
    tokens: TokensPage,
    keywords: KeywordsPage,
    identifiers: IdentifiersPage,
    literals: LiteralsPage,
    operators: OperatorsPage,
    variables: VariablesPage,
    io: IoPage,
};

export const MainContent: React.FC<MainContentProps> = ({ activePage, setActivePage }) => {
    const ActivePageComponent = pageComponents[activePage];

    return (
        <main className="flex-1 overflow-y-auto bg-black p-6 md:p-12 relative">
            <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black pointer-events-none z-0"></div>
            <div className="relative z-10 max-w-5xl mx-auto content-panel">
                <ActivePageComponent setActivePage={setActivePage} />
            </div>
        </main>
    );
};

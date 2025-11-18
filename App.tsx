
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import type { Page } from './types';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('home');

    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
            <Sidebar activePage={activePage} setActivePage={setActivePage} />
            <MainContent activePage={activePage} setActivePage={setActivePage} />
        </div>
    );
};

export default App;

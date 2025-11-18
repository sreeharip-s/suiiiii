
import React from 'react';
import { NAV_ITEMS } from '../constants';
import type { Page } from '../types';

interface SidebarProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
    return (
        <nav className="w-full md:w-64 bg-black border-r border-neutral-900 shrink-0 flex flex-col relative z-20">
            <div className="p-6 border-b border-neutral-900">
                <h2 className="text-2xl font-bold text-orange-500 tracking-tight">
                    Python<span className="text-white">Basics</span>
                </h2>
                <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Chapter 6 Explorer</p>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <ul className="flex flex-col space-y-1">
                    {NAV_ITEMS.map(item => (
                        <li key={item.id}>
                            <button
                                onClick={() => setActivePage(item.id)}
                                className={`w-full text-left flex items-center px-6 py-3 text-sm font-medium transition-all ease-in-out duration-200 border-l-4 ${
                                    activePage === item.id
                                        ? 'bg-neutral-900 text-orange-400 border-orange-400'
                                        : 'border-transparent text-neutral-300 hover:bg-neutral-950 hover:text-white'
                                }`}
                            >
                                <span>{item.icon}</span>
                                <span className="ml-3">{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-4 border-t border-neutral-900 text-center">
                <p className="text-xs text-neutral-600">Exam Cram Mode</p>
            </div>
        </nav>
    );
};

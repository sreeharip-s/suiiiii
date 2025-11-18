
import React from 'react';
import { Card } from '../common/Card';
import type { Page } from '../../types';

interface HomePageProps {
    setActivePage: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">Python Basics <span className="text-orange-500">.exp</span></h1>
                <p className="text-xl text-neutral-400 font-light">Interactive study guide for Chapter 6.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="p-6 col-span-2">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <span className="text-orange-500 mr-2">⚡</span> Quick Start
                    </h3>
                    <p className="text-neutral-400 mb-6 leading-relaxed">
                        This application breaks down the core concepts of Python into digestible, interactive cards. 
                        Forget scrolling through a long document. Use the sidebar to jump exactly where you need to be.
                    </p>
                    <div className="flex space-x-4">
                        <button onClick={() => setActivePage('tokens')} className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-medium transition-colors">
                            Start Learning
                        </button>
                    </div>
                </Card>
                <Card className="p-6 border-orange-900/30 bg-orange-900/10">
                    <h3 className="text-lg font-bold text-orange-400 mb-3">Exam Tips</h3>
                    <ul className="space-y-3 text-sm text-neutral-300">
                        <li className="flex items-start"><span className="mr-2 text-orange-500">&bull;</span> Memorize the 3 rules for identifiers.</li>
                        <li className="flex items-start"><span className="mr-2 text-orange-500">&bull;</span> Know that `input()` always returns a string.</li>
                        <li className="flex items-start"><span className="mr-2 text-orange-500">&bull;</span> Don't confuse `=` (assign) with `==` (compare).</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
};

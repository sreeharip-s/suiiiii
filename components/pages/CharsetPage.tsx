
import React from 'react';
import { Card } from '../common/Card';

const CharsetCard = ({ icon, title, content }: { icon: string; title: string; content: string }) => (
    <Card className="p-5 hover:border-orange-500/50 transition-colors group">
        <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded bg-neutral-800 text-orange-500 flex items-center justify-center mr-3 group-hover:bg-orange-500 group-hover:text-black transition-colors">{icon}</div>
            <h3 className="font-bold text-white">{title}</h3>
        </div>
        <p className="text-sm text-neutral-400">{content}</p>
    </Card>
);

export const CharsetPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Character Set</h1>
            <p className="text-neutral-400 mb-8">The building blocks of the Python language.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CharsetCard icon="Aa" title="Letters" content="A-Z, a-z" />
                <CharsetCard icon="09" title="Digits" content="0-9" />
                <CharsetCard icon="@#" title="Special Symbols" content='+ - * / % {} [] <> // == = , ; : " ! \ **' />
                <CharsetCard icon="_" title="Whitespace" content="Space, Tab, Newline, Carriage Return" />
            </div>
            <div className="mt-6 card p-4 border-l-4 border-l-orange-500 bg-neutral-900/50">
                <p className="text-sm text-neutral-300"><strong className="text-white">Note:</strong> Python supports all ASCII and Unicode characters, meaning you can process data in almost any human language.</p>
            </div>
        </div>
    );
};

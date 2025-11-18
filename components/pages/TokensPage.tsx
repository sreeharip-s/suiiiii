
import React from 'react';
import { Card } from '../common/Card';

const TokenStep = ({ num, title, desc }: { num: number, title: string, desc: string }) => (
    <Card className="p-4 flex items-center">
        <div className="w-10 h-10 rounded-full bg-orange-900/30 text-orange-500 flex items-center justify-center font-bold mr-4 shrink-0">{num}</div>
        <div>
            <h4 className="text-white font-bold">{title}</h4>
            <p className="text-sm text-neutral-400">{desc}</p>
        </div>
    </Card>
);

export const TokensPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Tokens</h1>
            <p className="text-neutral-400 mb-8">The smallest meaningful units in a program (lexical units).</p>

            <Card className="p-6 mb-8">
                <h3 className="text-sm font-bold text-orange-500 uppercase tracking-wide mb-2">Example Deconstruction</h3>
                <div className="bg-black p-4 rounded border border-neutral-800 font-mono text-lg text-center text-white mb-4">
                    "I Like Apples"
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 rounded bg-neutral-800 text-emerald-400 font-mono text-sm">"</span>
                    <span className="px-3 py-1 rounded bg-neutral-800 text-blue-400 font-mono text-sm">I</span>
                    <span className="px-3 py-1 rounded bg-neutral-800 text-blue-400 font-mono text-sm">Like</span>
                    <span className="px-3 py-1 rounded bg-neutral-800 text-blue-400 font-mono text-sm">Apples</span>
                    <span className="px-3 py-1 rounded bg-neutral-800 text-emerald-400 font-mono text-sm">"</span>
                </div>
                <p className="text-center text-xs text-neutral-500 mt-2">Each block above is a token</p>
            </Card>

            <h3 className="text-white font-bold mb-4">The 5 Types of Tokens</h3>
            <div className="space-y-3">
                <TokenStep num={1} title="Keywords" desc="Reserved words with special meaning." />
                <TokenStep num={2} title="Identifiers" desc="Names for variables and functions." />
                <TokenStep num={3} title="Literals" desc="Fixed values (data)." />
                <TokenStep num={4} title="Operators" desc="Symbols for math and logic." />
                <TokenStep num={5} title="Punctuators" desc="Symbols for organization." />
            </div>
        </div>
    );
};

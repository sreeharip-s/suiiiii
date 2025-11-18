
import React from 'react';
import { Card } from '../common/Card';
import { CodeBlock } from '../common/CodeBlock';

export const VariablesPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Variables</h1>
            <p className="text-neutral-400 mb-8">Dynamic typing and assignment.</p>

            <div className="grid grid-cols-1 gap-6">
                <Card className="p-6 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-orange-500/10 rounded-bl-full"></div>
                    <h3 className="text-lg font-bold text-white mb-4 relative z-10">Dynamic Typing</h3>
                    <p className="text-sm text-neutral-400 mb-4 relative z-10">You don't need to tell Python what type of data a variable holds. It figures it out.</p>
                    <CodeBlock className="text-sm relative z-10">{`x = 10       # Int\nx = "Hello"  # Now String`}</CodeBlock>
                </Card>

                <Card className="p-6 border border-red-900/30 bg-red-900/5">
                    <h3 className="text-lg font-bold text-red-400 mb-2">LValue Rule</h3>
                    <p className="text-sm text-neutral-400 mb-4">The left side of an assignment must be a variable (a container).</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                            <div className="text-xs text-emerald-500 font-bold mb-1">Correct</div>
                            <div className="font-mono text-neutral-300 text-sm">a = 10</div>
                        </div>
                        <div className="bg-neutral-950 p-3 rounded-lg border border-neutral-800">
                            <div className="text-xs text-red-500 font-bold mb-1">Wrong</div>
                            <div className="font-mono text-neutral-300 text-sm">10 = a</div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};


import React from 'react';
import { Card } from '../common/Card';
import { CodeBlock } from '../common/CodeBlock';

export const IoPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-2">Input & Output</h1>
            <p className="text-neutral-400 mb-8">Talking to the user.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">Input</h3>
                        <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded border border-blue-900">input()</span>
                    </div>
                    <p className="text-sm text-neutral-400 mb-4">Always returns a <strong className="text-white">String</strong>.</p>
                    <CodeBlock className="text-sm mb-4">{`age = input("Age: ")`}</CodeBlock>
                    <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                        <p className="text-xs text-orange-400 mb-1 font-bold">Conversion Required</p>
                        <p className="text-xs text-neutral-400">If you want math, use int().</p>
                        <div className="font-mono text-emerald-400 text-sm mt-2">int(input("Age: "))</div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">Output</h3>
                        <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded border border-green-900">print()</span>
                    </div>
                    <p className="text-sm text-neutral-400 mb-4">Displays data to screen.</p>
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs text-neutral-500 mb-1">Separator</p>
                            <CodeBlock className="text-sm">{`print("A","B", sep="-")\n# Output: A-B`}</CodeBlock>
                        </div>
                        <div>
                            <p className="text-xs text-neutral-500 mb-1">End Character</p>
                            <CodeBlock className="text-sm">{`print("Hi", end="")\n# No newline after "Hi"`}</CodeBlock>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
